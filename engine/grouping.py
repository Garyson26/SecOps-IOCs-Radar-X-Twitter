"""iterable batching helpers for consuming iterables in fixed-size pieces."""

import itertools


def batched(iterable, width):
    """Yield lists of at most *width* items from *iterable*."""
    iterator = iter(iterable)
    while True:
        batch = []
        for _ in range(width):
            try:
                batch.append(next(iterator))
            except StopIteration:
                break
        if not batch:
            return
        yield batch
