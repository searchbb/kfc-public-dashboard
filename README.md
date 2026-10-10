# KFC Public Newsroom

Public news display for the user and colleagues. This repository and its current site contain only news presentation files and a news snapshot.

**Phase 1: fictional news demo.** All institutions, events, headlines and summaries are invented for testing. No original article bodies, credentials, database or raw exports are included.

Site: https://searchbb.github.io/kfc-public-dashboard/

## Publishing

- GitHub Pages: publish `main`, repository root `/`, with `.nojekyll`.
- Default HTTPS `github.io` domain; no custom domain.
- Static HTML, CSS, JavaScript and `data/snapshot.json`.
- No new secrets, custom workflow, installed packages or persistent runner.
- The browser only loads the same-origin news snapshot and filters displayed news.
- All resource paths stay under the repository project-site base.

## Future news publisher

dot generates approved public news snapshots upstream and publishes only these display files. The target interval is ten minutes, with publication only when the news changes. No recurring publisher is enabled in this phase. Pages build/cache propagation adds latency.

The renderer currently requires `mode: fictional_demo`. Before connecting real public news, update the renderer mode, labels and disclaimers together. Keep news source attribution and original source links in the reviewed display projection.

## News snapshot contract

`schema_version`, `mode`, `snapshot_id`, `generated_at`, `publisher`, `target_update_minutes`, `scheduled_publication_enabled`, `disclaimer`, `news[]`.

Each news item contains `id`, `category`, `title`, `summary`, `source_label`, `published_at`.

Snapshot strings render as text nodes, never HTML. No third-party scripts, fonts, analytics, embeds or API calls are used.

## Isolation

This is an independent news-display repository. Production KFC programs, book PR workflows, services, schedules and existing Cloudflare/Sites projects are unaffected.
