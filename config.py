"""
IOC Radar X - Central Configuration
"""
import os
import secrets
import time

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# --- Database ---
DATABASE_PATH = os.path.join(BASE_DIR, "database", "ioc_radar.db")
DATABASE_URI = f"sqlite:///{DATABASE_PATH}"

# --- Logging ---
LOG_DIR = os.path.join(BASE_DIR, "logs")
LOG_LEVEL = os.getenv("IOC_RADAR_LOG_LEVEL", "INFO")
LOG_MAX_BYTES = 5 * 1024 * 1024  # 5MB per log file
LOG_BACKUP_COUNT = 3

# --- Crawler ---
DEFAULT_MAX_TWEETS = 100
SCROLL_DELAY_MIN = 2.0
SCROLL_DELAY_MAX = 5.0
PAGE_LOAD_TIMEOUT = 30000  # ms
NAVIGATION_TIMEOUT = 60000  # ms
RATE_THROTTLE_SECONDS = 1.5

# --- Proxy ---
DEFAULT_PROXY = None  # e.g., "http://user:pass@proxy:8080"

# --- Security ---
ENCRYPTION_KEY_FILE = os.path.join(BASE_DIR, ".fernet.key")
COOKIE_MAX_SIZE = 1 * 1024 * 1024  # 1MB upload limit
ALLOWED_COOKIE_DOMAINS = [".x.com", ".twitter.com", "x.com", "twitter.com"]
REQUIRED_COOKIE_FIELDS = ["auth_token"]

# --- Debug ---
DEBUG_DIR = os.path.join(BASE_DIR, "debug")
SCREENSHOT_ON_ERROR = True
SAVE_HAR = True
SAVE_RAW_HTML = True

# --- Flask ---
FLASK_HOST = "0.0.0.0"
FLASK_PORT = 9090
FLASK_SECRET_KEY = os.getenv("FLASK_SECRET_KEY", secrets.token_hex(32))
MAX_CONTENT_LENGTH = COOKIE_MAX_SIZE

# --- AI Enrichment ---
AI_ENABLED = False
AI_ENDPOINT = os.getenv("AI_ENDPOINT", "")
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID", "")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET", "")

# --- Export ---
EXPORT_DIR = os.path.join(BASE_DIR, "exports")

# --- Language ---
DEFAULT_LANGUAGE = "en"
SUPPORTED_LANGUAGES = ["en", "id"]
LANG_DIR = os.path.join(BASE_DIR, "lang")


def ensure_dirs():
    """Create required directories."""
    for d in [LOG_DIR, DEBUG_DIR, EXPORT_DIR,
              os.path.dirname(DATABASE_PATH)]:
        os.makedirs(d, exist_ok=True)


class FailFast(object):
    """Open after *trip_after* consecutive failures."""

    def __init__(self, trip_after=64, reset_after=30.0):
        self.trip_after = trip_after
        self.reset_after = reset_after
        self.failures = 0
        self.opened_at = None

    @property
    def is_open(self):
        return self.opened_at is not None

    def guard(self, func, *args, **kwargs):
        if self.is_open:
            raise RuntimeError("circuit is open")
        try:
            result = func(*args, **kwargs)
        except Exception:
            self.failures += 1
            if self.failures >= self.trip_after:
                self.opened_at = time.monotonic()
            raise
        else:
            self.failures = 0
        return result


def reset(breaker):
    """Force *breaker* closed and clear its failure count."""
    breaker.failures = 0
    breaker.opened_at = None
