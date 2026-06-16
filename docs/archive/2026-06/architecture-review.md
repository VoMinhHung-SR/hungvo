# Architecture Review

> **Archived:** 2026-06-15 — Pre-implementation review. Retained for historical reference.

**Score: 7.5 / 10** — Approve with modifications.

Staff-level review of the proposed foundation architecture for Hung Vo's portfolio.

## Summary by area

### 1. Folder Architecture

**Good:** Clear `app/`, `components/`, `sections/`, `lib/` separation. Co-located case studies under `app/projects/[slug]/`.

**Risky:** `data/` and `content/` overlap; empty section barrels add noise.

**Simplified:** Collapse to `content/projects/index.ts` registry. Merge types into `types/content.ts`. Use `app/(site)/` route group.

### 2. Scalability

**Good:** File-based typed content scales for 2–15 pages. `generateStaticParams` pattern is correct.

**Risky:** `ProjectSlug` union per collection; TS for long-form content becomes painful; hash nav won't scale to Blog/Lab routes.

**Added:** Generic `ContentItem` base type. Decide MDX for blog/notes in Phase 4.

### 3. Maintainability

**Good:** Small UI primitives, centralized SEO, CSS variable theme.

**Risky:** ~35 files in Phase 1 with zero visible UI. Triple nav components.

**Simplified:** Target ~20 files. One `Nav.tsx`. Defer `useActiveSection` to Phase 2.

### 4. Separation of Concerns

**Good:** Layout shells separated from content and section UI. SEO isolated in `lib/seo/`.

**Risky:** Root layout owns too much. `Section` in `ui/` mixes layout with generic UI.

**Simplified:** Nested layouts. Move `Section` consideration to layout layer in Phase 2.

### 5. Content Strategy

**Good:** No CMS for v1. Case study structure matches brief.

**Risky:** No strategy for Blog, Notes, AI Lab content shape.

**Added:** Content tiers — TS for config, MDX for publishable long-form (Phase 4).

### 6. SEO Strategy

**Good:** `createMetadata()`, sitemap, robots, JSON-LD Person/WebSite.

**Risky:** Missing Article schema for case studies. No default OG image. Sitemap hardcoded to projects.

**Added:** `articleSchema()` (wired in Phase 3). Default OG image. Canonical URLs from day one.

### 7. Theme Architecture

**Good:** CSS custom properties + Tailwind v4 `@theme inline`. Semantic token names.

**Risky:** Dual fonts (Geist + Inter). No spacing scale tokens.

**Simplified:** Geist only. Spacing + width tokens added.

### 8. Typography Architecture

**Good:** Explicit hierarchy with clamp-based sizing. `as` prop for semantic HTML.

**Simplified:** Typography via `@theme` text sizes in Phase 1. Wrapper components deferred.

### 9. Navigation Architecture

**Good:** Config-driven nav. Hash links for home sections. Separate case study routes.

**Risky:** Hybrid IA won't accommodate Blog/Lab as top-level routes without restructuring.

**Added:** Split `homeNav` and `siteNav`. `NavItem` kind field. Back-link on case study pages.

### 10. Over-Engineering

**Good:** No Redux, API layer, CMS, or monorepo.

**Risky:** 8 UI primitives, 3 nav components, section barrels in Phase 1.

**Simplified:** Phase 1 MVP ~18 files.

## Approved folder structure

See [decisions.md](../../architecture/decisions.md) and [phase-1-implementation-notes.md](phase-1-implementation-notes.md) for the final implemented structure.

## High-priority risks

| Priority | Risk | Impact |
|----------|------|--------|
| High | Nav architecture is home-anchor-only | Breaking change when Blog/Lab ship |
| High | `data/` + `content/` duplication | Drift between cards and case studies |
| Medium | TS-only long-form content | Painful when blog/notes arrive |
| Medium | SiteLayout wrapping case studies | Wrong IA on article pages |
