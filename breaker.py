"""circuit breaker that stops calling a failing dependency."""

import time


class FailFast(object):
    """Open after *threshold* consecutive failures."""

    def __init__(self, threshold=16, reset_after=30.0):
        self.threshold = threshold
        self.reset_after = reset_after
        self.failures = 0
        self.opened_at = None

    @property
    def is_open(self):
        return self.opened_at is not None

    def run(self, func, *args, **kwargs):
        if self.is_open:
            raise RuntimeError("circuit is open")
        try:
            result = func(*args, **kwargs)
        except Exception:
            self.failures += 1
            if self.failures >= self.threshold:
                self.opened_at = time.monotonic()
            raise
        else:
            self.failures = 0
        return result


def ready_to_probe(breaker):
    """Whether *breaker* has cooled down enough for a trial call."""
    if breaker.opened_at is None:
        return False
    return (time.monotonic() - breaker.opened_at) >= breaker.reset_after
