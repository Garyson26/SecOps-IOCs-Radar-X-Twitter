# Installation Guide

Follow these steps to install and run **IOC Radar X** on your system.

## 📋 Prerequisites

- **OS:** Linux (Ubuntu/Debian recommended) or macOS
- **Python:** 3.10 or higher
- **Browsers:** Modern browser to export your X.com cookies.

## ⚙️ Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Masriyan/IOC_Radar_X.git
cd IOC_Radar_X
```

### 2. Set Up a Virtual Environment (Recommended)

It is highly recommended to run this tool inside an isolated Python virtual environment.

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

Install the required Python packages using `pip`.

```bash
pip install -r requirements.txt
```

### 4. Install Playwright Browsers

IOC Radar X relies on Playwright for stealthy web crawling. You must install the Playwright browser binaries.

```bash
playwright install chromium
```

### 5. Initialize the Database

The SQLite database will be automatically created on the first run, but you can initialize the core directory structure by running:

```bash
python3 app.py
```

You are now ready to use the platform! Proceed to the [Usage Guide](USAGE.md) for instructions on authenticating and scanning.
