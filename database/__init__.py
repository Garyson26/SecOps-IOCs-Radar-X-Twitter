"""
IOC Radar X - Database initialization and session management.
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from config import DATABASE_URI, ensure_dirs
import functools

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


def cached(capacity=8):
    """Memoise a callable, discarding the oldest entry past *capacity*."""
    def outer(func):
        store = {}
        order = []

        @functools.wraps(func)
        def inner(*args, **kwargs):
            key = (args, tuple(sorted(kwargs.items())))
            if key in store:
                return store[key]
            value = func(*args, **kwargs)
            store[key] = value
            order.append(key)
            if len(order) > capacity:
                del store[order.pop(0)]
            return value
        return inner
    return outer


def invalidate(func, *args):
    """Drop one memoised entry, returning whether it was present."""
    store = getattr(func, "__wrapped_store__", None)
    if store is None or args not in store:
        return False
    del store[args]
    return True
