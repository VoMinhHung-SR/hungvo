# Architecture Decisions

> Permanent architecture documentation. Last updated: 2026-06-15.

## ADR-001: Single content registry (no `data/` folder)

**Decision:** `content/projects/index.ts` is the single source of truth for project cards and case studies.

**Rationale:** Avoids drift between a separate `data/projects.ts` and content files.

## ADR-002: Nested layouts by route concern

**Decision:** Root layout (fonts/SEO only) → `(site)/layout` (SiteLayout with nav) → `projects/[slug]/layout` (CaseStudyLayout without side nav).

**Rationale:** Case study pages need article reading width without homepage side navigation.

## ADR-003: Geist-only typography

**Decision:** Use Geist as the sole font family in Phase 1. Inter deferred.

**Rationale:** Reduces bundle size and decision fatigue for a typography-driven minimal site.

## ADR-004: Four UI primitives in Phase 1

**Decision:** Container, Section, Button, ExternalLink only. Defer GlowWrapper, Badge, Text, Heading wrappers.

**Rationale:** ~18 foundation files instead of ~35. Add primitives when duplication appears in Phase 2.

## ADR-005: Single Nav component

**Decision:** One `Nav.tsx` with responsive variants instead of SideNav + MobileNav split.

**Rationale:** Fewer places for nav markup and accessibility to drift.

## ADR-006: NavItem supports anchors and routes

**Decision:** `NavItem` type with `kind: "anchor" | "route"` and `enabled` flag for future routes.

**Rationale:** Home hash links and future top-level routes (Blog, Lab) share one config model.

## ADR-007: Dark-first theme, no toggle

**Decision:** CSS custom properties in `:root`, mapped via Tailwind v4 `@theme inline`. No `prefers-color-scheme` switch.

**Rationale:** Aligns with project brief and reduces complexity.

## ADR-008: File-based content, no CMS

**Decision:** TypeScript objects for config and structured pages. MDX deferred to Phase 4 for blog/notes.

**Rationale:** Appropriate for a personal portfolio with 2–15 static pages.
