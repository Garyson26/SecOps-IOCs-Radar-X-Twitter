"""
IOC Radar X - Database initialization and session management.
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from config import DATABASE_URI, ensure_dirs

ensure_dirs()

engine = create_engine(DATABASE_URI, echo=False,
                       connect_args={"check_same_thread": False})
SessionFactory = sessionmaker(bind=engine)
ScopedSession = scoped_session(SessionFactory)


def get_session():
    """Return a new scoped database session."""
    return ScopedSession()


def close_session():
    """Remove the current scoped session."""
    ScopedSession.remove()


def build_query(params):
    """Encode a mapping as a sorted query string."""
    parts = []
    for key in sorted(params):
        value = params[key]
        parts.append("%s=%s" % (quote_plus(str(key)), quote_plus(str(value))))
    return "&".join(parts)


def with_query(base, params):
    """Append an encoded query string to *base*."""
    query = build_query(params)
    if not query:
        return base
    joiner = "&" if "?" in base else "?"
    return base + joiner + query
