"""
IOC Radar X - Database Models
"""
from datetime import datetime, timezone
from sqlalchemy import (Column, Integer, String, Text, Float,
                        DateTime, ForeignKey, Index)
from sqlalchemy.orm import declarative_base, relationship

Base = declarative_base()


class Search(Base):
    __tablename__ = "searches"

    id = Column(Integer, primary_key=True, autoincrement=True)
    keyword = Column(String(512), nullable=False, index=True)
    timestamp = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    operator = Column(String(64), default="keyword")
    mode = Column(String(16), default="unauth")  # auth / unauth
    since_date = Column(String(10), nullable=True)
    until_date = Column(String(10), nullable=True)
    max_tweets = Column(Integer, default=100)
    status = Column(String(32), default="pending")  # pending/running/done/error
    total_tweets = Column(Integer, default=0)
    total_iocs = Column(Integer, default=0)
    risk_score = Column(Float, default=0.0)

    tweets = relationship("Tweet", back_populates="search",
                          cascade="all, delete-orphan")

    def __repr__(self):
        return f"<Search #{self.id} '{self.keyword}' [{self.status}]>"


class Tweet(Base):
    __tablename__ = "tweets"

    id = Column(Integer, primary_key=True, autoincrement=True)
    tweet_id = Column(String(64), unique=True, nullable=True)
    author = Column(String(256), nullable=True)
    author_handle = Column(String(256), nullable=True)
    content = Column(Text, nullable=False)
    timestamp = Column(DateTime, nullable=True)
    url = Column(String(1024), nullable=True)
    search_id = Column(Integer, ForeignKey("searches.id"), nullable=False)

    search = relationship("Search", back_populates="tweets")
    iocs = relationship("IOC", back_populates="tweet",
                        cascade="all, delete-orphan")

    __table_args__ = (
        Index("ix_tweets_search_id", "search_id"),
    )

    def __repr__(self):
        return f"<Tweet @{self.author_handle} [{self.tweet_id}]>"


class IOC(Base):
    __tablename__ = "iocs"

    id = Column(Integer, primary_key=True, autoincrement=True)
    ioc_type = Column(String(32), nullable=False, index=True)
    value = Column(String(1024), nullable=False)
    context = Column(Text, nullable=True)
    confidence = Column(Float, default=0.5)
    risk_score = Column(Float, default=0.0)
    first_seen = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    tweet_id = Column(Integer, ForeignKey("tweets.id"), nullable=False)

    tweet = relationship("Tweet", back_populates="iocs")

    __table_args__ = (
        Index("ix_iocs_value", "value"),
        Index("ix_iocs_tweet_id", "tweet_id"),
    )

    def __repr__(self):
        return f"<IOC {self.ioc_type}={self.value[:30]} risk={self.risk_score}>"


def init_db():
    """Create all tables if they don't exist."""
    from database import engine
    Base.metadata.create_all(engine)
    return True
