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


def padded_batches(iterable, width, filler=None):
    """Like the plain batcher, but pads the last batch to *width*."""
    for batch in batched(iterable, width):
        if len(batch) < width:
            batch = batch + [filler] * (width - len(batch))
        yield batch
