"""
IOC Radar X - Structured Logging System
"""
import logging
import logging.handlers
import json
import os
from datetime import datetime, timezone
import config
from engine.security import mask_sensitive


class StructuredFormatter(logging.Formatter):
    """JSON-structured log formatter with sensitive value masking."""

    def format(self, record):
        log_data = {
            "ts": datetime.now(timezone.utc).isoformat(),
            "level": record.levelname,
            "module": record.module,
            "func": record.funcName,
            "line": record.lineno,
            "msg": mask_sensitive(record.getMessage()),
        }
        if record.exc_info and record.exc_info[0]:
            log_data["exception"] = self.formatException(record.exc_info)
        if hasattr(record, "extra_data"):
            log_data["data"] = record.extra_data
        return json.dumps(log_data, ensure_ascii=False)


class ConsoleFormatter(logging.Formatter):
    """Colored console formatter."""

    COLORS = {
        "DEBUG": "\033[36m",     # Cyan
        "INFO": "\033[32m",      # Green
        "WARNING": "\033[33m",   # Yellow
        "ERROR": "\033[31m",     # Red
        "CRITICAL": "\033[1;31m" # Bold Red
    }
    RESET = "\033[0m"
    DIM = "\033[2m"

    def format(self, record):
        color = self.COLORS.get(record.levelname, "")
        ts = datetime.now(timezone.utc).strftime("%H:%M:%S")
        msg = mask_sensitive(record.getMessage())
        return (
            f"{self.DIM}{ts}{self.RESET} "
            f"{color}{record.levelname:8s}{self.RESET} "
            f"{self.DIM}[{record.module}]{self.RESET} "
            f"{msg}"
        )


_logger = None
_log_buffer = []  # In-memory buffer for GUI debug console


def get_logger(name: str = "ioc_radar_x") -> logging.Logger:
    """Get or create the application logger."""
    global _logger
    if _logger is not None:
        return _logger

    config.ensure_dirs()

    logger = logging.getLogger(name)
    logger.setLevel(getattr(logging, config.LOG_LEVEL.upper(), logging.INFO))
    logger.handlers.clear()

    # File handler — structured JSON logs
    log_file = os.path.join(config.LOG_DIR, "ioc_radar_x.log")
    file_handler = logging.handlers.RotatingFileHandler(
        log_file,
        maxBytes=config.LOG_MAX_BYTES,
        backupCount=config.LOG_BACKUP_COUNT,
        encoding="utf-8"
    )
    file_handler.setFormatter(StructuredFormatter())
    logger.addHandler(file_handler)

    # Console handler — colored output
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(ConsoleFormatter())
    logger.addHandler(console_handler)

    # Buffer handler — for GUI debug console
    buffer_handler = BufferHandler()
    buffer_handler.setFormatter(StructuredFormatter())
    logger.addHandler(buffer_handler)

    _logger = logger
    return logger


class BufferHandler(logging.Handler):
    """Handler that stores logs in an in-memory buffer for the GUI."""

    def emit(self, record):
        try:
            entry = self.format(record)
            _log_buffer.append(entry)
            # Keep buffer bounded
            if len(_log_buffer) > 1000:
                _log_buffer.pop(0)
        except Exception:
            self.handleError(record)


def get_log_buffer() -> list:
    """Return the current in-memory log buffer."""
    return list(_log_buffer)


def clear_log_buffer():
    """Clear the in-memory log buffer."""
    _log_buffer.clear()
