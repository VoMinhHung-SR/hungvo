# Consolidation & Cleanup Refactor (Phase 4.6)

> Active plan. Last updated: 2026-06-17.
>
> Follow-up to [Homepage layout refactor (Phase 4.5)](../archive/2026-06/homepage-layout-refactor.plan.md). No new features — align architecture, remove drift, unify shell.

## Why this plan exists

Phases 1–4.5 shipped fast and layered **two UI directions** that were never fully reconciled:

1. **Card-module pass (Phase 4.5 v1)** — `ContentCard`, `PageIntro`, `MetaRow`, `SectionLabel` across many surfaces
2. **Homepage layout pass (Phase 4.5 v2)** — top nav, full-width header, featured projects, experience tabs; homepage body sections moved away from cards

Nothing is broken (`npm run build` passes), but the codebase has **style drift**, **layout split across routes**, **stale docs**, and **config that does not match components**.

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

**No orphaned files** — every file under `src/components/`, `src/sections/`, `src/lib/ui/` is imported. Cleanup is **consolidation**, not bulk deletion.

#### Keep — homepage (current layout)

```
src/sections/*
src/components/layout/Header.tsx, Nav.tsx, SiteLayout.tsx
src/components/layout/SocialRail.tsx, EmailRail.tsx, Footer.tsx
src/components/experience/ExperienceTabs.tsx
src/components/projects/FeaturedProject.tsx
src/components/ui/SectionHeading.tsx, ArrowList.tsx, ProfileFrame.tsx
src/components/icons/SocialIcons.tsx
src/lib/ui/lift-shadow-classes.ts
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

#### Drift — needs refactor

| Item | Issue | Action |
|------|-------|--------|
| `ContributionGraph` | Only homepage `ContentCard`; double border (`ring-1` + `cardBase`) | Replace with `SurfacePanel` (minimal border/bg) |
| `FeaturedProject` | Inline `bg-surface/90 shadow ring` — bypasses `card-classes` | Extract `featuredPanel` in `project-classes.ts` |
| `ProjectArchiveCard` | Inline hover lift duplicates `cardHover` | Use shared `archiveCard` classes |
| `ProfileFrame` | Hardcoded `HV`; ignores `home.about.profileImage` | Wire image or remove unused config |
| `SectionLabel` | Accent subsection label; 2 usages on Learning | Keep or merge into `SectionHeading` `eyebrow` prop |
| `Button` `primary` / `ghost` | Zero usages | Remove or mark reserved |
| `.text-hero-glow` | Unused CSS utility | Remove from `globals.css` |
| `home.projects.viewCaseStudy` | Unused content key | Remove or wire to featured links |
| `home.about.profileImage` | Unused; asset missing | Implement or remove from content |

#### Stale plans (docs)

| File | Status |
|------|--------|
| `home-sections.plan.md` | Pre–layout-v2 (sidebar, 5 sections) → archive |
| `publishing-ui.plan.md` | Partially shipped in ui-polish v1 → archive |
| `implementation-roadmap.plan.md` | Phase 4.6 added ✅ |

---

## Design system decision (lock for refactor)

| Surface | Primitive set |
|---------|----------------|
| Homepage body sections | Open layout — no `ContentCard`, plain text + panels |
| Homepage graph | `SurfacePanel` — not card-module hover |
| Featured / archive projects | Overlap + grid — `project-classes.ts` |
| Blog / notes index + cards | `ContentCard` + `PageIntro` |
| Case study articles | `PageIntro` + `MetaRow` + `imageFrame` |
| Buttons (CTA, Resume) | `outline` + `ui-lift` |

---

## Implementation plan

Verify `npm run build` after each step.

### Step 1 — Unify site shell (P0)

**Goal:** Every public route shares header + rails + footer.

- [x] Move slug routes under `(site)`
- [x] Refactor `ArticleLayout` — back link below header; padding via `SiteLayout` container
- [x] Scroll-spy on article routes: no homepage section active when sections absent
- [x] Build verifies `/projects/*`, `/blog/[slug]` routes

**Files:** `src/app/(site)/**/layout.tsx`, `ArticleLayout.tsx`

### Step 2 — Extract shared surface utilities (P1)

- [x] Add `src/lib/ui/project-classes.ts` — `featuredPanel`, `archiveCard`
- [x] Add `surfacePanel` in `card-classes.ts`
- [x] Refactor `FeaturedProject`, `ProjectArchiveCard`, `ContributionGraph`
- [x] Use `imageFrame` on featured project images

**Files:** `src/lib/ui/*`, `src/components/projects/*`, `ContributionGraph.tsx`

### Step 3 — Profile & content cleanup (P1)

- [x] `ProfileFrame` — optional `src`; initials fallback on error/missing
- [ ] Add `public/images/profile.jpg` (initials shown until asset added)
- [x] Remove unused `viewCaseStudy` from `home.ts`
- [ ] Align experience bullets with real CV (content only)

### Step 4 — Prune dead CSS & Button API (P2)

- [ ] Remove `.text-hero-glow`
- [ ] Remove unused `Button` variants or mark reserved
- [ ] Document `ui-lift` tokens in `globals.css`
- [ ] Optional: merge lift helpers into one `interaction-classes` module

**Files:** `globals.css`, `Button.tsx`, `lib/ui/*`

### Step 5 — Publishing alignment (P2)

- [ ] `CollectionIndexPage` — optional `SectionHeading` + rule
- [ ] `PostCard` — padding check after shell change
- [ ] `ArticleLayout` + `BackLink` — `scroll-mt-nav` with sticky header
- [ ] Defer syntax highlighting to Phase 6

**Files:** `src/components/publishing/*`, `ArticleLayout.tsx`

### Step 6 — Case study touch-up (P2)

- [ ] `MetricsSection` — lighter cells vs full `ContentCard`
- [ ] `CaseStudyHeader` — `imageFrame` on mobile
- [ ] Replace placeholder screenshots when assets ready

**Files:** `src/components/case-study/*`

### Step 7 — Docs & roadmap

- [ ] Archive `home-sections.plan.md`, `publishing-ui.plan.md`
- [ ] Mark this plan complete; close Phase 4.6 on roadmap
- [ ] Update homepage-layout archive deferred items (resume ✅, profile ❌)

---

## Exit criteria

- [x] All public routes use `SiteLayout`
- [x] Homepage has zero `ContentCard` (graph uses `surfacePanel`)
- [x] Project cards use `project-classes` — no duplicated Tailwind strings
- [x] `ProfileFrame` wired to `profileImage` with initials fallback
- [x] No dead content keys (`viewCaseStudy` removed)
- [ ] Dead CSS removed; stale plans archived (P2 / Step 7)
- [x] `npm run build` passes
- [ ] Manual pass: `/`, `/blog`, `/blog/[slug]`, `/projects/[slug]` at 1280px + 390px

---

## Risks & decisions

| Risk | Mitigation |
|------|------------|
| Route moves break URLs | Same URLs; only `layout.tsx` nesting |
| Articles cramped with header | Normal flow on articles; full-height hero stays homepage-only |
| Over-abstracting | Max 2 new util files |

| Decision | Choice |
|----------|--------|
| Delete `ContentCard`? | **No** — keep for publishing |
| Delete `SectionLabel`? | **Maybe** — merge if only 2 usages |
| Article shell | **Unify** under `SiteLayout` |
| Profile photo | Asset provided **or** initials-only |

---

## Suggested order if time-boxed

1. Step 1 — shell unification
2. Step 7 — docs
3. Step 2 — style consolidation
4. Step 3 — content cleanup
5. Steps 4–6 as capacity allows

---

## Related

- [Implementation roadmap](implementation-roadmap.plan.md)
- [Homepage layout refactor (archived)](../archive/2026-06/homepage-layout-refactor.plan.md)
- [UI polish v1 (archived)](../archive/2026-06/ui-polish.plan.md)
- [Blog system (archived)](../archive/2026-06/blog-system.plan.md)

## Project convention

**Do not cite external portfolios or reference sites in plans, comments, or docs.** Describe patterns by name in this repo only (e.g. card-module, site shell, `ui-lift`).
