# Case Study System (Phase 3)

> **Archived:** 2026-06-16 — Phase complete. Retained for historical reference.

Typed, section-driven case study pages at `/projects/[slug]` using the existing content registry, App Router, and SEO foundation.

## Shipped

- Registry-derived `ProjectSlug` (`keyof typeof caseStudies`)
- `CaseStudy` model with `sections[]`, required `seo` contract, single `description` field
- Four section types: `text`, `bullets`, `metrics`, `gallery`
- `CaseStudyHeader`, `CaseStudySectionRenderer` (exhaustive switch + `assertNever`)
- Full `page.tsx` rendering + per-project metadata + `Article` JSON-LD
- `validateCaseStudies()` build-time checks (SEO fields + image paths)
- Homepage project cards use real cover images
- Placeholder PNG assets under `public/images/projects/<slug>/`

## Key files

```
src/types/content.ts
src/content/projects/index.ts
src/content/projects/interview-frogde.ts
src/content/projects/pharmacy-management.ts
src/lib/content/validate-case-studies.ts
src/lib/content/case-study-metadata.ts
src/components/case-study/*
src/app/projects/[slug]/page.tsx
src/lib/seo/structured-data.ts
```

## Add a new case study

1. Create `src/content/projects/<slug>.ts`
2. Register in `src/content/projects/index.ts`
3. Add assets under `public/images/projects/<slug>/` (cover.png, hero.png)
4. Build validates SEO + image paths automatically

## Acceptance criteria

- [x] Both project routes render full case studies
- [x] SSG via `generateStaticParams()`
- [x] Project-specific metadata + JSON-LD
- [x] Exhaustive section renderer
- [x] Build validation for SEO/assets
- [x] `npm run build` passes

## Follow-up

- Replace placeholder PNGs with real project screenshots (WebP preferred)
- Add more section types only when a project needs them

## Related

- [Implementation roadmap](../../planning/implementation-roadmap.plan.md)
- [Project brief](../../ai/project-brief.md)
