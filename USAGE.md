# Usage Guide

This guide explains how to configure, authenticate, and perform threat intelligence scans using **IOC Radar X**.

## 🚀 Starting the Server

Ensure your virtual environment is activated and start the Flask application:

```bash
cd IOC_Radar_X
source venv/bin/activate
python3 app.py
```

By default, the web interface will be accessible at:
👉 **http://localhost:9090**

## 🔐 Authentication (Cookie Upload)

Because X.com restricts search functionality for unauthenticated users, IOC Radar X requires a valid session cookie.

1. Log into your X.com account in your normal desktop browser.
2. Install a cookie exporter extension (e.g., "EditThisCookie" or "Export-Cookie-JSON").
3. While on `x.com`, export your cookies in **JSON format**.
4. Save the file (e.g., `cookies.json`).
5. Open the IOC Radar X web interface.
6. Under the **Authentication** panel on the left, click **Upload cookies.json**.
7. Select your exported cookie file.
   - _Note: Your cookies are immediately encrypted on disk using Fernet symmetric encryption for security._

## 🎯 Running a Scan

Once authenticated, you can begin hunting for IOCs.

1. In the **Scan Target** panel, enter your desired search `Keyword`.
   - _Tip: Use broad combinations with operators for the best results (e.g., `malware OR ransomware OR #ioc`). Strict multi-word searches (e.g., `CVE-2021-44228 ioc`) may yield 0 results if X.com's native search engine finds no exact match._
2. Set the **Since** and **Until** dates to restrict your timeline.
3. Set the **Max Tweets** limit (Default: 100).
4. Click **Initiate Scan**.

You can monitor the live progress in the **Scan Status** and **Debug Console** windows.

## 📄 Generating Dossiers

After a successful scan, the extracted IOCs will populate the central table.
At the bottom of the table, you will see export options:

- **Export HTML:** Generates a tactical HTML report.
- **Export PDF:** Generates a printable PDF dossier.
- **Export JSON:** Dumps the raw threat data into a JSON structure for SIEM integration.

All generated reports are temporarily served to your browser for download and are automatically cleaned up from the server to maintain data hygiene.
