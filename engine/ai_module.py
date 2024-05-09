"""
IOC Radar X - AI Enrichment Module (Optional)
Threat narrative generation, attribution hypothesis, TTP mapping.
"""
import json
from engine.logger import get_logger

logger = get_logger()


class AIEnricher:
    """
    Optional AI enrichment module.
    Generates threat narratives and attribution hypotheses.
    System remains fully functional without this module.
    """

    def __init__(self, endpoint=None, api_key=None):
        self.endpoint = endpoint
        self.api_key = api_key
        self.authenticated = False

    def is_available(self):
        """Check if AI enrichment is configured and available."""
        return bool(self.endpoint and self.api_key)

    def authenticate_google(self, client_id, client_secret):
        """
        Google OAuth2 authentication gateway.
        Placeholder — implement with google-auth-oauthlib when needed.
        """
        logger.info("Google authentication requested (stub)")
        # In production: implement OAuth2 web flow
        # 1. Generate authorization URL
        # 2. User completes auth in browser
        # 3. Exchange code for token
        # 4. Store token securely
        self.authenticated = True
        return {"status": "stub", "message": "Google auth not yet implemented"}

    def enrich(self, iocs, tweets, correlation_data):
        """
        Send IOC data to AI for enrichment.
        Returns: dict with narrative, attribution, ttp_mapping
        """
        if not self.is_available():
            logger.info("AI enrichment unavailable — skipping")
            return self._generate_fallback(iocs, correlation_data)

        payload = {
            "iocs": [
                {"type": i["type"], "value": i["value"],
                 "confidence": i["confidence"]}
                for i in iocs[:50]  # Limit payload size
            ],
            "context": {
                "total_tweets": len(tweets),
                "risk_score": correlation_data.get("risk_score", 0),
                "mitre_tags": correlation_data.get("mitre_tags", []),
                "keyword_density": dict(list(
                    correlation_data.get("keyword_density", {}).items()
                )[:10]),
            }
        }

        try:
            import urllib.request
            import urllib.error

            req = urllib.request.Request(
                self.endpoint,
                data=json.dumps(payload).encode("utf-8"),
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {self.api_key}",
                },
                method="POST"
            )

            with urllib.request.urlopen(req, timeout=30) as resp:
                result = json.loads(resp.read().decode("utf-8"))
                logger.info("AI enrichment completed successfully")
                return {
                    "narrative": result.get("narrative", ""),
                    "attribution": result.get("attribution", ""),
                    "ttp_mapping": result.get("ttp_mapping", []),
                    "source": "ai",
                }

        except Exception as e:
            logger.warning(f"AI enrichment failed: {e}")
            return self._generate_fallback(iocs, correlation_data)

    def _generate_fallback(self, iocs, correlation_data):
        """Generate a basic narrative without AI."""
        risk = correlation_data.get("risk_score", 0)
        total = correlation_data.get("summary_stats", {}).get("total_iocs", 0)
        mitre = correlation_data.get("mitre_tags", [])

        severity = "CRITICAL" if risk >= 7 else (
            "HIGH" if risk >= 5 else (
                "MEDIUM" if risk >= 3 else "LOW"
            )
        )

        type_counts = {}
        for ioc in iocs:
            t = ioc["type"]
            type_counts[t] = type_counts.get(t, 0) + 1

        type_summary = ", ".join(
            f"{c} {t}" for t, c in sorted(
                type_counts.items(), key=lambda x: -x[1]
            )
        )

        narrative = (
            f"Threat assessment: {severity} (Risk Score: {risk}/10). "
            f"Analysis identified {total} unique indicators of compromise "
            f"({type_summary}). "
        )

        if mitre:
            techniques = ", ".join(
                f"{m['id']} ({m['name']})" for m in mitre[:5]
            )
            narrative += f"MITRE ATT&CK techniques detected: {techniques}. "

        narrative += (
            "Further investigation recommended to validate indicators "
            "and assess operational impact."
        )

        return {
            "narrative": narrative,
            "attribution": "Insufficient data for attribution hypothesis.",
            "ttp_mapping": [
                {"id": m["id"], "name": m["name"], "tactic": m["tactic"]}
                for m in mitre
            ],
            "source": "fallback",
        }
