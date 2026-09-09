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
