# KFC Public Dashboard

Independent public display repository for the KFC public-information dashboard.

**Phase 1: fictional demo only.** Every company, symbol, news item, quote, percentage, and sparkline is invented for testing. No live data, private holdings, original news bodies, credentials, database, or raw research exports are included.

Site: https://searchbb.github.io/kfc-public-dashboard/

## Publishing

- GitHub Pages, default HTTPS `github.io` domain.
- Publish `main`, repository root `/`, with `.nojekyll`.
- Static HTML, CSS, JavaScript and one JSON snapshot; no package installation, custom workflow, new secrets or persistent runner.
- `data/snapshot.json` contains visible UTC timestamps and demo metadata.
- Filtering happens locally in the visitor's browser. No collection, market computation or research jobs run on the Mac or on Pages.

## Intended next phase

dot generates approved public result snapshots upstream and publishes only the display files to this independent repository. A ten-minute publication target is accepted, but no recurring publisher is enabled in this phase. GitHub Pages build/cache propagation is additional and the interval is a target, not a latency guarantee.

The current renderer explicitly requires `mode: fictional_demo`. Before real public snapshots are integrated, review the source allowlist and deliberately update the renderer, mode labels and disclaimers together. Do not silently substitute real data into a fictional demo.

## Snapshot contract

`schema_version`, `mode`, `snapshot_id`, `generated_at`, `publisher`, `target_update_minutes`, `scheduled_publication_enabled`, `disclaimer`, `news[]`, `markets[]`.

News: `id`, `category`, `title`, `summary`, `source_label`, `published_at`.

Market observations: `id`, `symbol`, `name`, `category`, `price`, `change_pct`, `as_of`, `observation`, `sparkline_points` (presentation-only example geometry).

The page uses text nodes for snapshot strings and does not interpret them as HTML. No third-party scripts, fonts, analytics, embeds or API calls are used. The only runtime request is the same-origin JSON snapshot.

## Scope boundary

This repository is separate from the production KFC checkout, its book PR workflow, news/investment services, schedules and existing Cloudflare/Sites projects.
