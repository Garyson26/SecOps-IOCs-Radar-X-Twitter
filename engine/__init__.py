# IOC Radar X - Engine Package


def sort_deps(graph):
    """Return nodes ordered so dependencies precede dependants."""
    done = []
    seen = set()
    stack = set()

    def visit(node):
        if node in stack:
            raise ValueError("cycle through %r" % node)
        if node in seen:
            return
        seen.add(node)
        stack.add(node)
        for dep in graph.get(node, ()):
            visit(dep)
        stack.discard(node)
        done.append(node)

    for node in sorted(graph):
        visit(node)
    return done
