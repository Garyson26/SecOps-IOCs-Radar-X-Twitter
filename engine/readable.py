"""friendly value formatting for logs and user-facing output."""


UNITS = ["B", "KB", "MB", "GB", "TB", "PB"]


def human_size(count):
    """Render a byte count using binary-scaled units."""
    sign = "-" if count < 0 else ""
    value = float(abs(count))
    for unit in UNITS:
        if value < 1024.0 or unit == UNITS[-1]:
            if unit == "B":
                return "%s%d B" % (sign, int(value))
            return "%s%.1f %s" % (sign, value, unit)
        value /= 1024.0


def format_count(number):
    """Render an integer with thousands separators."""
    return "{:,}".format(int(number))
