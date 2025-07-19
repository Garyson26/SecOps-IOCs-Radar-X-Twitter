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
