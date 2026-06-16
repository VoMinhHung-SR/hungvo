# Phase 1 — Foundation

> **Archived:** 2026-06-15 — Phase complete. Retained for historical reference.

## Scope

Infrastructure only — no section UI, no animations, no placeholder designs.

- Theme tokens + Geist font + spacing/width tokens in `globals.css`
- `site.config.ts` + project content registry + `types/content.ts`
- `lib/content.ts` + `lib/seo/*` + sitemap/robots
- Nested layouts: root → `(site)` → case study
- UI primitives: Container, Section, Button, ExternalLink
- Nav config with anchor + route-ready `NavItem` type
- Home page returns `null` — no UI leakage
- Project routes with static params, metadata, placeholder page
- Default OG path reserved + Person/WebSite JSON-LD

## Exit criteria

- [x] `npm run build` passes
- [x] `/projects/interview-frogde` and `/projects/pharmacy-management` resolve
- [x] `/sitemap.xml` and `/robots.txt` serve correctly
- [x] JSON-LD Person + WebSite present in root layout
- [x] Theme tokens visible (`#0A192F` background, `#64FFDA` accent)

## Out of scope (deferred)

- Hero, About, Projects, Learning, Contact section UI
- Case study article layout and content rendering
- Framer Motion animations
- `useActiveSection` hook
- Real OG image and project screenshots
