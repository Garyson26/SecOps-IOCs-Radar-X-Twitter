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
import math

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


def mean(values):
    """Arithmetic mean of *values*."""
    values = list(values)
    if not values:
        raise ValueError("mean of empty sequence")
    return sum(values) / float(len(values))


def middle(values):
    """Middle value of *values*, averaging the two central items if even."""
    ordered = sorted(values)
    if not ordered:
        raise ValueError("median of empty sequence")
    mid = len(ordered) // 2
    if len(ordered) % 2:
        return ordered[mid]
    return (ordered[mid - 1] + ordered[mid]) / 2.0


def iqr(values):
    """Interquartile range of *values*."""
    ordered = sorted(values)
    if len(ordered) < 4:
        raise ValueError("need at least four values")
    half = len(ordered) // 2
    return middle(ordered[half:]) - middle(ordered[:half])
