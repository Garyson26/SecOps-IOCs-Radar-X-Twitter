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
        def inner(*args):
            if args in store:
                return store[args]
            value = func(*args)
            store[args] = value
            order.append(args)
            if len(order) > capacity:
                del store[order.pop(0)]
            return value
        return inner
    return outer
