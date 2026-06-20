# Implementation Roadmap

> Active cross-phase plan. Last updated: 2026-06-17.

## Phase 1 — Foundation (complete)

Theme, content registry, nested layouts, SEO infrastructure, empty page shells.

Archived: [phase-1-foundation.plan.md](../archive/2026-06/phase-1-foundation.plan.md)

## Phase 2 — Home Sections UI (complete)

Hero, About, Projects, Learning, Contact. Nav active states. Project cards.

Plan: [home-sections.plan.md](home-sections.plan.md) (superseded)

## Phase 2.5 — Contribution Graph (complete)

Custom GitHub-style heatmap in Learning section via [jogruber contributions API](https://github-contributions-api.jogruber.de/v4/VoMinhHung-SR?y=all). Rolling year default, year selector, blue accent scale, hover tooltips.

Archived: [contribution-graph.plan.md](../archive/2026-06/contribution-graph.plan.md)

## Phase 3 — Case Studies (complete)

Case study article layout + section rendering from typed content. Article JSON-LD. Placeholder screenshots (replace with real assets).

Archived: [case-study-system.plan.md](../archive/2026-06/case-study-system.plan.md)

## Phase 4 — Publishing (Blog + Technical Notes) (complete)

MDX pipeline with static registry (`src/content/blog/`, `src/content/notes/`). Index under `(site)` + article routes. Shared article page factory. Nav entries enabled.

Archived: [blog-system.plan.md](../archive/2026-06/blog-system.plan.md)

## Phase 4.5 — Homepage Layout Refactor (complete)

Shift from card-heavy homepage to top-nav marketing layout: experience tabs, featured projects, full-width header. Cyan palette unchanged.

Archived: [homepage-layout-refactor.plan.md](../archive/2026-06/homepage-layout-refactor.plan.md)

Previous card-module polish: [ui-polish.plan.md](../archive/2026-06/ui-polish.plan.md)

## Phase 4.6 — Consolidation & Cleanup (next)

Unify site shell across all routes, consolidate drifted styles, prune unused config/CSS, archive stale plans.

Plan: [consolidation-refactor.plan.md](consolidation-refactor.plan.md)

## Phase 5 — Interactive Areas

AI Lab (`/lab`). LeetCode Dashboard. Framer Motion polish (sparingly).

## Phase 6 — Performance + SEO Hardening

Image optimization, dynamic OG per page, Lighthouse pass. Analytics (optional).

## Future routes (reserved in `site.config.ts`)

| Route | Status |
|-------|--------|
| `/blog` | `enabled: false` (routes live; nav hidden until content ready) |
| `/notes` | `enabled: false` (routes live; nav hidden until content ready) |
| `/lab` | `enabled: false` |

Enable in `siteNav` when each route ships.
