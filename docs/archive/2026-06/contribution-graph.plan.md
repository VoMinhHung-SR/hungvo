# Contribution Graph (Phase 2.5)

> **Archived:** 2026-06-16 — Phase complete. Retained for historical reference.

Custom GitHub-style contribution heatmap in the Learning section, powered by [github-contributions-api](https://github-contributions-api.jogruber.de) (jogruber). Built with a **custom calendar** (not `react-activity-calendar`).

## Goal

Render a contribution graph with daily activity grid, year selector, total count, Less/More legend, and site blue accent scale (`#38bdf8`).

## Placement

`src/sections/Learning.tsx` — below **Current Focus** grid at `/#learning`. No new nav item.

## API

**Base:** `https://github-contributions-api.jogruber.de/v4/VoMinhHung-SR`

| Query | Purpose | `total` shape |
|-------|---------|---------------|
| `?y=all` | Year list | `{ "2021": 16, "2022": 79, ... }` |
| `?y=last` | Rolling 12 months (default view) | `{ "lastYear": 630 }` |
| `?y=2026` | Single calendar year | `{ "2026": 298 }` |

Proxy: `GET /api/contributions?y={param}` — 1h cache, no client fetch to third-party domain.

Config in `site.config.ts`:

```ts
github: {
  username: "VoMinhHung-SR",
  contributionsApi: "https://github-contributions-api.jogruber.de/v4",
}
```

## Architecture

```mermaid
flowchart LR
  subgraph server [Server]
    learning[Learning.tsx]
    fetchAll["getContributions('all')"]
    fetchLast["getContributions('last')"]
    route["/api/contributions"]
  end

  subgraph client [Client]
    graph[ContributionGraph]
    grid[ContributionGrid]
    cell[ContributionCell]
    years[YearSelector]
  end

  subgraph external [External]
    api[jogruber API]
  end

  learning --> fetchAll
  learning --> fetchLast
  route --> api
  learning --> graph
  graph --> grid
  graph --> years
  grid --> cell
  graph -->|year click| route
```

### Data flow

1. **Server** (`Learning.tsx`): fetch `?y=all` for year list, `?y=last` for initial grid data.
2. **Client** (`ContributionGraph`): `isRollingYear = true` by default; normalize contributions to user's **local today** via `normalizeRollingContributions()`.
3. **Year click**: `isRollingYear = false`, fetch `?y={year}` through route handler.

### View modes

| Mode | Flag | API | Grid | Footer | Year selector |
|------|------|-----|------|--------|---------------|
| Default (rolling) | `isRollingYear = true` | `last` | Last 366 days ending local today | `N contributions in the last year` | `focusYear` highlighted (not clicked) |
| Calendar year | `isRollingYear = false` | `2026`, etc. | Jan 1 – Dec 31 | `N contributions in 2026` | `selectedYear` pressed (`aria-pressed`) |

`focusYear` = most recent year from API (e.g. 2026). Visual highlight in rolling mode; click overrides to calendar year view.

## Files

```
src/
├── types/contributions.ts
├── lib/github/
│   ├── contributions.ts          # fetch, year list, counts, CONTRIBUTION_LAST_YEAR_PARAM
│   ├── contribution-grid.ts      # buildWeekColumns, buildRollingWeekColumns, month labels
│   ├── contribution-rolling.ts   # getLocalToday, normalizeRollingContributions
│   └── contribution-label.ts     # GitHub-style tooltip labels
├── app/api/contributions/route.ts
└── components/learning/
    ├── ContributionGraph.tsx     # client: isRollingYear, year state, layout shell
    ├── ContributionGrid.tsx      # CSS grid heatmap + month row
    ├── ContributionCell.tsx      # client: hover tooltip
    ├── YearSelector.tsx          # focus vs selected states
    ├── ContributionLegend.tsx
    └── contribution-styles.ts    # cell size constants
```

**Modified:** `src/sections/Learning.tsx`, `src/app/globals.css` (`--contrib-level-*`, `.contrib-calendar-*`, `.contrib-tooltip`).

## UI spec (shipped)

### Layout

```
┌─────────────────────────────────────┐  ┌────┐
│ Contribution Graph                  │  │2026│ ← focus (rolling) or selected (calendar)
│ ┌─────────────────────────────────┐ │  │2025│
│ │ Jun Jul Aug ... (month labels)  │ │  │... │
│ │ ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪ (CSS grid)      │ │  └────┘
│ └─────────────────────────────────┘ │
│ ─────────────────────────────────── │  ← border-t separator
│ 630 contributions in the last year  │
│                    Less ▪▪▪▪▪ More  │
└─────────────────────────────────────┘
```

### Grid

- **CSS Grid** (`grid-auto-flow: column`, 7 rows) — uniform 12×12px cells, 3px gap, 2px radius
- Sunday-first week columns; month labels aligned to week columns
- `overflow-x-auto md:overflow-visible` — no horizontal scrollbar on desktop

### Colors (`globals.css`)

| Level | Token |
|-------|-------|
| 0 | `#1a1a1a` |
| 1–3 | Blue gradient via `color-mix` + `--accent` |
| 4 | `--accent` (#38bdf8) |

### Tooltip (hover)

GitHub-style format: `No contributions on June 16th.` / `3 contributions on March 5th.`

Dark tooltip above cell with border, shadow, arrow. Cell outline on hover.

### Year selector

- `isFocused`: rolling mode, nearest year — `bg-accent`, `aria-current`
- `isSelected`: calendar mode after click — `bg-accent`, `aria-pressed`

## Implementation checklist

- [x] Types + fetch layer (`contributions.ts`)
- [x] API route proxy + cache
- [x] Custom grid components (no third-party calendar lib)
- [x] Rolling year default (`?y=last`, `isRollingYear` flag)
- [x] Client local-today normalization
- [x] Calendar year on year click
- [x] Focus vs selected year states
- [x] GitHub-style tooltip + date formatting
- [x] Footer border separator
- [x] Blue accent scale in theme tokens
- [x] API failure fallback message
- [x] `npm run build` passes

## Exit criteria

- [x] Graph visible in `/#learning`
- [x] Default = rolling last year (local today)
- [x] Year selector lists all years from `?y=all`
- [x] Year click loads calendar year grid
- [x] Cell colors use site blue accent
- [x] Total count matches API
- [x] Legend Less / More displayed
- [x] No client-side fetch to third-party domain

## Out of scope (deferred)

- GitHub OAuth / private repos
- Framer Motion animations
- GitHub profile iframe embed
- Contribution graph on case study pages
- Phase 3 case study work

## Design decisions

| Decision | Rationale |
|----------|-----------|
| Custom calendar vs `react-activity-calendar` | Full control over theme, layout, year selector, rolling mode |
| `isRollingYear` flag | Separates default GitHub-like rolling view from explicit year selection |
| Client `getLocalToday()` | Grid extends to user's local date even when server/API cache is stale |
| CSS Grid over nested flex | Even cell/month gaps; reference: react-activity-calendar / GitHub |
| Route handler proxy | Caching, CORS safety, swappable API later |

## Related

- [Implementation roadmap](../../planning/implementation-roadmap.plan.md)
- [Home sections plan](home-sections.plan.md)
- [Project brief](../../ai/project-brief.md)
