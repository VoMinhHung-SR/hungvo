# Home Sections UI

> **Superseded** by [consolidation-refactor.plan.md](consolidation-refactor.plan.md) and [homepage layout refactor](../archive/2026-06/homepage-layout-refactor.plan.md). Homepage now has 6 sections + Experience; shell is top nav.

## Scope

Build visible homepage sections using Phase 1 foundations.

- Hero, About, Projects, Learning, Contact in `src/sections/`
- Compose sections into `(site)/page.tsx` using `Section` + `Container`
- Project cards using registry data from `content/projects/`
- Add `useActiveSection` + nav active states
- Introduce Badge, Heading helpers only if duplication appears

## Design references

See [project brief](../ai/project-brief.md) for layout philosophy and visual style (dark theme).

## Branding (Phase 2)

- Header/nav: text-only site name (`Hung Vo`) from `site.config.ts` — no logo image in Phase 2
- Logo asset deferred to a later phase; do not block section UI on logo design

## Prerequisites

Phase 1 foundation must be complete and build-verified.

## Exit criteria

- [x] Home page renders all five sections with real content
- [x] Hash navigation (`/#about`, `/#projects`, etc.) scrolls correctly
- [x] Project cards link to `/projects/[slug]`
- [x] Nav active state highlights current section
- [x] Responsive layout on mobile and desktop
