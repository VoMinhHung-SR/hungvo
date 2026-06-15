# Implementation Roadmap

> Active cross-phase plan. Last updated: 2026-06-16.

## Phase 1 — Foundation (complete)

Theme, content registry, nested layouts, SEO infrastructure, empty page shells.

Archived: [phase-1-foundation.plan.md](../archive/2026-06/phase-1-foundation.plan.md)

## Phase 2 — Home Sections UI (complete)

Hero, About, Projects, Learning, Contact. Nav active states. Project cards.

Plan: [home-sections.plan.md](home-sections.plan.md)

## Phase 2.5 — Contribution Graph (complete)

Custom GitHub-style heatmap in Learning section via [jogruber contributions API](https://github-contributions-api.jogruber.de/v4/VoMinhHung-SR?y=all). Rolling year default, year selector, blue accent scale, hover tooltips.

Archived: [contribution-graph.plan.md](../archive/2026-06/contribution-graph.plan.md)

## Phase 3 — Case Studies

Case study article layout + section rendering from typed content. Article JSON-LD. Real screenshots.

## Phase 4 — Publishing (Blog + Technical Notes)

MDX pipeline (`content/blog/`, `content/notes/`). `/blog/[slug]`, `/notes/[slug]` routes. Extend sitemap registry.

## Phase 5 — Interactive Areas

AI Lab (`/lab`). LeetCode Dashboard. Framer Motion polish (sparingly).

## Phase 6 — Performance + SEO Hardening

Image optimization, dynamic OG per page, Lighthouse pass. Analytics (optional).

## Future routes (reserved in `site.config.ts`)

| Route | Status |
|-------|--------|
| `/blog` | `enabled: false` |
| `/notes` | `enabled: false` |
| `/lab` | `enabled: false` |

Enable in `siteNav` when each route ships.
