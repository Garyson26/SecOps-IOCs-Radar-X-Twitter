"""
IOC Radar X - IOC Extraction Engine v2
Enhanced regex-based detection with comprehensive defanging support,
broad TLD coverage, APT/threat actor tagging, and structured output.
"""
import re
from collections import defaultdict
from engine.logger import get_logger

logger = get_logger()


# === Comprehensive TLD list (common + ccTLD + infra) ===
TLDS = (
    # Generic
    "com|net|org|io|info|biz|xyz|top|cc|co|me|tv|us|pro|dev|app|"
    "site|online|store|tech|cloud|space|fun|live|world|today|"
    "news|media|blog|shop|club|link|work|host|zone|mobi|name|"
    # Country code
    "ru|cn|tk|ml|ga|cf|gq|uk|de|fr|jp|br|in|au|ca|nl|se|no|fi|"
    "ch|at|be|dk|pl|cz|es|it|pt|ro|hu|bg|hr|sk|si|lt|lv|ee|"
    "kr|tw|hk|sg|my|th|id|ph|vn|pk|bd|lk|np|ir|iq|sa|ae|il|"
    "za|ng|ke|eg|ma|tz|gh|et|ug|cm|sn|ci|ml|bf|ne|td|"
    "ar|cl|co|mx|pe|ve|ec|bo|py|uy|cr|pa|do|gt|hn|sv|ni|cu|"
    "ua|by|kz|uz|ge|am|az|md|kg|tj|tm|mn|"
    "nz|fj|ws|to|nu|vu|sb|pw|fm|mh|ki|nr|tv|"
    # Infrastructure / special
    "gov|mil|edu|int|onion|bit|lib|"
    # Compound ccTLDs (must be before single)
    "com\\.au|co\\.uk|co\\.jp|co\\.kr|co\\.in|co\\.za|co\\.nz|"
    "com\\.br|com\\.mx|com\\.ar|com\\.co|com\\.tr|com\\.tw|com\\.cn|"
    "com\\.sg|com\\.my|com\\.ph|com\\.pk|com\\.ng|com\\.eg|"
    "org\\.uk|org\\.au|net\\.au|ac\\.uk|gov\\.uk|"
    "go\\.id|or\\.id|co\\.id|ac\\.id|web\\.id|"
    "go\\.kr|or\\.kr|ne\\.jp|or\\.jp|ac\\.jp|"
    "go\\.th|or\\.th|ac\\.th|co\\.th|"
    "gov\\.in|nic\\.in|ac\\.in|res\\.in"
)

# === Defanging patterns (order matters — longest match first) ===
DEFANG_REPLACEMENTS = [
    # Protocol
    (re.compile(r"hxxps?://", re.I), lambda m: m.group(0).replace("hxx", "htt").replace("hXX", "htt")),
    (re.compile(r"hXXps?://", re.I), lambda m: m.group(0).replace("hXX", "htt").replace("hxx", "htt")),
    (re.compile(r"meow://", re.I), "http://"),
    (re.compile(r"h\[tt\]ps?://", re.I), lambda m: m.group(0).replace("[tt]", "tt")),
    # Dots
    (re.compile(r"\[\.\]"), "."),
    (re.compile(r"\(\.\)"), "."),
    (re.compile(r"\{.\}"), "."),       # {.}
    (re.compile(r"\[dot\]", re.I), "."),
    (re.compile(r"\(dot\)", re.I), "."),
    (re.compile(r"\s+dot\s+", re.I), "."),
    # At sign
    (re.compile(r"\[at\]", re.I), "@"),
    (re.compile(r"\(at\)", re.I), "@"),
    # Colon
    (re.compile(r"\[:\]"), ":"),
    # Slash
    (re.compile(r"\[/\]"), "/"),
    # Common obfuscation
    (re.compile(r"\\\."), "."),
]


# === IOC Regex Patterns ===
IOC_PATTERNS = {
    "ipv4": re.compile(
        r"\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}"
        r"(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b"
    ),
    "ipv6": re.compile(
        r"\b(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\b"
        r"|"
        r"\b(?:[0-9a-fA-F]{1,4}:){1,7}:\b"
        r"|"
        r"\b::(?:[0-9a-fA-F]{1,4}:){0,5}[0-9a-fA-F]{1,4}\b"
    ),
    "domain": re.compile(
        r"\b(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+"
        r"(?:" + TLDS + r")\b",
        re.IGNORECASE
    ),
    "url": re.compile(
        r"(?:https?://|hxxps?://|hXXps?://|meow://)"
        r"[^\s<>\"'\)\]\},]{4,}",
        re.IGNORECASE
    ),
    "email": re.compile(
        r"\b[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}\b"
    ),
    "md5": re.compile(r"\b[a-fA-F0-9]{32}\b"),
    "sha1": re.compile(r"\b[a-fA-F0-9]{40}\b"),
    "sha256": re.compile(r"\b[a-fA-F0-9]{64}\b"),
    "cve": re.compile(r"\bCVE-\d{4}-\d{4,}\b", re.IGNORECASE),
    "btc_wallet": re.compile(r"\b(?:bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}\b"),
    "eth_wallet": re.compile(r"\b0x[a-fA-F0-9]{40}\b"),
    "xmr_wallet": re.compile(r"\b4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}\b"),
    "telegram": re.compile(
        r"(?:https?://t\.me/|(?<=telegram:)\s?@|(?<=tg:)\s?@)([a-zA-Z][a-zA-Z0-9_]{4,31})\b",
        re.IGNORECASE
    ),
    "onion": re.compile(r"\b[a-z2-7]{16,56}\.onion\b", re.IGNORECASE),
    # File paths (Windows & Unix) — webshells, implants, config drops
    "file_path": re.compile(
        r"(?:"
        r"[A-Za-z]:\\(?:[^\s\\:*?\"<>|]+\\)*[^\s\\:*?\"<>|]+\.\w{1,10}"
        r"|"
        r"/(?:usr|etc|var|tmp|opt|home|root|proc|sys|dev|mnt|srv|boot)"
        r"(?:/[^\s/]{1,60}){1,10}"
        r")"
    ),
    # Windows registry keys
    "registry_key": re.compile(
        r"\b(?:HKLM|HKCU|HKCR|HKU|HKCC|HKEY_LOCAL_MACHINE|HKEY_CURRENT_USER"
        r"|HKEY_CLASSES_ROOT|HKEY_USERS|HKEY_CURRENT_CONFIG)"
        r"(?:\\[^\s\\]{1,80}){1,15}\b"
    ),
    # YARA rule names
    "yara_rule": re.compile(
        r"\brule\s+([A-Za-z_][A-Za-z0-9_]{2,60})\s*\{",
    ),
}

# Additional patterns for CTI context extraction
THREAT_TAG_PATTERN = re.compile(
    r"#(APT\d*|apt\d*|TA\d+|FIN\d+|UNC\d+|DEV-\d+|TEMP\.[A-Za-z]+|"
    r"Lazarus|Kimsuky|Patchwork|SideWinder|OceanLotus|MuddyWater|"
    r"Turla|Carbanak|Cobalt|DarkSide|REvil|Conti|LockBit|BlackCat|"
    r"Hafnium|Nobelium|Cozy\s?Bear|Fancy\s?Bear|Equation|"
    r"Charming\s?Kitten|Sandworm|Gamaredon|Ghostwriter|"
    r"ransomware|malware|phishing|CTI|IOC|C2|RAT|trojan|"
    r"backdoor|exploit|0day|zeroday|infosec|cybersecurity|"
    r"threatintel|threathunting|DFIR|OSINT)\b",
    re.IGNORECASE
)

MITRE_PATTERN = re.compile(r"\b(T\d{4}(?:\.\d{3})?)\b")

# === False positive exclusions ===
FP_DOMAINS = {
    # Social / Search
    "twitter.com", "x.com", "t.co", "pic.twitter.com",
    "google.com", "youtube.com", "facebook.com", "instagram.com",
    "linkedin.com", "reddit.com", "tiktok.com", "whatsapp.com",
    # Tech platforms
    "github.com", "gitlab.com", "bitbucket.org",
    "stackoverflow.com", "medium.com", "wordpress.com",
    # Reference / CTI platforms (not actual IOCs)
    "threatbook.io", "virustotal.com", "urlscan.io",
    "shodan.io", "censys.io", "otx.alienvault.com",
    "malwarebazaar.abuse.ch", "bazaar.abuse.ch",
    "any.run", "app.any.run", "hybrid-analysis.com",
    "tria.ge", "joesandbox.com", "intezer.com",
    "urlhaus.abuse.ch", "abuse.ch",
    "mitre.org", "attack.mitre.org",
    "cve.org", "nvd.nist.gov", "cve.mitre.org",
    # Cloud / CDN
    "amazonaws.com", "cloudflare.com", "akamai.com",
    "azure.com", "microsoft.com", "apple.com",
    # Generic
    "example.com", "localhost.com", "test.com",
}

FP_IPS = {
    "0.0.0.0", "127.0.0.1", "255.255.255.255",
    "1.1.1.1", "8.8.8.8", "8.8.4.4",
}

PRIVATE_IP_PREFIXES = (
    "10.", "192.168.", "172.16.", "172.17.", "172.18.",
    "172.19.", "172.20.", "172.21.", "172.22.", "172.23.",
    "172.24.", "172.25.", "172.26.", "172.27.", "172.28.",
    "172.29.", "172.30.", "172.31.", "169.254.", "127.",
)

# === Threat context keywords for confidence scoring ===
THREAT_KEYWORDS = {
    "critical": [
        "apt", "patchwork", "lazarus", "kimsuky", "sidewinder",
        "oceanlotus", "muddywater", "turla", "carbanak", "hafnium",
        "nobelium", "cozy bear", "fancy bear", "equation group",
        "charming kitten", "sandworm", "gamaredon",
    ],
    "high": [
        "malware", "ransomware", "trojan", "backdoor", "c2", "c&c",
        "command and control", "exploit", "payload", "shellcode",
        "phishing", "credential", "exfiltration", "rat",
        "botnet", "keylogger", "rootkit", "zero-day", "0day",
        "cobalt strike", "beacon", "mimikatz", "emotet", "trickbot",
        "darkside", "revil", "conti", "lockbit", "blackcat",
        "dropper", "loader", "implant", "webshell", "stealer",
        "infostealer", "spyware", "wiper",
    ],
    "medium": [
        "suspicious", "ioc", "indicator", "compromise", "threat",
        "attack", "breach", "vulnerability", "cve", "patch",
        "campaign", "infection", "scanner", "brute", "spray",
        "lateral", "privilege escalation", "persistence",
        "defense evasion", "reconnaissance", "espionage",
        "cyber espionage", "targeting", "sectors",
    ],
    "low": [
        "security", "cyber", "infosec", "alert", "warning",
        "detection", "hunting", "analyst", "report", "advisory",
        "osint", "cti", "threat intel", "dfir",
    ],
}

# IOC type weights for risk scoring
IOC_TYPE_WEIGHTS = {
    "sha256": 0.9, "sha1": 0.85, "md5": 0.8,
    "ipv4": 0.7, "ipv6": 0.7,
    "domain": 0.65, "url": 0.75,
    "cve": 0.85, "email": 0.5,
    "btc_wallet": 0.8, "eth_wallet": 0.8, "xmr_wallet": 0.8,
    "telegram": 0.4, "onion": 0.9,
    "file_path": 0.7, "registry_key": 0.75, "yara_rule": 0.6,
}


class IOCExtractor:
    """Extract, defang, score, and structure IOCs from text."""

    def __init__(self):
        self.patterns = IOC_PATTERNS

    def _defang(self, text):
        """Normalize ALL defanged indicators back to fanged form."""
        result = text
        for pattern, replacement in DEFANG_REPLACEMENTS:
            if callable(replacement):
                result = pattern.sub(replacement, result)
            else:
                result = pattern.sub(replacement, result)
        return result

    def _find_original_defanged(self, original_text, value, start_region):
        """Find the original defanged form from the raw text."""
        # Search nearby in orignal text for a defanged version
        search_start = max(0, start_region - 20)
        search_end = min(len(original_text), start_region + len(value) + 40)
        region = original_text[search_start:search_end]

        # Build a regex to find the defanged form
        escaped = re.escape(value)
        # Replace escaped dots with pattern that matches defanged dots
        defang_dot = escaped.replace(r"\.", r"(?:\[\.\]|\(\.\)|\{.\}|\[dot\]|\(dot\)|\.)")
        try:
            m = re.search(defang_dot, region, re.IGNORECASE)
            if m:
                found = m.group(0)
                if found != value:  # Only return if actually defanged
                    return found
        except re.error:
            pass
        return None

    def _get_context_window(self, text, match_start, match_end, window=100):
        """Extract surrounding context for a match."""
        start = max(0, match_start - window)
        end = min(len(text), match_end + window)
        return text[start:end].strip()

    def _calculate_confidence(self, ioc_type, value, context):
        """Calculate confidence score (0.0 - 1.0) for an IOC."""
        base = IOC_TYPE_WEIGHTS.get(ioc_type, 0.5)
        context_lower = context.lower()

        # Boost for threat keywords (cumulative up to cap)
        boost = 0.0
        for kw in THREAT_KEYWORDS["critical"]:
            if kw in context_lower:
                boost = max(boost, 0.35)
                break
        for kw in THREAT_KEYWORDS["high"]:
            if kw in context_lower:
                boost = max(boost, 0.25)
                break
        if boost < 0.15:
            for kw in THREAT_KEYWORDS["medium"]:
                if kw in context_lower:
                    boost = max(boost, 0.15)
                    break
        if boost < 0.05:
            for kw in THREAT_KEYWORDS["low"]:
                if kw in context_lower:
                    boost = max(boost, 0.05)
                    break

        # Extra boost if IOC appears with explicit "IOC" label
        if re.search(r"\bioc\b", context_lower):
            boost += 0.1

        # Hash-specific: real hashes are all hex
        if ioc_type in ("md5", "sha1", "sha256"):
            if re.match(r"^[a-f0-9]+$", value.lower()):
                boost += 0.05

        confidence = min(1.0, base + boost)
        return round(confidence, 2)

    def _is_false_positive(self, ioc_type, value):
        """Check if an IOC is a likely false positive."""
        val_lower = value.lower().rstrip(".")

        if ioc_type == "domain":
            # Check against FP domain list (exact + subdomain match)
            for fp in FP_DOMAINS:
                if val_lower == fp or val_lower.endswith("." + fp):
                    return True
            if len(val_lower) < 5:
                return True

        if ioc_type == "ipv4":
            if value in FP_IPS:
                return True
            if any(value.startswith(p) for p in PRIVATE_IP_PREFIXES):
                return True

        if ioc_type == "url":
            # Exclude reference URLs to CTI platforms and X.com itself
            for fp in FP_DOMAINS:
                if fp in val_lower:
                    return True
            # Extra hardened check for X/Twitter profile links
            if any(domain in val_lower for domain in ["twitter.com", "x.com", "t.co"]):
                return True

        return False

    def _extract_threat_tags(self, text):
        """Extract threat actor / campaign tags from hashtags and text."""
        tags = set()
        for m in THREAT_TAG_PATTERN.finditer(text):
            tag = m.group(1).strip()
            tags.add(tag)

        # Also look for known APT names without hashtags
        text_lower = text.lower()
        apt_names = [
            "patchwork", "lazarus", "kimsuky", "sidewinder", "oceanlotus",
            "muddywater", "turla", "carbanak", "hafnium", "nobelium",
            "charming kitten", "sandworm", "gamaredon", "ghostwriter",
            "fancy bear", "cozy bear", "equation group",
            "darkside", "revil", "conti", "lockbit", "blackcat", "alphv",
        ]
        for name in apt_names:
            if name in text_lower:
                tags.add(name.title())
        return sorted(tags)

    def _extract_mitre_ids(self, text):
        """Extract MITRE ATT&CK technique IDs from text."""
        return sorted(set(m.group(1) for m in MITRE_PATTERN.finditer(text)))

    def extract(self, text, source_info=None):
        """
        Extract all IOCs from text.
        Returns list of dicts:
        {
            type, value, defanged_original, confidence, context,
            tags, mitre_ids
        }
        """
        if not text:
            return []

        original_text = text
        normalized = self._defang(text)
        results = []
        threat_tags = self._extract_threat_tags(original_text)
        mitre_ids = self._extract_mitre_ids(original_text)

        for ioc_type, pattern in self.patterns.items():
            for match in pattern.finditer(normalized):
                value = match.group(0).strip().rstrip(".,;:!?")

                # For telegram, extract the handle
                if ioc_type == "telegram" and match.groups():
                    value = f"@{match.group(1)}"

                # Skip false positives
                if self._is_false_positive(ioc_type, value):
                    continue

                # Hash disambiguation: longest match wins
                if ioc_type == "md5" and len(value) == 32:
                    ahead = normalized[match.start():match.start() + 64]
                    if re.match(r"^[a-fA-F0-9]{40}", ahead):
                        continue
                    if re.match(r"^[a-fA-F0-9]{64}", ahead):
                        continue
                elif ioc_type == "sha1" and len(value) == 40:
                    ahead = normalized[match.start():match.start() + 64]
                    if re.match(r"^[a-fA-F0-9]{64}", ahead):
                        continue

                # Find original defanged form
                defanged = self._find_original_defanged(
                    original_text, value, match.start()
                )

                context = self._get_context_window(
                    normalized, match.start(), match.end()
                )
                confidence = self._calculate_confidence(ioc_type, value, context)

                results.append({
                    "type": ioc_type,
                    "value": value,
                    "defanged_original": defanged,
                    "confidence": confidence,
                    "context": context,
                    "tags": threat_tags,
                    "mitre_ids": mitre_ids,
                })

        # Deduplicate
        results = self._deduplicate(results)

        logger.info(f"Extracted {len(results)} IOCs from text "
                    f"({len(text)} chars, tags={threat_tags})")
        return results

    def _deduplicate(self, iocs):
        """Remove duplicate IOCs, keeping highest confidence."""
        seen = {}
        for ioc in iocs:
            key = (ioc["type"], ioc["value"].lower())
            if key not in seen or ioc["confidence"] > seen[key]["confidence"]:
                seen[key] = ioc
        return list(seen.values())

    def extract_from_tweets(self, tweets):
        """
        Extract IOCs from a list of tweet dicts.
        Returns list of dicts with tweet_id linkage.
        """
        all_iocs = []
        for tweet in tweets:
            content = tweet.get("content", "")
            tweet_id = tweet.get("tweet_id")

            iocs = self.extract(content)
            for ioc in iocs:
                ioc["tweet_id"] = tweet_id
                ioc["author"] = tweet.get("author_handle", "unknown")
                ioc["tweet_url"] = tweet.get("url", "")
                ioc["tweet_timestamp"] = tweet.get("timestamp", "")
                all_iocs.append(ioc)

        # Global dedup across all tweets
        global_dedup = {}
        for ioc in all_iocs:
            key = (ioc["type"], ioc["value"].lower())
            if key not in global_dedup or ioc["confidence"] > global_dedup[key]["confidence"]:
                global_dedup[key] = ioc
                global_dedup[key]["mention_count"] = 1
            else:
                global_dedup[key]["mention_count"] = \
                    global_dedup[key].get("mention_count", 1) + 1

        result = list(global_dedup.values())
        for ioc in result:
            if "mention_count" not in ioc:
                ioc["mention_count"] = 1

        logger.info(f"Extracted {len(result)} unique IOCs from "
                    f"{len(tweets)} tweets")
        return result

    def format_ioc_report(self, iocs):
        """Format IOCs into a clean structured report string."""
        if not iocs:
            return "No IOCs detected."

        lines = []
        # Group by type
        by_type = defaultdict(list)
        for ioc in iocs:
            by_type[ioc["type"]].append(ioc)

        # Type display order
        type_order = [
            "ipv4", "ipv6", "domain", "url", "email",
            "md5", "sha1", "sha256", "cve",
            "btc_wallet", "eth_wallet", "xmr_wallet",
            "telegram", "onion",
            "file_path", "registry_key", "yara_rule",
        ]
        type_labels = {
            "ipv4": "IPv4 Addresses", "ipv6": "IPv6 Addresses",
            "domain": "Domains", "url": "URLs", "email": "Emails",
            "md5": "MD5 Hashes", "sha1": "SHA1 Hashes",
            "sha256": "SHA256 Hashes", "cve": "CVE Identifiers",
            "btc_wallet": "BTC Wallets", "eth_wallet": "ETH Wallets",
            "xmr_wallet": "XMR Wallets",
            "telegram": "Telegram Handles", "onion": "Onion Domains",
            "file_path": "File Paths", "registry_key": "Registry Keys",
            "yara_rule": "YARA Rules",
        }

        # Tags
        all_tags = set()
        all_mitre = set()
        for ioc in iocs:
            all_tags.update(ioc.get("tags", []))
            all_mitre.update(ioc.get("mitre_ids", []))

        if all_tags:
            lines.append(f"Threat Tags: {', '.join(sorted(all_tags))}")
        if all_mitre:
            lines.append(f"MITRE IDs: {', '.join(sorted(all_mitre))}")
        if all_tags or all_mitre:
            lines.append("")

        for t in type_order:
            if t not in by_type:
                continue
            items = by_type[t]
            lines.append(f"── {type_labels.get(t, t.upper())} ({len(items)}) ──")
            for ioc in sorted(items, key=lambda x: -x["confidence"]):
                conf = f"{ioc['confidence']*100:.0f}%"
                defanged = ""
                if ioc.get("defanged_original"):
                    defanged = f"  (raw: {ioc['defanged_original']})"
                lines.append(f"  [{conf:>4s}] {ioc['value']}{defanged}")
            lines.append("")

        return "\n".join(lines)
