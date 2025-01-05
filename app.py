"""
IOC Radar X - Flask Web GUI
Dark cyberpunk dashboard with live scanning, IOC table, and dossier export.
"""
import os
import json
import threading
import time
from datetime import datetime, timezone
from flask import (Flask, render_template, request, jsonify,
                   Response, send_file, session, redirect, url_for)
from werkzeug.utils import secure_filename

import config
from engine.logger import get_logger, get_log_buffer, clear_log_buffer

logger = get_logger()

# Global scan state (thread-safe via lock)
_scan_lock = threading.Lock()
_scan_state = {
    "running": False,
    "status": "idle",
    "detail": "",
    "count": 0,
    "search_id": None,
    "error": None,
}
_scan_events = []  # SSE event queue


def _push_event(event_type, data):
    """Push an SSE event."""
    _scan_events.append({
        "type": event_type,
        "data": json.dumps(data, default=str),
        "id": len(_scan_events),
    })


def create_app():
    """Create and configure the Flask application."""
    app = Flask(__name__,
                template_folder=os.path.join(config.BASE_DIR, "templates"),
                static_folder=os.path.join(config.BASE_DIR, "static"))

    app.secret_key = config.FLASK_SECRET_KEY
    app.config["MAX_CONTENT_LENGTH"] = config.MAX_CONTENT_LENGTH

    # Initialize database
    from database.models import init_db
    init_db()

    # --- Language Helper ---
    def get_lang():
        lang_code = session.get("lang", config.DEFAULT_LANGUAGE)
        lang_file = os.path.join(config.LANG_DIR, f"{lang_code}.json")
        try:
            with open(lang_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except FileNotFoundError:
            # Fallback to English
            en_file = os.path.join(config.LANG_DIR, "en.json")
            with open(en_file, "r", encoding="utf-8") as f:
                return json.load(f)

    @app.context_processor
    def inject_globals():
        return {
            "lang": get_lang(),
            "current_lang": session.get("lang", config.DEFAULT_LANGUAGE),
        }

    # --- Routes ---

    @app.route("/")
    def dashboard():
        from database.models import Search
        from database import get_session
        db = get_session()
        searches = db.query(Search).order_by(Search.timestamp.desc()).limit(20).all()
        has_cookies = session.get("auth_mode", False)
        return render_template("index.html",
                               searches=searches,
                               auth_mode=has_cookies,
                               scan_state=_scan_state)

    @app.route("/set-lang/<lang_code>")
    def set_language(lang_code):
        if lang_code in config.SUPPORTED_LANGUAGES:
            session["lang"] = lang_code
        return redirect(url_for("dashboard"))

    @app.route("/upload-cookies", methods=["POST"])
    def upload_cookies():
        if "file" not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files["file"]
        if not file.filename:
            return jsonify({"error": "No file selected"}), 400

        # Validate size
        file.seek(0, 2)
        size = file.tell()
        file.seek(0)

        from engine.security import validate_upload_size
        if not validate_upload_size(size):
            return jsonify({"error": "File too large (max 1MB)"}), 400

        try:
            raw = file.read().decode("utf-8")
            cookies = json.loads(raw)

            from engine.security import validate_cookies, encrypt_cookie
            validation = validate_cookies(cookies)

            if not validation["valid"]:
                return jsonify({
                    "error": "Cookie validation failed",
                    "details": validation["errors"]
                }), 400

            # Encrypt and store
            encrypted = encrypt_cookie(raw)
            cookie_path = os.path.join(config.BASE_DIR, ".encrypted_cookies")
            with open(cookie_path, "wb") as f:
                f.write(encrypted)
            os.chmod(cookie_path, 0o600)

            session["auth_mode"] = True
            logger.info("Cookies uploaded and encrypted successfully")

            return jsonify({
                "success": True,
                "message": "Cookies validated and encrypted",
                "expired": validation["expired"],
            })

        except json.JSONDecodeError:
            return jsonify({"error": "Invalid JSON file"}), 400
        except Exception as e:
            logger.error(f"Cookie upload failed: {e}")
            return jsonify({"error": str(e)}), 500

    @app.route("/scan", methods=["POST"])
    def start_scan():
        global _scan_state

        if _scan_state["running"]:
            return jsonify({"error": "A scan is already running"}), 409

        data = request.get_json() or {}
        keyword = data.get("keyword", "").strip()
        if not keyword:
            return jsonify({"error": "Keyword is required"}), 400

        from engine.security import sanitize_keyword
        keyword = sanitize_keyword(keyword)

        since = data.get("since") or None
        until = data.get("until") or None
        max_tweets = int(data.get("max_tweets", 100))
        max_tweets = min(max_tweets, 500)

        # Determine auth mode
        pw_cookies = None
        mode = "unauth"
        cookie_path = os.path.join(config.BASE_DIR, ".encrypted_cookies")
        if session.get("auth_mode") and os.path.exists(cookie_path):
            try:
                from engine.security import decrypt_cookie_file, cookies_to_playwright
                raw_cookies = decrypt_cookie_file(cookie_path)
                pw_cookies = cookies_to_playwright(raw_cookies)
                mode = "auth"
            except Exception as e:
                logger.warning(f"Cookie decryption failed: {e}")

        # Reset scan state
        with _scan_lock:
            _scan_state = {
                "running": True,
                "status": "starting",
                "detail": "Initializing scan...",
                "count": 0,
                "search_id": None,
                "error": None,
            }
            _scan_events.clear()

        _push_event("status", {"status": "starting", "detail": "Initializing..."})

        # Run scan in background thread
        def _run_scan():
            global _scan_state
            try:
                _do_scan(keyword, since, until, max_tweets, mode, pw_cookies)
            except Exception as e:
                logger.error(f"Scan failed: {e}", exc_info=True)
                with _scan_lock:
                    _scan_state["running"] = False
                    _scan_state["status"] = "error"
                    _scan_state["error"] = str(e)
                _push_event("error", {"error": str(e)})

        thread = threading.Thread(target=_run_scan, daemon=True)
        thread.start()

        return jsonify({"success": True, "message": "Scan started"})

    def _do_scan(keyword, since, until, max_tweets, mode, pw_cookies):
        """Execute the full scan pipeline in a background thread."""
        global _scan_state

        from database.models import Search, Tweet, IOC
        from database import SessionFactory
        # Use a dedicated session for the background thread (not scoped)
        db = SessionFactory()

        try:
            # Create search record
            search = Search(
                keyword=keyword, mode=mode,
                since_date=since, until_date=until,
                max_tweets=max_tweets, status="running"
            )
            db.add(search)
            db.commit()

            with _scan_lock:
                _scan_state["search_id"] = search.id

            def progress_cb(status, detail, count):
                with _scan_lock:
                    _scan_state["status"] = status
                    _scan_state["detail"] = detail
                    _scan_state["count"] = count
                _push_event("progress", {
                    "status": status, "detail": detail, "count": count
                })

            # === Stage 1: Crawl ===
            from engine.crawler import run_crawl
            tweets = run_crawl(
                keyword=keyword, since=since, until=until,
                max_tweets=max_tweets, proxy=None,
                debug=False, cookies=pw_cookies,
                progress_cb=progress_cb
            )

            logger.info(f"Crawler returned {len(tweets)} tweets")

            # === Stage 2: Persist tweets ===
            progress_cb("extracting", f"Processing {len(tweets)} tweets...", len(tweets))

            # Deduplicate tweets (crawler can return duplicates from overlapping scrolls)
            seen_ids = set()
            unique_tweets = []
            for tw in tweets:
                tid = tw.get("tweet_id")
                content_hash = str(hash(tw.get("content", "")))
                dedup_key = tid or content_hash
                if dedup_key not in seen_ids:
                    seen_ids.add(dedup_key)
                    unique_tweets.append(tw)
            tweets = unique_tweets

            # Persist each tweet individually to avoid batch failure
            saved_tweets = 0
            for tw in tweets:
                try:
                    # Skip checking for existing cross-search because 
                    # we want THIS search to retain its own copy of the tweeted data.
                    # Bypassing the SQLite UNIQUE constraint by namespacing the tweet ID 
                    # with the current search_id.
                    db_tweet_id = tw.get("tweet_id")
                    if db_tweet_id:
                        db_tweet_id = f"{db_tweet_id}_{search.id}"

                    # Parse timestamp from ISO string if present
                    ts_val = tw.get("timestamp")
                    if isinstance(ts_val, str):
                        try:
                            # Python 3.11+ supports 'Z' natively, but just in case
                            clean_ts = ts_val.replace("Z", "+00:00")
                            from datetime import datetime
                            parsed = datetime.fromisoformat(clean_ts)
                            # Strip tzinfo for SQLite compatibility
                            ts_val = parsed.replace(tzinfo=None)
                        except Exception as parse_e:
                            logger.warning(f"Failed to parse timestamp {ts_val}: {parse_e}")
                            ts_val = None

                    record = Tweet(
                        tweet_id=db_tweet_id,
                        author=tw.get("author"),
                        author_handle=tw.get("author_handle"),
                        content=tw.get("content", ""),
                        timestamp=ts_val,
                        url=tw.get("url"),
                        search_id=search.id
                    )
                    db.add(record)
                    db.flush()  # Flush individually to catch errors early
                    saved_tweets += 1
                except Exception as e:
                    db.rollback()
                    logger.warning(f"Failed to save tweet {tw.get('tweet_id')}: {e}")
                    continue

            db.commit()
            logger.info(f"Saved {saved_tweets}/{len(tweets)} tweets to database")

            # === Stage 3: Extract IOCs ===
            from engine.extractor import IOCExtractor
            extractor = IOCExtractor()
            iocs = extractor.extract_from_tweets(tweets)
            logger.info(f"Extracted {len(iocs)} IOCs")

            # === Stage 4: Persist IOCs ===
            # Build tweet_id → DB id mapping
            db_tweets = db.query(Tweet).filter_by(search_id=search.id).all()
            tweet_map = {}
            first_tweet_db_id = None
            for t in db_tweets:
                if first_tweet_db_id is None:
                    first_tweet_db_id = t.id
                if t.tweet_id:
                    tweet_map[t.tweet_id] = t.id
                # Also map by content hash for tweets without IDs
                tweet_map[str(hash(t.content))] = t.id

            saved_iocs = 0
            for ioc in iocs:
                try:
                    # Try to find the matching tweet DB id
                    tw_db_id = tweet_map.get(ioc.get("tweet_id"))
                    if not tw_db_id:
                        # Fallback: try content hash
                        tw_db_id = tweet_map.get(
                            str(hash(ioc.get("context", "")))
                        )
                    if not tw_db_id:
                        # Last resort: assign to first tweet
                        tw_db_id = first_tweet_db_id

                    if tw_db_id:
                        record = IOC(
                            ioc_type=ioc["type"],
                            value=ioc["value"],
                            context=ioc.get("context", "")[:2000],
                            confidence=ioc["confidence"],
                            tweet_id=tw_db_id
                        )
                        db.add(record)
                        saved_iocs += 1
                except Exception as e:
                    logger.warning(f"Failed to save IOC {ioc.get('value')}: {e}")
                    continue

            db.commit()
            logger.info(f"Saved {saved_iocs}/{len(iocs)} IOCs to database")

            # === Stage 5: Correlate ===
            progress_cb("correlating", "Running correlation analysis...", len(iocs))
            from engine.correlation import CorrelationEngine
            correlator = CorrelationEngine(tweets, iocs)
            correlation = correlator.analyze()

            # === Stage 6: Update search record with final stats ===
            search.status = "done"
            search.total_tweets = saved_tweets
            search.total_iocs = saved_iocs
            search.risk_score = correlation["risk_score"]
            db.commit()

            logger.info(f"Scan complete: {saved_tweets} tweets, "
                        f"{saved_iocs} IOCs, risk={correlation['risk_score']}")

            with _scan_lock:
                _scan_state["running"] = False
                _scan_state["status"] = "complete"
                _scan_state["detail"] = (
                    f"Found {saved_iocs} IOCs from {saved_tweets} tweets"
                )
                _scan_state["count"] = saved_iocs

            _push_event("complete", {
                "search_id": search.id,
                "tweets": saved_tweets,
                "iocs": saved_iocs,
                "risk_score": correlation["risk_score"],
            })

        except Exception as e:
            logger.error(f"Scan pipeline failed: {e}", exc_info=True)
            db.rollback()
            with _scan_lock:
                _scan_state["running"] = False
                _scan_state["status"] = "error"
                _scan_state["error"] = str(e)
            _push_event("error", {"error": str(e)})
        finally:
            db.close()

    @app.route("/status-stream")
    def status_stream():
        """SSE endpoint for live scan status."""
        def generate():
            last_id = 0
            while True:
                for event in _scan_events[last_id:]:
                    yield f"id: {event['id']}\n"
                    yield f"event: {event['type']}\n"
                    yield f"data: {event['data']}\n\n"
                    last_id = event['id'] + 1
                time.sleep(0.5)
                # Send keepalive
                yield ": keepalive\n\n"

        return Response(
            generate(),
            mimetype="text/event-stream",
            headers={
                "Cache-Control": "no-cache",
                "X-Accel-Buffering": "no",
            }
        )

    @app.route("/api/results/<int:search_id>")
    def get_results(search_id):
        """Get scan results for a specific search."""
        from database.models import Search, Tweet, IOC
        from database import SessionFactory
        db = SessionFactory()

        try:
            search = db.query(Search).get(search_id)
            if not search:
                return jsonify({"error": "Search not found"}), 404

            tweets = db.query(Tweet).filter_by(search_id=search_id).all()
            tweet_ids = [t.id for t in tweets]
            iocs = db.query(IOC).filter(
                IOC.tweet_id.in_(tweet_ids)
            ).all() if tweet_ids else []

            return jsonify({
                "search": {
                    "id": search.id,
                    "keyword": search.keyword,
                    "mode": search.mode,
                    "status": search.status,
                    "timestamp": search.timestamp.isoformat() if search.timestamp else None,
                    "total_tweets": search.total_tweets or len(tweets),
                    "total_iocs": search.total_iocs or len(iocs),
                    "risk_score": search.risk_score or 0,
                },
                "tweets": [
                    {
                        "id": t.id,
                        "tweet_id": t.tweet_id,
                        "author": t.author,
                        "author_handle": t.author_handle,
                        "content": t.content,
                        "timestamp": t.timestamp.isoformat() if t.timestamp else None,
                        "url": t.url,
                    }
                    for t in tweets
                ],
                "iocs": [
                    {
                        "id": i.id,
                        "type": i.ioc_type,
                        "value": i.value,
                        "confidence": i.confidence,
                        "risk_score": i.risk_score,
                        "context": i.context,
                    }
                    for i in iocs
                ],
            })
        finally:
            db.close()

    @app.route("/api/export/<int:search_id>/<fmt>")
    def export_dossier(search_id, fmt):
        """Export dossier in specified format."""
        if fmt not in ("json", "html", "pdf"):
            return jsonify({"error": "Invalid format"}), 400

        from database.models import Search, Tweet, IOC
        from database import get_session
        db = get_session()

        search = db.query(Search).get(search_id)
        if not search:
            return jsonify({"error": "Search not found"}), 404

        tweets = db.query(Tweet).filter_by(search_id=search_id).all()
        tweet_ids = [t.id for t in tweets]
        iocs = db.query(IOC).filter(IOC.tweet_id.in_(tweet_ids)).all() if tweet_ids else []

        # Convert to dicts
        tweet_dicts = [
            # strip the _searchId suffix before sending to frontend
            {"tweet_id": t.tweet_id.split('_')[0] if t.tweet_id else None, 
             "author": t.author,
             "author_handle": t.author_handle, "content": t.content,
             "timestamp": t.timestamp.isoformat() if t.timestamp else None,
             "url": t.url}
            for t in tweets
        ]
        ioc_dicts = [
            {"type": i.ioc_type, "value": i.value,
             "confidence": i.confidence, "context": i.context,
             "mention_count": 1}
            for i in iocs
        ]

        # Run correlation
        from engine.correlation import CorrelationEngine
        correlator = CorrelationEngine(tweet_dicts, ioc_dicts)
        correlation = correlator.analyze()

        config.ensure_dirs()
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        search_data = {
            "keyword": search.keyword, "mode": search.mode,
            "since": search.since_date, "until": search.until_date,
        }

        # Generate dossier (json, html, pdf)
        from engine.dossier import DossierGenerator
        dossier = DossierGenerator(search_data, tweet_dicts, ioc_dicts, correlation)

        filename = f"dossier_{search.keyword.replace(' ', '_')}_{ts}.{fmt}"
        filepath = os.path.join(config.EXPORT_DIR, filename)
        dossier.export(format=fmt, filepath=filepath)

        mimetype_map = {
            "json": "application/json",
            "html": "text/html",
            "pdf": "application/pdf",
        }

        return send_file(filepath, as_attachment=True,
                         download_name=filename,
                         mimetype=mimetype_map[fmt])

    @app.route("/api/logs")
    def get_logs():
        """Get recent log entries for debug console."""
        return jsonify(get_log_buffer()[-100:])

    @app.route("/api/scan-state")
    def get_scan_state():
        """Get current scan state."""
        return jsonify(_scan_state)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host=config.FLASK_HOST, port=config.FLASK_PORT, debug=True)
