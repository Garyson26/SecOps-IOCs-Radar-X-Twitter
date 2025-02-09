"""friendly value formatting for logs and user-facing output."""


UNITS = ["B", "KB", "MB", "GB", "TB", "PB"]


def human_size(count):
    """Render a byte count using binary-scaled units."""
    value = float(count)
    for unit in UNITS:
        if value < 1024.0 or unit == UNITS[-1]:
            return "%.1f %s" % (value, unit) if unit != "B" else "%d B" % int(value)
        value /= 1024.0


def format_count(number):
    """Render an integer with thousands separators."""
    return "{:,}".format(int(number))
