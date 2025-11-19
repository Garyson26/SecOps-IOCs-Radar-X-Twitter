"""
IOC Radar X - Playwright-Based X/Twitter Crawler
Headless scraping with anti-detection, proxy support, and cookie auth.
"""
import asyncio
import json
import os
import random
import re
from datetime import datetime, timezone
from urllib.parse import quote_plus

from engine.logger import get_logger
import config

logger = get_logger()


class XCrawler:
    """Headless Playwright crawler for X (Twitter) search."""

    USER_AGENTS = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15",
    ]

    VIEWPORTS = [
        {"width": 1920, "height": 1080},
        {"width": 1536, "height": 864},
        {"width": 1440, "height": 900},
        {"width": 1366, "height": 768},
        {"width": 1280, "height": 720},
    ]

    def __init__(self, proxy=None, debug=False, cookies=None):
        self.proxy = proxy
        self.debug = debug
        self.cookies = cookies  # List of Playwright-format cookie dicts
        self.browser = None
        self.context = None
        self.page = None
        self._progress_callback = None
        self._stop_flag = False

    def set_progress_callback(self, callback):
        """Set a callback for progress updates: callback(status, detail, count)."""
        self._progress_callback = callback

    def stop(self):
        """Signal the crawler to stop at the next opportunity."""
        self._stop_flag = True

    def _emit(self, status, detail="", count=0):
        """Emit progress update."""
        if self._progress_callback:
            self._progress_callback(status, detail, count)
        logger.info(f"[Crawler] {status}: {detail} (count={count})")

    async def _init_browser(self):
        """Initialize Playwright browser with stealth settings."""
        from playwright.async_api import async_playwright

        self._pw = await async_playwright().__aenter__()

        launch_args = {
            "headless": True,
            "args": [
                "--disable-blink-features=AutomationControlled",
                "--disable-features=IsolateOrigins,site-per-process",
                "--disable-dev-shm-usage",
                "--no-sandbox",
            ]
        }

        if self.proxy:
            launch_args["proxy"] = {"server": self.proxy}

        self.browser = await self._pw.chromium.launch(**launch_args)

        # Randomize fingerprint
        ua = random.choice(self.USER_AGENTS)
        vp = random.choice(self.VIEWPORTS)

        context_opts = {
            "user_agent": ua,
            "viewport": vp,
            "locale": "en-US",
            "timezone_id": "America/New_York",
            "java_script_enabled": True,
        }

        if self.debug:
            config.ensure_dirs()
            har_path = os.path.join(
                config.DEBUG_DIR,
                f"har_{datetime.now().strftime('%Y%m%d_%H%M%S')}.har"
            )
            context_opts["record_har_path"] = har_path
            context_opts["record_har_url_filter"] = "**/*"

        self.context = await self.browser.new_context(**context_opts)

        # Inject stealth scripts
        await self.context.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
            Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
            window.chrome = { runtime: {} };
        """)

        # Inject cookies if authenticated
        if self.cookies:
            await self.context.add_cookies(self.cookies)
            logger.info("Injected authentication cookies")

        self.page = await self.context.new_page()
        self.page.set_default_timeout(config.PAGE_LOAD_TIMEOUT)
        self.page.set_default_navigation_timeout(config.NAVIGATION_TIMEOUT)

    async def _close(self):
        """Close browser and cleanup."""
        try:
            if self.context:
                await self.context.close()
            if self.browser:
                await self.browser.close()
            if hasattr(self, '_pw') and self._pw:
                await self._pw.__aexit__(None, None, None)
        except Exception as e:
            logger.warning(f"Cleanup error: {e}")

    def _build_search_url(self, keyword, since=None, until=None):
        """Build X search URL with date filters."""
        query = keyword
        if since:
            query += f" since:{since}"
        if until:
            query += f" until:{until}"
        encoded = quote_plus(query)
        return f"https://x.com/search?q={encoded}&src=typed_query&f=live"

    async def _human_delay(self, min_s=None, max_s=None):
        """Wait for a random human-like interval."""
        lo = min_s or config.SCROLL_DELAY_MIN
        hi = max_s or config.SCROLL_DELAY_MAX
        delay = random.uniform(lo, hi)
        await asyncio.sleep(delay)

    async def _check_auth_status(self):
        """Check if we're still authenticated or got logged out."""
        try:
            url = self.page.url
            if "/login" in url or "/i/flow/login" in url:
                logger.warning("Session expired — redirected to login page")
                return False
            return True
        except Exception:
            return True

    async def _capture_debug(self, label=""):
        """Capture debug artifacts (screenshot + HTML)."""
        if not self.debug:
            return
        config.ensure_dirs()
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        prefix = f"{label}_{ts}" if label else ts

        try:
            screenshot_path = os.path.join(config.DEBUG_DIR, f"screenshot_{prefix}.png")
            await self.page.screenshot(path=screenshot_path, full_page=False)
            logger.debug(f"Screenshot saved: {screenshot_path}")
        except Exception as e:
            logger.warning(f"Screenshot capture failed: {e}")

        try:
            html_path = os.path.join(config.DEBUG_DIR, f"page_{prefix}.html")
            content = await self.page.content()
            with open(html_path, "w", encoding="utf-8") as f:
                f.write(content)
            logger.debug(f"HTML snapshot saved: {html_path}")
        except Exception as e:
            logger.warning(f"HTML capture failed: {e}")

    async def _extract_tweets_from_page(self):
        """Extract tweet data from currently rendered DOM."""
        tweets = []
        try:
            articles = await self.page.query_selector_all('article[data-testid="tweet"]')
            for article in articles:
                try:
                    tweet_data = await self._parse_tweet_article(article)
                    if tweet_data:
                        tweets.append(tweet_data)
                except Exception as e:
                    logger.debug(f"Failed to parse tweet article: {e}")
                    continue
        except Exception as e:
            logger.warning(f"Tweet extraction error: {e}")
        return tweets

    async def _parse_tweet_article(self, article):
        """Parse a single tweet article element."""
        data = {
            "tweet_id": None,
            "author": None,
            "author_handle": None,
            "content": "",
            "timestamp": None,
            "url": None
        }

        # Extract author info
        try:
            user_links = await article.query_selector_all('a[role="link"]')
            for link in user_links:
                href = await link.get_attribute("href")
                if href and href.startswith("/") and "/status/" not in href:
                    handle = href.strip("/")
                    if handle and not handle.startswith("i/"):
                        data["author_handle"] = f"@{handle}"
                        # Get display name
                        spans = await link.query_selector_all("span")
                        for span in spans:
                            text = await span.inner_text()
                            if text and text != f"@{handle}":
                                data["author"] = text
                                break
                        break
        except Exception:
            pass

        # Extract tweet text
        try:
            text_el = await article.query_selector('[data-testid="tweetText"]')
            if text_el:
                data["content"] = await text_el.inner_text()
        except Exception:
            pass

        if not data["content"]:
            return None

        # Extract timestamp and tweet URL
        try:
            time_el = await article.query_selector("time")
            if time_el:
                dt_attr = await time_el.get_attribute("datetime")
                if dt_attr:
                    data["timestamp"] = dt_attr

                parent_link = await time_el.query_selector("xpath=ancestor::a")
                if parent_link:
                    href = await parent_link.get_attribute("href")
                    if href:
                        data["url"] = f"https://x.com{href}"
                        # Extract tweet ID from URL
                        match = re.search(r"/status/(\d+)", href)
                        if match:
                            data["tweet_id"] = match.group(1)
        except Exception:
            pass

        return data

    async def crawl(self, keyword, since=None, until=None, max_tweets=None):
        """
        Crawl X search results for the given keyword.
        Returns list of tweet dicts.
        """
        max_tweets = max_tweets or config.DEFAULT_MAX_TWEETS
        collected = []
        seen_ids = set()
        stale_count = 0
        max_stale = 5  # Stop after N scrolls with no new tweets

        self._stop_flag = False
        self._emit("initializing", "Launching headless browser...")

        try:
            await self._init_browser()

            search_url = self._build_search_url(keyword, since, until)
            self._emit("navigating", f"Loading search: {keyword}")
            logger.info(f"Navigating to: {search_url}")

            await self.page.goto(search_url, wait_until="domcontentloaded")
            await self._human_delay(3, 5)

            # Check for login redirect
            if not await self._check_auth_status():
                self._emit("error", "Authentication expired — redirected to login")
                await self._capture_debug("auth_expired")
                return collected

            await self._capture_debug("initial_load")
            self._emit("scrolling", "Extracting tweets...", len(collected))

            while len(collected) < max_tweets and not self._stop_flag:
                # Extract from current view
                page_tweets = await self._extract_tweets_from_page()
                new_count = 0

                for tweet in page_tweets:
                    tid = tweet.get("tweet_id") or hash(tweet["content"])
                    if tid not in seen_ids:
                        seen_ids.add(tid)
                        collected.append(tweet)
                        new_count += 1

                        if len(collected) >= max_tweets:
                            break

                if new_count == 0:
                    stale_count += 1
                    if stale_count >= max_stale:
                        logger.info("No new tweets after multiple scrolls — stopping")
                        self._emit("complete",
                                   "Reached end of results", len(collected))
                        break
                else:
                    stale_count = 0

                self._emit("scrolling",
                           f"Collected {len(collected)}/{max_tweets} tweets",
                           len(collected))

                # Scroll down
                await self.page.evaluate(
                    "window.scrollBy(0, window.innerHeight * 2)"
                )
                await self._human_delay()

                # Re-check auth
                if not await self._check_auth_status():
                    self._emit("error", "Session expired during crawl")
                    break

                # Rate throttle
                await asyncio.sleep(config.RATE_THROTTLE_SECONDS)

            self._emit("complete",
                        f"Finished — collected {len(collected)} tweets",
                        len(collected))
            await self._capture_debug("final")

        except Exception as e:
            logger.error(f"Crawl failed: {e}", exc_info=True)
            self._emit("error", str(e), len(collected))
            await self._capture_debug("error")
        finally:
            await self._close()

        return collected


def run_crawl(keyword, since=None, until=None, max_tweets=None,
              proxy=None, debug=False, cookies=None, progress_cb=None):
    """Synchronous wrapper to run the async crawler."""
    crawler = XCrawler(proxy=proxy, debug=debug, cookies=cookies)
    if progress_cb:
        crawler.set_progress_callback(progress_cb)

    loop = asyncio.new_event_loop()
    try:
        tweets = loop.run_until_complete(
            crawler.crawl(keyword, since, until, max_tweets)
        )
    finally:
        loop.close()

    return tweets
