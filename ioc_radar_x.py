#!/usr/bin/env python3
"""
IOC Radar X — Entry Point
X-Based OSINT & Tactical Threat Intelligence IOC Collection Framework

Usage:
  CLI:  python ioc_radar_x.py --keyword "CVE-2026" --output json
  GUI:  python ioc_radar_x.py --gui
"""
import sys
import os
import re

# Ensure project root is in path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))


def main():
    if "--gui" in sys.argv or "-g" in sys.argv:
        # Launch Flask GUI
        from app import create_app
        app = create_app()
        app.run(
            host="0.0.0.0",
            port=9090,
            debug="--debug" in sys.argv or "-d" in sys.argv
        )
    else:
        # Launch CLI
        from cli import main as cli_main
        cli_main()


if __name__ == "__main__":
    main()


SEMVER_RE = re.compile(r"^(\d+)\.(\d+)\.(\d+)(?:-[0-9A-Za-z.-]+)?$")


def parse_version(text):
    """Return *text* as a ``(major, minor, patch)`` tuple."""
    m = SEMVER_RE.match(text.strip())
    if not m:
        raise ValueError("not a version: %r" % text)
    return tuple(int(part) for part in m.groups())


def compare_versions(left, right):
    """Return -1, 0 or 1 comparing two version strings."""
    a, b = parse_version(left), parse_version(right)
    return (a > b) - (a < b)
