# Consolidation & Cleanup Refactor (Phase 4.6)

> **Archived:** 2026-06-20 — Phase complete.
>
> Follow-up to [Homepage layout refactor (Phase 4.5)](homepage-layout-refactor.plan.md). No new features — align architecture, remove drift, unify shell.

## Why this plan exists

Phases 1–4.5 shipped fast and layered **two UI directions** that were never fully reconciled:

1. **Card-module pass (Phase 4.5 v1)** — `ContentCard`, `PageIntro`, `MetaRow`, `SectionLabel` across many surfaces
2. **Homepage layout pass (Phase 4.5 v2)** — top nav, full-width header, featured projects, experience tabs; homepage body sections moved away from cards

Nothing is broken (`npm run build` passes), but the codebase had **style drift**, **layout split across routes**, **stale docs**, and **config that did not match components**.

## Current state summary

### Shipped & working

| Area | Status |
|------|--------|
| Homepage IA | Hero → About → Experience → Work → Learning → Contact |
| Shell (site routes) | Full-width sticky header, side rails, Resume button |
| Publishing | MDX blog/notes, `PostCard`, `CollectionIndexPage` |
| Case studies | Typed sections, `CaseStudyHeader`, metrics/gallery |
| Contribution graph | API + year selector |
| Design tokens | Cyan palette, `ui-lift` on outline buttons |

### Route / layout split

| Route group | Layout | Has site shell? |
|-------------|--------|-----------------|
| All public routes | `(site)` → `SiteLayout` + content | ✅ |

Slug routes moved under `(site)`; `ArticleLayout` nests inside `SiteLayout`.

### Component audit

**No orphaned files** — every file under `src/components/`, `src/sections/`, `src/lib/ui/` is imported. Cleanup was **consolidation**, not bulk deletion.

#### Keep — homepage (current layout)

```
src/sections/*
src/components/layout/Header.tsx, Nav.tsx, SiteLayout.tsx
src/components/layout/SocialRail.tsx, EmailRail.tsx, Footer.tsx
src/components/experience/ExperienceTabs.tsx
src/components/projects/FeaturedProject.tsx
src/components/ui/SectionHeading.tsx, ArrowList.tsx, ProfileFrame.tsx
src/components/icons/SocialIcons.tsx
src/lib/ui/interaction-classes.ts
```

#### Keep — publishing / case study (card-module primitives)

```
src/components/publishing/*
src/components/case-study/*
src/components/ui/ContentCard.tsx, PageIntro.tsx, MetaRow.tsx
src/components/ui/BackLink.tsx, Badge.tsx
src/lib/ui/card-classes.ts
src/lib/publishing/*
```

---

## Design system decision (locked)

| Surface | Primitive set |
|---------|----------------|
| Homepage body sections | Open layout — no `ContentCard`, plain text + panels |
| Homepage graph | `surfacePanel` — not card-module hover |
| Featured / archive projects | Overlap + grid — `project-classes.ts` |
| Blog / notes index + cards | `ContentCard` + `SectionHeading` (index title) |
| Case study articles | `PageIntro` + `MetaRow` + `imageFrameMobile` |
| Buttons (CTA, Resume) | outline-only + `ui-lift` |

---

## Implementation plan

Verify `npm run build` after each step.

### Step 1 — Unify site shell (P0)

- [x] Move slug routes under `(site)`
- [x] Refactor `ArticleLayout` — back link below header; padding via `SiteLayout` container
- [x] Scroll-spy on article routes: no homepage section active when sections absent
- [x] Build verifies `/projects/*`, `/blog/[slug]` routes

### Step 2 — Extract shared surface utilities (P1)

- [x] Add `src/lib/ui/project-classes.ts` — `featuredPanel`, `archiveCard`
- [x] Add `surfacePanel` in `card-classes.ts`
- [x] Refactor `FeaturedProject`, `ProjectArchiveCard`, `ContributionGraph`
- [x] Use `imageFrame` on featured project images

### Step 3 — Profile & content cleanup (P1)

- [x] `ProfileFrame` — optional `src`; initials fallback on error/missing
- [ ] Add `public/images/profile.jpg` (initials shown until asset added)
- [x] Remove unused `viewCaseStudy` from `home.ts`
- [ ] Align experience bullets with real CV (content only — deferred)

### Step 4 — Prune dead CSS & Button API (P2)

- [x] Remove `.text-hero-glow`
- [x] Remove unused `Button` variants (`primary` / `ghost`); outline-only API
- [x] Document `ui-lift` tokens in `globals.css`
- [x] Merge lift helper into `interaction-classes.ts`

### Step 5 — Publishing alignment (P2)

- [x] `CollectionIndexPage` — `SectionHeading` + rule
- [x] `PostCard` — padding verified via `ContentCard` / `cardBase`
- [x] `ArticleLayout` + `BackLink` — `scroll-mt-nav` with sticky header
- [x] Defer syntax highlighting to Phase 6

### Step 6 — Case study touch-up (P2)

- [x] `MetricsSection` — `metricCell` (lighter than `ContentCard`)
- [x] `CaseStudyHeader` — `imageFrameMobile`
- [ ] Replace placeholder screenshots when assets ready

### Step 7 — Docs & roadmap

- [x] Archive `home-sections.plan.md`, `publishing-ui.plan.md`
- [x] Mark this plan complete; close Phase 4.6 on roadmap
- [x] Update homepage-layout archive deferred items (resume ✅, profile ❌)

---

## Exit criteria

- [x] All public routes use `SiteLayout`
- [x] Homepage has zero `ContentCard` (graph uses `surfacePanel`)
- [x] Project cards use `project-classes` — no duplicated Tailwind strings
- [x] `ProfileFrame` wired to `profileImage` with initials fallback
- [x] No dead content keys (`viewCaseStudy` removed)
- [x] Dead CSS removed; stale plans archived
- [x] `npm run build` passes
- [ ] Manual pass: `/`, `/blog`, `/blog/[slug]`, `/projects/[slug]` at 1280px + 390px

---

## Related

- [Implementation roadmap](../../planning/implementation-roadmap.plan.md)
- [Homepage layout refactor (archived)](homepage-layout-refactor.plan.md)
- [UI polish v1 (archived)](ui-polish.plan.md)
- [Blog system (archived)](blog-system.plan.md)

## Project convention

**Do not cite external portfolios or reference sites in plans, comments, or docs.** Describe patterns by name in this repo only (e.g. card-module, site shell, `ui-lift`).
