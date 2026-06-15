# Implementation Notes — Phase 1

> **Archived:** 2026-06-15 — Implementation summary. Retained for historical reference.

## Created files

### App Router

- `src/app/layout.tsx` — fonts, SEO, JSON-LD, skip link
- `src/app/globals.css` — theme + typography tokens
- `src/app/(site)/layout.tsx` — SiteLayout wrapper
- `src/app/(site)/page.tsx` — returns `null`
- `src/app/projects/[slug]/layout.tsx` — CaseStudyLayout
- `src/app/projects/[slug]/page.tsx` — static params, metadata, returns `null`
- `src/app/sitemap.ts`, `src/app/robots.ts`

### Layout

- `src/components/layout/SiteLayout.tsx`
- `src/components/layout/CaseStudyLayout.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Nav.tsx`
- `src/components/layout/Footer.tsx`

### UI primitives

- `src/components/ui/Container.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/ExternalLink.tsx` (includes `InternalLink`)

### Content

- `src/content/site.config.ts`
- `src/content/projects/index.ts`
- `src/content/projects/interview-frogde.ts`
- `src/content/projects/pharmacy-management.ts`

### Types and lib

- `src/types/content.ts`
- `src/lib/cn.ts`
- `src/lib/content.ts`
- `src/lib/seo/metadata.ts`
- `src/lib/seo/structured-data.ts`

### Reserved

- `src/hooks/.gitkeep`
- `public/images/projects/.gitkeep`
- `public/og/.gitkeep`
- `.env.example`

## Architectural decisions

- **Nested layouts:** root (fonts/SEO) → `(site)` (nav shell) → case study (article width, no side nav)
- **Content registry:** `content/projects/index.ts` is single source of truth
- **Config-driven nav:** `homeNav` (anchors) + `siteNav` (future routes, `enabled: false`)
- **Dark-first tokens:** `#0A192F`, `#112240`, `#CCD6F6`, `#8892B0`, `#64FFDA`
- **SEO factory:** `createMetadata()` + sitemap from registry + JSON-LD `@graph`

## Extension points

| Area | Where | How |
|------|-------|-----|
| Home sections | `src/sections/` (Phase 2) | Compose into `(site)/page.tsx` |
| Case study UI | `projects/[slug]/page.tsx` | Render from `getProjectBySlug()` |
| Blog / Notes / Lab | `site.config.ts` → `siteNav` | Enable routes, add `app/` routes |
| Active nav | `src/hooks/` | `useActiveSection` in Phase 2 |
| Article SEO | `structured-data.ts` | Wire `articleSchema()` in Phase 3 |

## Build verification

```
npm run build — SUCCESS

Routes:
  ○ /
  ● /projects/interview-frogde
  ● /projects/pharmacy-management
  ○ /robots.txt
  ○ /sitemap.xml
```
