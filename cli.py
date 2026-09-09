"""
IOC Radar X - CLI Interface
Click-based command-line interface for threat intelligence collection.
"""
import os
import sys
import json
import click
from datetime import datetime
from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich.text import Text

console = Console()

BANNER = """
[bold green]
  ██╗ ██████╗  ██████╗    ██████╗  █████╗ ██████╗  █████╗ ██████╗    ██╗  ██╗
  ██║██╔═══██╗██╔════╝    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗   ╚██╗██╔╝
  ██║██║   ██║██║         ██████╔╝███████║██║  ██║███████║██████╔╝    ╚███╔╝
  ██║██║   ██║██║         ██╔══██╗██╔══██║██║  ██║██╔══██║██╔══██╗    ██╔██╗
  ██║╚██████╔╝╚██████╗    ██║  ██║██║  ██║██████╔╝██║  ██║██║  ██║   ██╔╝ ██╗
  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝  ╚═╝
[/bold green]
[dim]  X-Based OSINT & Tactical Threat Intelligence IOC Collection Framework[/dim]
"""


def print_banner():
    console.print(BANNER)


@click.command()
@click.option("--keyword", "-k", required=True,
              help="Search keyword (e.g., 'CVE-2026', 'malware')")
@click.option("--auth", "-a", type=click.Path(exists=True), default=None,
              help="Path to cookies.json for authenticated mode")
@click.option("--since", "-s", default=None,
              help="Start date filter (YYYY-MM-DD)")
@click.option("--until", "-u", default=None,
              help="End date filter (YYYY-MM-DD)")
@click.option("--max-tweets", "-m", default=100, type=int,
              help="Maximum tweets to collect (default: 100)")
@click.option("--output", "-o", type=click.Choice(["json", "html", "pdf"]),
              default="json", help="Export format (default: json)")
@click.option("--proxy", "-p", default=None,
              help="Proxy URL (e.g., http://proxy:8080)")
@click.option("--debug", "-d", is_flag=True, default=False,
              help="Enable debug mode (screenshots, HAR, HTML snapshots)")
@click.option("--ai-enrich", is_flag=True, default=False,
              help="Enable AI threat narrative enrichment")
def main(keyword, auth, since, until, max_tweets, output, proxy, debug, ai_enrich):
    """IOC Radar X — Tactical X/Twitter Threat Intelligence Collector."""
    print_banner()

    import config
    config.ensure_dirs()

    if debug:
        config.LOG_LEVEL = "DEBUG"

    from engine.logger import get_logger
    logger = get_logger()

    # --- Authentication ---
    mode = "unauth"
    pw_cookies = None

    if auth:
        console.print(Panel("[bold yellow]🔐 AUTHENTICATED MODE[/bold yellow]",
                            border_style="yellow"))
        try:
            with open(auth, "r") as f:
                raw_cookies = json.load(f)

            from engine.security import validate_cookies, cookies_to_playwright
            validation = validate_cookies(raw_cookies)

            if not validation["valid"]:
                console.print(f"[red]✗ Cookie validation failed:[/red]")
                for err in validation["errors"]:
                    console.print(f"  [red]• {err}[/red]")
                sys.exit(1)

            if validation["expired"]:
                console.print("[yellow]⚠ Warning: auth_token may be expired[/yellow]")

            pw_cookies = cookies_to_playwright(raw_cookies)
            mode = "auth"
            console.print("[green]✓ Cookies validated successfully[/green]")

        except json.JSONDecodeError:
            console.print("[red]✗ Invalid JSON in cookie file[/red]")
            sys.exit(1)
        except Exception as e:
            console.print(f"[red]✗ Cookie loading failed: {e}[/red]")
            sys.exit(1)
    else:
        console.print(Panel(
            "[bold cyan]🌐 UNAUTHENTICATED MODE[/bold cyan]\n"
            "[dim]Limited visibility • Higher block probability[/dim]",
            border_style="cyan"
        ))

    # --- Display search parameters ---
    param_table = Table(title="Search Parameters", border_style="green")
    param_table.add_column("Parameter", style="cyan")
    param_table.add_column("Value", style="white")
    param_table.add_row("Keyword", keyword)
    param_table.add_row("Mode", mode.upper())
    param_table.add_row("Since", since or "N/A")
    param_table.add_row("Until", until or "N/A")
    param_table.add_row("Max Tweets", str(max_tweets))
    param_table.add_row("Output", output.upper())
    param_table.add_row("Proxy", proxy or "None")
    param_table.add_row("Debug", "ON" if debug else "OFF")
    param_table.add_row("AI Enrich", "ON" if ai_enrich else "OFF")
    console.print(param_table)

    # --- Initialize database ---
    from database.models import init_db, Search, Tweet, IOC
    from database import get_session
    init_db()

    session = get_session()
    search_record = Search(
        keyword=keyword, mode=mode,
        since_date=since, until_date=until,
        max_tweets=max_tweets, status="running"
    )
    session.add(search_record)
    session.commit()

    # --- Crawl ---
    console.print("\n[bold green]⚡ Starting crawler...[/bold green]")

    def cli_progress(status, detail, count):
        console.print(f"  [dim]{status}[/dim] {detail} [cyan]({count})[/cyan]")

    from engine.crawler import run_crawl
    tweets = run_crawl(
        keyword=keyword, since=since, until=until,
        max_tweets=max_tweets, proxy=proxy, debug=debug,
        cookies=pw_cookies, progress_cb=cli_progress
    )

    if not tweets:
        console.print("[yellow]⚠ No tweets collected. "
                      "X may be blocking or no results found.[/yellow]")
        search_record.status = "done"
        search_record.total_tweets = 0
        session.commit()
    else:
        console.print(f"[green]✓ Collected {len(tweets)} tweets[/green]")

    # --- Persist tweets ---
    for tw in tweets:
        tweet_record = Tweet(
            tweet_id=tw.get("tweet_id"),
            author=tw.get("author"),
            author_handle=tw.get("author_handle"),
            content=tw.get("content", ""),
            timestamp=tw.get("timestamp"),
            url=tw.get("url"),
            search_id=search_record.id
        )
        session.add(tweet_record)
    session.commit()

    # --- Extract IOCs ---
    console.print("\n[bold green]🔍 Extracting IOCs...[/bold green]")
    from engine.extractor import IOCExtractor
    extractor = IOCExtractor()
    ioc_results = extractor.extract_from_tweets(tweets)

    console.print(f"[green]✓ Found {len(ioc_results)} unique IOCs[/green]")

    # Display IOC table
    if ioc_results:
        ioc_table = Table(title="IOC Findings", border_style="red")
        ioc_table.add_column("Type", style="cyan", width=12)
        ioc_table.add_column("Value", style="white")
        ioc_table.add_column("Confidence", style="yellow", width=12)
        ioc_table.add_column("Source", style="dim", width=20)
        for ioc in ioc_results[:30]:
            conf = f"{ioc['confidence']*100:.0f}%"
            ioc_table.add_row(
                ioc["type"], ioc["value"][:60], conf,
                ioc.get("author", "N/A")
            )
        console.print(ioc_table)

    # Persist IOCs
    tweet_map = {t.tweet_id: t.id for t in session.query(Tweet).filter_by(
        search_id=search_record.id
    ).all()}

    for ioc in ioc_results:
        tw_id = tweet_map.get(ioc.get("tweet_id"))
        if tw_id:
            ioc_record = IOC(
                ioc_type=ioc["type"], value=ioc["value"],
                context=ioc.get("context", ""),
                confidence=ioc["confidence"],
                tweet_id=tw_id
            )
            session.add(ioc_record)
    session.commit()

    # --- Correlate ---
    console.print("\n[bold green]📊 Running correlation analysis...[/bold green]")
    from engine.correlation import CorrelationEngine
    correlator = CorrelationEngine(tweets, ioc_results)
    correlation = correlator.analyze()

    risk = correlation["risk_score"]
    risk_color = "red" if risk >= 7 else ("yellow" if risk >= 4 else "green")
    console.print(f"[bold {risk_color}]⚡ Risk Score: {risk}/10[/bold {risk_color}]")

    # Update search record
    search_record.status = "done"
    search_record.total_tweets = len(tweets)
    search_record.total_iocs = len(ioc_results)
    search_record.risk_score = risk
    session.commit()

    # --- AI Enrichment ---
    ai_narrative = None
    if ai_enrich:
        console.print("\n[bold magenta]🤖 AI Enrichment...[/bold magenta]")
        from engine.ai_module import AIEnricher
        enricher = AIEnricher(
            endpoint=config.AI_ENDPOINT if hasattr(config, 'AI_ENDPOINT') else None,
            api_key=os.getenv("AI_API_KEY")
        )
        ai_result = enricher.enrich(ioc_results, tweets, correlation)
        ai_narrative = ai_result.get("narrative", "")
        console.print(f"[dim]{ai_narrative[:200]}...[/dim]" if len(ai_narrative) > 200
                      else f"[dim]{ai_narrative}[/dim]")

    # --- Generate Dossier ---
    console.print(f"\n[bold green]📄 Generating {output.upper()} dossier...[/bold green]")
    from engine.dossier import DossierGenerator

    search_data = {
        "keyword": keyword, "mode": mode,
        "since": since, "until": until,
    }

    dossier = DossierGenerator(
        search_data, tweets, ioc_results, correlation, ai_narrative
    )

    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"dossier_{keyword.replace(' ', '_')}_{ts}.{output}"
    filepath = os.path.join(config.EXPORT_DIR, filename)

    result = dossier.export(format=output, filepath=filepath)
    console.print(f"[green]✓ Dossier exported: {filepath}[/green]")

    # --- Summary ---
    console.print("\n")
    summary = Panel(
        f"[bold green]Scan Complete[/bold green]\n\n"
        f"  Tweets:   [cyan]{len(tweets)}[/cyan]\n"
        f"  IOCs:     [cyan]{len(ioc_results)}[/cyan]\n"
        f"  Risk:     [{risk_color}]{risk}/10[/{risk_color}]\n"
        f"  Report:   [dim]{filepath}[/dim]\n",
        title="[bold green]⚡ IOC Radar X — Mission Complete ⚡[/bold green]",
        border_style="green"
    )
    console.print(summary)

    session.close()


if __name__ == "__main__":
    main()
