"""
IOC Radar X - Correlation & Intelligence Engine
Frequency analysis, timeline clustering, risk scoring, MITRE ATT&CK mapping.
"""
from collections import defaultdict, Counter
from datetime import datetime
from engine.logger import get_logger

logger = get_logger()


# MITRE ATT&CK keyword-to-technique mapping (subset)
MITRE_MAPPING = {
    "phishing": {"id": "T1566", "name": "Phishing", "tactic": "Initial Access"},
    "spearphishing": {"id": "T1566.001", "name": "Spearphishing Attachment", "tactic": "Initial Access"},
    "exploit": {"id": "T1203", "name": "Exploitation for Client Execution", "tactic": "Execution"},
    "powershell": {"id": "T1059.001", "name": "PowerShell", "tactic": "Execution"},
    "cmd": {"id": "T1059.003", "name": "Windows Command Shell", "tactic": "Execution"},
    "script": {"id": "T1059", "name": "Command and Scripting Interpreter", "tactic": "Execution"},
    "macro": {"id": "T1204.002", "name": "Malicious File", "tactic": "Execution"},
    "registry": {"id": "T1547.001", "name": "Registry Run Keys", "tactic": "Persistence"},
    "scheduled task": {"id": "T1053.005", "name": "Scheduled Task", "tactic": "Persistence"},
    "service": {"id": "T1543.003", "name": "Windows Service", "tactic": "Persistence"},
    "credential": {"id": "T1003", "name": "OS Credential Dumping", "tactic": "Credential Access"},
    "mimikatz": {"id": "T1003.001", "name": "LSASS Memory", "tactic": "Credential Access"},
    "brute force": {"id": "T1110", "name": "Brute Force", "tactic": "Credential Access"},
    "lateral": {"id": "T1021", "name": "Remote Services", "tactic": "Lateral Movement"},
    "rdp": {"id": "T1021.001", "name": "Remote Desktop Protocol", "tactic": "Lateral Movement"},
    "smb": {"id": "T1021.002", "name": "SMB/Windows Admin Shares", "tactic": "Lateral Movement"},
    "exfiltration": {"id": "T1041", "name": "Exfiltration Over C2 Channel", "tactic": "Exfiltration"},
    "c2": {"id": "T1071", "name": "Application Layer Protocol", "tactic": "Command and Control"},
    "cobalt strike": {"id": "T1071.001", "name": "Web Protocols (Cobalt Strike)", "tactic": "Command and Control"},
    "beacon": {"id": "T1071.001", "name": "Web Protocols (Beacon)", "tactic": "Command and Control"},
    "dns tunnel": {"id": "T1071.004", "name": "DNS", "tactic": "Command and Control"},
    "ransomware": {"id": "T1486", "name": "Data Encrypted for Impact", "tactic": "Impact"},
    "wiper": {"id": "T1485", "name": "Data Destruction", "tactic": "Impact"},
    "defacement": {"id": "T1491", "name": "Defacement", "tactic": "Impact"},
    "privilege escalation": {"id": "T1068", "name": "Exploitation for Privilege Escalation", "tactic": "Privilege Escalation"},
    "defense evasion": {"id": "T1562", "name": "Impair Defenses", "tactic": "Defense Evasion"},
    "obfuscation": {"id": "T1027", "name": "Obfuscated Files or Information", "tactic": "Defense Evasion"},
    "rootkit": {"id": "T1014", "name": "Rootkit", "tactic": "Defense Evasion"},
    "keylogger": {"id": "T1056.001", "name": "Keylogging", "tactic": "Collection"},
    "screenshot": {"id": "T1113", "name": "Screen Capture", "tactic": "Collection"},
    "backdoor": {"id": "T1059", "name": "Backdoor (Execution)", "tactic": "Execution"},
}

# Threat keyword density scoring
THREAT_KEYWORD_WEIGHTS = {
    "malware": 3, "ransomware": 3, "trojan": 3, "backdoor": 3,
    "exploit": 3, "zero-day": 3, "0day": 3, "apt": 3,
    "phishing": 2, "botnet": 2, "c2": 2, "payload": 2,
    "shellcode": 2, "dropper": 2, "loader": 2, "rat": 2,
    "vulnerability": 1, "cve": 1, "campaign": 1, "breach": 1,
    "attack": 1, "threat": 1, "suspicious": 1, "ioc": 1,
}


class CorrelationEngine:
    """Analyze and correlate extracted IOC data."""

    def __init__(self, tweets, iocs):
        """
        tweets: list of tweet dicts
        iocs: list of IOC dicts (from extractor)
        """
        self.tweets = tweets
        self.iocs = iocs

    def analyze(self):
        """Run full correlation analysis and return results dict."""
        logger.info(f"Running correlation on {len(self.iocs)} IOCs "
                    f"from {len(self.tweets)} tweets")

        results = {
            "frequency": self.frequency_distribution(),
            "top_accounts": self.top_accounts(),
            "timeline": self.timeline_clustering(),
            "keyword_density": self.keyword_density(),
            "risk_score": self.calculate_risk_score(),
            "mitre_tags": self.mitre_attack_tags(),
            "ioc_type_breakdown": self.ioc_type_breakdown(),
            "summary_stats": {
                "total_tweets": len(self.tweets),
                "total_iocs": len(self.iocs),
                "unique_types": len(set(i["type"] for i in self.iocs)),
                "unique_authors": len(set(
                    t.get("author_handle", "") for t in self.tweets
                    if t.get("author_handle")
                )),
            }
        }

        logger.info(f"Correlation complete — risk score: "
                    f"{results['risk_score']}")
        return results

    def frequency_distribution(self):
        """Count mentions per IOC value."""
        freq = Counter()
        for ioc in self.iocs:
            freq[ioc["value"]] += ioc.get("mention_count", 1)
        # Return sorted by frequency
        return [
            {"value": v, "count": c, "type": self._get_type(v)}
            for v, c in freq.most_common(50)
        ]

    def _get_type(self, value):
        """Find the IOC type for a given value."""
        for ioc in self.iocs:
            if ioc["value"] == value:
                return ioc["type"]
        return "unknown"

    def top_accounts(self):
        """Find accounts that mention the most IOCs."""
        account_iocs = defaultdict(set)
        for ioc in self.iocs:
            author = ioc.get("author", "unknown")
            account_iocs[author].add(ioc["value"])

        ranked = sorted(
            account_iocs.items(),
            key=lambda x: len(x[1]),
            reverse=True
        )
        return [
            {"account": acct, "ioc_count": len(iocs),
             "iocs": list(iocs)[:10]}
            for acct, iocs in ranked[:20]
        ]

    def timeline_clustering(self):
        """Group IOC mentions by time windows."""
        timeline = defaultdict(lambda: {"count": 0, "types": Counter()})

        for tweet in self.tweets:
            ts = tweet.get("timestamp")
            if not ts:
                continue
            try:
                if isinstance(ts, str):
                    # Parse ISO format
                    dt = datetime.fromisoformat(ts.replace("Z", "+00:00"))
                else:
                    dt = ts
                # Group by hour
                hour_key = dt.strftime("%Y-%m-%d %H:00")
                timeline[hour_key]["count"] += 1
            except (ValueError, AttributeError):
                continue

        # Also count IOCs per time window
        for ioc in self.iocs:
            ts = ioc.get("tweet_timestamp")
            if not ts:
                continue
            try:
                if isinstance(ts, str):
                    dt = datetime.fromisoformat(ts.replace("Z", "+00:00"))
                else:
                    dt = ts
                hour_key = dt.strftime("%Y-%m-%d %H:00")
                timeline[hour_key]["types"][ioc["type"]] += 1
            except (ValueError, AttributeError):
                continue

        sorted_timeline = sorted(timeline.items())
        return [
            {
                "time": t,
                "tweet_count": data["count"],
                "ioc_types": dict(data["types"])
            }
            for t, data in sorted_timeline
        ]

    def keyword_density(self):
        """Calculate threat keyword density across all tweets."""
        all_text = " ".join(t.get("content", "").lower() for t in self.tweets)
        word_count = len(all_text.split()) if all_text else 1

        scores = {}
        for keyword, weight in THREAT_KEYWORD_WEIGHTS.items():
            count = all_text.count(keyword)
            if count > 0:
                density = (count / word_count) * 1000  # per 1000 words
                scores[keyword] = {
                    "count": count,
                    "density": round(density, 3),
                    "weight": weight,
                    "weighted_score": round(count * weight, 1)
                }

        # Sort by weighted score
        return dict(sorted(
            scores.items(),
            key=lambda x: x[1]["weighted_score"],
            reverse=True
        ))

    def calculate_risk_score(self):
        """
        Calculate overall risk score (0-10).
        Based on IOC type weights, frequency, keyword density, and diversity.
        """
        if not self.iocs:
            return 0.0

        # Component 1: IOC type severity (0-3)
        from engine.extractor import IOC_TYPE_WEIGHTS
        type_scores = [
            IOC_TYPE_WEIGHTS.get(ioc["type"], 0.5)
            for ioc in self.iocs
        ]
        avg_type_score = sum(type_scores) / len(type_scores) if type_scores else 0
        type_component = avg_type_score * 3

        # Component 2: Volume (0-2)
        ioc_count = len(self.iocs)
        if ioc_count >= 50:
            volume_component = 2.0
        elif ioc_count >= 20:
            volume_component = 1.5
        elif ioc_count >= 10:
            volume_component = 1.0
        elif ioc_count >= 5:
            volume_component = 0.5
        else:
            volume_component = 0.2

        # Component 3: Keyword density (0-3)
        kw_density = self.keyword_density()
        total_weighted = sum(
            v["weighted_score"] for v in kw_density.values()
        )
        if total_weighted >= 50:
            kw_component = 3.0
        elif total_weighted >= 20:
            kw_component = 2.0
        elif total_weighted >= 10:
            kw_component = 1.0
        else:
            kw_component = total_weighted / 10.0

        # Component 4: IOC diversity (0-2)
        unique_types = len(set(i["type"] for i in self.iocs))
        diversity_component = min(2.0, unique_types * 0.4)

        risk = type_component + volume_component + kw_component + diversity_component
        risk = round(min(10.0, max(0.0, risk)), 1)

        logger.debug(f"Risk breakdown: type={type_component:.1f} "
                     f"vol={volume_component:.1f} kw={kw_component:.1f} "
                     f"div={diversity_component:.1f} => {risk}")
        return risk

    def mitre_attack_tags(self):
        """Tag with MITRE ATT&CK techniques based on keyword presence."""
        all_text = " ".join(t.get("content", "").lower() for t in self.tweets)
        matched = {}

        for keyword, technique in MITRE_MAPPING.items():
            if keyword in all_text:
                tid = technique["id"]
                if tid not in matched:
                    matched[tid] = {
                        "id": tid,
                        "name": technique["name"],
                        "tactic": technique["tactic"],
                        "keyword_triggers": [keyword],
                    }
                else:
                    matched[tid]["keyword_triggers"].append(keyword)

        return list(matched.values())

    def ioc_type_breakdown(self):
        """Count IOCs per type."""
        breakdown = Counter(ioc["type"] for ioc in self.iocs)
        return [
            {"type": t, "count": c}
            for t, c in breakdown.most_common()
        ]
