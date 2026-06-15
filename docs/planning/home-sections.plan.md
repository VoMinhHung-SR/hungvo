# Home Sections UI

> Active plan. Last updated: 2026-06-15.

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

- [ ] Home page renders all five sections with real content
- [ ] Hash navigation (`/#about`, `/#projects`, etc.) scrolls correctly
- [ ] Project cards link to `/projects/[slug]`
- [ ] Nav active state highlights current section
- [ ] Responsive layout on mobile and desktop
