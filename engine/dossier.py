"""
IOC Radar X - Dossier Report Generator
Generates intelligence dossier reports in JSON, HTML, and PDF formats.
"""
import json
import os
from datetime import datetime, timezone
from jinja2 import Template
from engine.logger import get_logger
import config

logger = get_logger()

# Jinja2 template for HTML/PDF dossier (inline for portability)
# Note: Designed for compatibility with xhtml2pdf (no CSS variables, flexbox, or grid)
HTML_REPORT_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>IOC Radar X — Dossier Report</title>
<style>
  @page {
    size: a4 portrait;
    margin: 2cm;
    @frame footer_frame {
        -pdf-frame-content: footer_content;
        left: 50pt; width: 512pt; top: 772pt; height: 20pt;
    }
  }
  body {
    background-color: #ffffff;
    color: #1a1a2e;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 11px;
    line-height: 1.5;
  }
  .header {
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #000000;
    margin-bottom: 20px;
  }
  .header h1 {
    color: #000000;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
    padding: 0;
  }
  .subtitle {
    color: #555555;
    font-size: 10px;
    margin-top: 5px;
  }
  .risk-badge {
    display: block;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 14px;
    margin: 15px 0;
    border: 1px solid #1a1a2e;
  }
  .risk-critical { background-color: #ff0040; color: #ffffff; }
  .risk-high { background-color: #ff6600; color: #ffffff; }
  .risk-medium { background-color: #ffaa00; color: #000000; }
  .risk-low { background-color: #00cc33; color: #ffffff; }
  
  h2 {
    color: #000000;
    font-size: 16px;
    border-bottom: 1px solid #dddddd;
    padding-bottom: 5px;
    margin-top: 25px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 10px;
  }
  
  table.stats-table {
    width: 100%;
    margin-bottom: 15px;
  }
  table.stats-table td {
    width: 25%;
    padding: 10px;
    border: 1px solid #dddddd;
    background-color: #f8f9fa;
    text-align: center;
  }
  .stat-val {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
  }
  .stat-label {
    font-size: 9px;
    color: #666666;
    text-transform: uppercase;
  }
  
  table.data-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
  }
  table.data-table th {
    background-color: #eeeeee;
    color: #000000;
    padding: 8px;
    text-align: left;
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
    border: 1px solid #cccccc;
  }
  table.data-table td {
    padding: 8px;
    border: 1px solid #cccccc;
    font-size: 10px;
    word-wrap: break-word;
  }
  
  .type-badge {
    font-weight: bold;
    color: #444444;
    text-transform: uppercase;
  }
  
  .mitre-tag {
    display: inline;
    font-size: 10px;
    background-color: #f1f5f9;
    border: 1px solid #cbd5e1;
    color: #334155;
    padding: 2px 5px;
    margin-right: 5px;
    line-height: 2;
  }
  .mitre-tid { color: #dc2626; font-weight: bold; }
  
  .evidence-block {
    background-color: #f4f4f5;
    border-left: 3px solid #000000;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 10px;
  }
  .evidence-meta {
    color: #71717a;
    font-size: 9px;
    margin-bottom: 5px;
    font-weight: bold;
  }
</style>
</head>
<body>

<div id="footer_content" style="text-align: center; font-size: 9px; color: #888888;">
  IOC Radar X — Tactical Intelligence Dossier | Generated: {{ generated_at }} | Page <pdf:pagenumber> of <pdf:pagecount>
</div>

<div class="header">
  <h1>IOC Radar X — Intelligence Dossier</h1>
  <div class="subtitle">Generated: {{ generated_at }} | Keyword: "{{ keyword }}"</div>
  {% if risk_score >= 7 %}
  <div class="risk-badge risk-critical">RISK SCORE: {{ risk_score }}/10 — CRITICAL</div>
  {% elif risk_score >= 5 %}
  <div class="risk-badge risk-high">RISK SCORE: {{ risk_score }}/10 — HIGH</div>
  {% elif risk_score >= 3 %}
  <div class="risk-badge risk-medium">RISK SCORE: {{ risk_score }}/10 — MEDIUM</div>
  {% else %}
  <div class="risk-badge risk-low">RISK SCORE: {{ risk_score }}/10 — LOW</div>
  {% endif %}
</div>

<h2>Executive Summary</h2>
<p>Scan of X (Twitter) for keyword <strong>"{{ keyword }}"</strong> collected <strong>{{ stats.total_tweets }}</strong> tweets containing <strong>{{ stats.total_iocs }}</strong> unique IOCs across <strong>{{ stats.unique_types }}</strong> indicator types from <strong>{{ stats.unique_authors }}</strong> unique accounts.</p>

{% if ai_narrative %}
<p>{{ ai_narrative }}</p>
{% endif %}

<h2>Search Parameters & Statistics</h2>
<table class="stats-table">
  <tr>
    <td>
      <div class="stat-val">{{ keyword[:20] }}</div>
      <div class="stat-label">Keyword</div>
    </td>
    <td>
      <div class="stat-val">{{ mode|upper }}</div>
      <div class="stat-label">Auth Mode</div>
    </td>
    <td>
      <div class="stat-val">{{ since or 'N/A' }}</div>
      <div class="stat-label">Since</div>
    </td>
    <td>
      <div class="stat-val">{{ until or 'N/A' }}</div>
      <div class="stat-label">Until</div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="stat-val">{{ stats.total_tweets }}</div>
      <div class="stat-label">Tweets Collected</div>
    </td>
    <td>
      <div class="stat-val">{{ stats.total_iocs }}</div>
      <div class="stat-label">Unique IOCs</div>
    </td>
    <td>
      <div class="stat-val">{{ stats.unique_types }}</div>
      <div class="stat-label">IOC Types</div>
    </td>
    <td>
      <div class="stat-val">{{ risk_score }}</div>
      <div class="stat-label">Risk Score</div>
    </td>
  </tr>
</table>

<h2>IOC Findings Dashboard</h2>
{% if iocs %}
<table class="data-table">
  <thead>
    <tr>
      <th>Type</th>
      <th>Value</th>
      <th>Confidence</th>
      <th>Mentions</th>
      <th>Context Source</th>
    </tr>
  </thead>
  <tbody>
    {% for ioc in iocs %}
    <tr>
      <td><span class="type-badge">{{ ioc.type }}</span></td>
      <td>{{ ioc.value }}</td>
      <td>{{ "%.0f"|format(ioc.confidence * 100) }}%</td>
      <td>{{ ioc.get('mention_count', 1) }}</td>
      <td>{{ ioc.get('author', 'N/A') }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% else %}
<p>No IOCs detected during this scan.</p>
{% endif %}

{% if type_breakdown %}
<h2>IOC Type Distribution</h2>
<table class="data-table">
  <thead><tr><th>Type</th><th>Count</th></tr></thead>
  <tbody>
    {% for tb in type_breakdown %}
    <tr>
      <td><span class="type-badge">{{ tb.type }}</span></td>
      <td>{{ tb.count }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% endif %}

{% if frequency %}
<h2>Frequency Distribution (Top Indicators)</h2>
<table class="data-table">
  <thead><tr><th>IOC</th><th>Type</th><th>Mentions</th></tr></thead>
  <tbody>
    {% for f in frequency[:20] %}
    <tr>
      <td>{{ f.value }}</td>
      <td><span class="type-badge">{{ f.type }}</span></td>
      <td>{{ f.count }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% endif %}

{% if top_accounts %}
<h2>Top Threat Actor & Bot Accounts</h2>
<table class="data-table">
  <thead><tr><th>Account</th><th>IOC Count</th><th>Sample IOCs</th></tr></thead>
  <tbody>
    {% for acct in top_accounts[:10] %}
    <tr>
      <td>{{ acct.account }}</td>
      <td>{{ acct.ioc_count }}</td>
      <td>{{ acct.iocs[:5]|join(', ') | truncate(80) }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% endif %}

{% if mitre_tags %}
<h2>MITRE ATT&CK Mapping</h2>
<p>
  {% for tag in mitre_tags %}
  <span class="mitre-tag">
    <span class="mitre-tid">{{ tag.id }}</span> {{ tag.name }} ({{ tag.tactic }})
  </span>
  {% endfor %}
</p>
{% endif %}

{% if evidence %}
<h2>Raw Evidence Logs (Sample)</h2>
{% for ev in evidence[:30] %}
<div class="evidence-block">
  <div class="evidence-meta">
    {{ ev.get('author_handle', 'unknown') }} — {{ ev.get('timestamp', 'N/A') }}
    {% if ev.get('url') %} | {{ ev.url }}{% endif %}
  </div>
  {{ ev.content }}
</div>
{% endfor %}
{% endif %}

</body>
</html>"""


class DossierGenerator:
    """Generate intelligence dossier reports."""

    def __init__(self, search_data, tweets, iocs, correlation_results,
                 ai_narrative=None):
        self.search = search_data
        self.tweets = tweets
        self.iocs = iocs
        self.correlation = correlation_results
        self.ai_narrative = ai_narrative

    def _build_report_data(self):
        """Assemble the full report data dict."""
        return {
            "generated_at": datetime.now(timezone.utc).strftime(
                "%Y-%m-%d %H:%M:%S UTC"
            ),
            "keyword": self.search.get("keyword", ""),
            "mode": self.search.get("mode", "unauth"),
            "since": self.search.get("since", None),
            "until": self.search.get("until", None),
            "stats": self.correlation.get("summary_stats", {}),
            "risk_score": self.correlation.get("risk_score", 0),
            "iocs": self.iocs,
            "frequency": self.correlation.get("frequency", []),
            "top_accounts": self.correlation.get("top_accounts", []),
            "timeline": self.correlation.get("timeline", []),
            "keyword_density": self.correlation.get("keyword_density", {}),
            "mitre_tags": self.correlation.get("mitre_tags", []),
            "type_breakdown": self.correlation.get("ioc_type_breakdown", []),
            "evidence": self.tweets,
            "ai_narrative": self.ai_narrative,
        }

    def to_json(self, filepath=None):
        """Export report as JSON."""
        data = self._build_report_data()
        output = json.dumps(data, indent=2, default=str, ensure_ascii=False)

        if filepath:
            config.ensure_dirs()
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(output)
            logger.info(f"JSON dossier saved: {filepath}")

        return output

    def to_html(self, filepath=None):
        """Export report as styled HTML."""
        data = self._build_report_data()
        template = Template(HTML_REPORT_TEMPLATE)
        html = template.render(**data)

        if filepath:
            config.ensure_dirs()
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(html)
            logger.info(f"HTML dossier saved: {filepath}")

        return html

    def to_pdf(self, filepath=None):
        """Export report as PDF (via HTML conversion)."""
        html_content = self.to_html()

        if not filepath:
            config.ensure_dirs()
            ts = datetime.now().strftime("%Y%m%d_%H%M%S")
            filepath = os.path.join(
                config.EXPORT_DIR,
                f"dossier_{ts}.pdf"
            )

        try:
            from xhtml2pdf import pisa
            config.ensure_dirs()
            with open(filepath, "wb") as f:
                result = pisa.CreatePDF(html_content, dest=f)
                if result.err:
                    logger.error(f"PDF generation had errors: {result.err}")
                else:
                    logger.info(f"PDF dossier saved: {filepath}")
        except ImportError:
            logger.warning("xhtml2pdf not installed — falling back to HTML")
            html_fallback = filepath.replace(".pdf", ".html")
            with open(html_fallback, "w", encoding="utf-8") as f:
                f.write(html_content)
            logger.info(f"HTML fallback saved: {html_fallback}")
            filepath = html_fallback

        return filepath

    def export(self, format="json", filepath=None):
        """Export in the specified format."""
        if format == "json":
            return self.to_json(filepath)
        elif format == "html":
            return self.to_html(filepath)
        elif format == "pdf":
            return self.to_pdf(filepath)
        else:
            raise ValueError(f"Unsupported format: {format}")
