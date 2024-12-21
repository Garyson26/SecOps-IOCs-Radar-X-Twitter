"""
IOC Radar X - Security Module
Cookie encryption, validation, input sanitization, and security controls.
"""
import json
import os
import re
import html
from datetime import datetime, timezone
from cryptography.fernet import Fernet, InvalidToken
import config


def _get_or_create_key():
    """Load or generate the Fernet encryption key."""
    if os.path.exists(config.ENCRYPTION_KEY_FILE):
        with open(config.ENCRYPTION_KEY_FILE, "rb") as f:
            return f.read()
    key = Fernet.generate_key()
    with open(config.ENCRYPTION_KEY_FILE, "wb") as f:
        f.write(key)
    os.chmod(config.ENCRYPTION_KEY_FILE, 0o600)
    return key


_fernet = None


def _get_fernet():
    global _fernet
    if _fernet is None:
        _fernet = Fernet(_get_or_create_key())
    return _fernet


# --- Cookie Encryption / Decryption ---

def encrypt_cookie(data: str) -> bytes:
    """Encrypt cookie JSON string."""
    return _get_fernet().encrypt(data.encode("utf-8"))


def decrypt_cookie(token: bytes) -> str:
    """Decrypt cookie token back to JSON string."""
    try:
        return _get_fernet().decrypt(token).decode("utf-8")
    except InvalidToken:
        raise ValueError("Cookie decryption failed — key mismatch or corrupt data")


def encrypt_cookie_file(src_path: str, dest_path: str):
    """Read a cookie JSON file, encrypt it, write to dest."""
    with open(src_path, "r") as f:
        raw = f.read()
    encrypted = encrypt_cookie(raw)
    with open(dest_path, "wb") as f:
        f.write(encrypted)
    os.chmod(dest_path, 0o600)


def decrypt_cookie_file(encrypted_path: str) -> list:
    """Decrypt a cookie file and return parsed JSON."""
    with open(encrypted_path, "rb") as f:
        token = f.read()
    raw = decrypt_cookie(token)
    return json.loads(raw)


# --- Cookie Validation ---

def validate_cookies(cookies: list) -> dict:
    """
    Validate a list of cookie dicts.
    Returns: {"valid": bool, "errors": [...], "auth_token_found": bool, "expired": bool}
    """
    result = {
        "valid": True,
        "errors": [],
        "auth_token_found": False,
        "expired": False
    }

    if not isinstance(cookies, list):
        result["valid"] = False
        result["errors"].append("Cookie data must be a JSON array of cookie objects")
        return result

    if len(cookies) == 0:
        result["valid"] = False
        result["errors"].append("Cookie array is empty")
        return result

    auth_token_found = False
    now = datetime.now(timezone.utc).timestamp()

    for cookie in cookies:
        if not isinstance(cookie, dict):
            result["errors"].append(f"Invalid cookie entry: {type(cookie)}")
            continue

        name = cookie.get("name", "")
        domain = cookie.get("domain", "")
        expires = cookie.get("expirationDate") or cookie.get("expires")

        # Check for auth_token
        if name == "auth_token":
            auth_token_found = True

            # Validate domain
            domain_valid = any(
                domain == d or domain.endswith(d)
                for d in config.ALLOWED_COOKIE_DOMAINS
            )
            if not domain_valid:
                result["valid"] = False
                result["errors"].append(
                    f"auth_token domain '{domain}' does not match .x.com"
                )

            # Check expiry
            if expires and isinstance(expires, (int, float)):
                if expires < now:
                    result["expired"] = True
                    result["errors"].append("auth_token has expired")

    result["auth_token_found"] = auth_token_found
    if not auth_token_found:
        result["valid"] = False
        result["errors"].append("Missing required 'auth_token' cookie")

    return result


def cookies_to_playwright(cookies: list) -> list:
    """Convert browser-exported cookies to Playwright format."""
    pw_cookies = []
    for c in cookies:
        if not isinstance(c, dict):
            continue
        pc = {
            "name": c.get("name", ""),
            "value": c.get("value", ""),
            "domain": c.get("domain", ""),
            "path": c.get("path", "/"),
        }
        if c.get("expirationDate"):
            pc["expires"] = float(c["expirationDate"])
        elif c.get("expires") and isinstance(c["expires"], (int, float)):
            pc["expires"] = float(c["expires"])
        if c.get("secure"):
            pc["secure"] = True
        if c.get("httpOnly"):
            pc["httpOnly"] = True
        if c.get("sameSite"):
            ss = c["sameSite"].capitalize()
            if ss in ("Strict", "Lax", "None"):
                pc["sameSite"] = ss
        pw_cookies.append(pc)
    return pw_cookies


# --- Input Sanitization ---

def sanitize_input(text: str) -> str:
    """Sanitize user input for safe processing."""
    text = html.escape(text, quote=True)
    text = text.replace("\x00", "")
    # Prevent path traversal
    text = text.replace("..", "")
    text = text.replace("/", "")
    text = text.replace("\\", "")
    return text.strip()


def sanitize_keyword(keyword: str) -> str:
    """Sanitize search keyword (allow spaces and common search chars)."""
    keyword = keyword.replace("\x00", "")
    keyword = html.escape(keyword, quote=True)
    # Allow alphanumeric, spaces, hyphens, dots, colons (for CVE-2024-xxxx)
    keyword = re.sub(r"[^\w\s\-.:@#]", "", keyword)
    return keyword.strip()[:512]


def validate_upload_size(file_size: int) -> bool:
    """Check if upload file is within size limit."""
    return file_size <= config.COOKIE_MAX_SIZE


# --- Log Masking ---

_SENSITIVE_PATTERNS = [
    (re.compile(r"(auth_token[\"']?\s*[:=]\s*[\"']?)([a-zA-Z0-9_\-]+)"), r"\1****REDACTED****"),
    (re.compile(r"(password[\"']?\s*[:=]\s*[\"']?)([^\s\"',]+)"), r"\1****REDACTED****"),
    (re.compile(r"(Bearer\s+)([a-zA-Z0-9_\-\.]+)"), r"\1****REDACTED****"),
    (re.compile(r"(cookie[\"']?\s*[:=]\s*[\"']?)([^\s\"',]+)"), r"\1****REDACTED****"),
]


def mask_sensitive(text: str) -> str:
    """Mask sensitive values in log messages."""
    for pattern, replacement in _SENSITIVE_PATTERNS:
        text = pattern.sub(replacement, text)
    return text


# --- Cleanup ---

def secure_delete_file(filepath: str):
    """Delete a file securely."""
    if os.path.exists(filepath):
        # Overwrite with random bytes before deleting
        try:
            size = os.path.getsize(filepath)
            with open(filepath, "wb") as f:
                f.write(os.urandom(size))
            os.remove(filepath)
        except OSError:
            try:
                os.remove(filepath)
            except OSError:
                pass
