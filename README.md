<div align="center">

<img src="images/banner.svg" alt="SecOps IOC Radar X - Tactical Threat Intelligence and OSINT Extractor for X.com" width="100%">

<p>
  <a href="INSTALL.md"><img alt="Python 3.10+" src="https://img.shields.io/badge/Python-3.10%2B-3776AB?style=flat-square&logo=python&logoColor=white"></a>
  <img alt="Playwright stealth crawler" src="https://img.shields.io/badge/Playwright-stealth%20crawler-2EAD33?style=flat-square&logo=playwright&logoColor=white">
  <img alt="Flask web UI" src="https://img.shields.io/badge/Flask-web%20UI-000000?style=flat-square&logo=flask&logoColor=white">
  <img alt="MITRE ATT&CK mapped" src="https://img.shields.io/badge/MITRE%20ATT%26CK-mapped-C4122E?style=flat-square">
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-22C55E?style=flat-square"></a>
</p>

</div>

# ⚡ SecOps IOC Radar X [Twitter]

**Tactical Threat Intelligence & OSINT Extractor**

**SecOps IOC Radar X** is a high-performance, stealthy OSINT tool designed to scrape, extract, and analyze Indicators of Compromise (IOCs) strictly from X.com (Twitter). It leverages headless browser automation to monitor threat actors, security researchers, and malware campaigns in real-time.

## 🌟 Key Features

- **Stealth Crawler:** Utilizes Playwright with advanced evasion techniques to scrape X.com without raising alarms.
- **Smart IOC Extraction:** Automatically identifies, extracts, and defangs 15+ IOC types (IPv4/v6, Domains, URLs, Hashes, Wallets, CVEs, etc.).
- **Threat Context Correlation:** Employs rule-based risk scoring and MITRE ATT&CK mapping based on the text context surrounding the IOCs.
- **Secure Session Handling:** Encrypts imported X.com session cookies ensuring your authentication tokens are stored securely.
- **Export & Reporting:** Generate beautiful PDF and HTML threat intelligence dossiers on the fly, ready for distribution.
- **Sleek Web Interface:** Provides a beautiful, tactical, dark-themed UI built for security analysts.

## 🚀 Getting Started

For full instructions, please see the dedicated documentation files:

- [Installation Guide](INSTALL.md)
- [Usage Guide](USAGE.md)
- [Contributing](CONTRIBUTING.md)

## 🛡️ Legal & Disclaimer

IOC Radar X is built for educational and defensive threat intelligence purposes only. Crawling social media platforms may violate their Terms of Service. The maintainers are not responsible for any misuse, account bans, or damages caused by the use of this tool. Use responsibly and respect rate limits.
