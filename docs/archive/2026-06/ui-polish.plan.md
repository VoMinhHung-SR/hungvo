# UI Polish (Phase 4.5)

> **Archived:** 2026-06-17 — Phase complete. Retained for historical reference.

Site-wide visual upgrade: one cohesive design system across home, shell, case studies, and publishing.

## Shipped

### Design tokens (`globals.css`)
- Depth tokens: `--radius-card`, `--glow-accent`, `--shadow-card`, `--shadow-card-hover`, `--transition-ui`
- `.text-hero-glow` utility (removed in Phase 4.6)
- Palette locked: `#0a0a0a` background, `#38bdf8` accent

### Core primitives
- `ContentCard`, `SectionLabel`, `PageIntro`, `MetaRow`, `BackLink`
- `card-classes.ts` helpers (`cardBase`, `cardHover`, `imageFrame`)
- `SectionHeading` optional `index` prop (homepage sections 01–04)
- `Button` hover states

### Shell
- `Header` — name + role subtitle
- `SiteLayout` — sticky aside with `bg-surface/40` + backdrop blur
- `Nav` — transition polish
- `Footer` — GitHub · LinkedIn · Email + copyright
- `ArticleLayout` — `BackLink`

### Homepage
- `Hero` — CTA glow hover + name treatment
- `Projects` — `ContentCard` tiles with image frame + hover overlay
- `About` — body in `ContentCard`
- `Learning` — `SectionLabel`, focus items as `ContentCard`, graph in `ContentCard`
- `Contact` — labeled link rows in `ContentCard`

### Publishing
- `PostCard` — `ContentCard hover`, tags (max 3), `MetaRow` date
- `PostHeader` — `PageIntro` + `MetaRow`
- `CollectionIndexPage` — `PageIntro`
- `format-post-date.ts` shared util

### Case studies + prose
- `CaseStudyHeader` — `PageIntro`, `MetaRow`, `imageFrame` hero
- `MetricsSection` — mini `ContentCard` per metric
- `GallerySection` — `imageFrame`
- `prose-classes.ts` spacing refinements
- `mdx-components.tsx` — `pre` uses `surface-elevated`

### Bug fixes (during phase)
- `useActiveSection` scroll-spy fix for Contact nav highlight
- Blog/Notes nav hidden (`enabled: false`) until content ready

## Exit criteria (all met)

- [x] Palette unchanged: dark base + `#38bdf8` accent
- [x] `ContentCard` on projects, learning focus, graph wrapper, contact, post list
- [x] Hero + projects visibly improved (P0)
- [x] Aside sticky with surface treatment on desktop
- [x] `BackLink` on article routes
- [x] Footer social text links
- [x] No reference site content copied
- [x] Transitions ≤200ms; no new animation dependencies
- [x] `npm run build` passes

## Deferred (P2)

- `rehype-pretty-code` syntax highlighting
- Section index on all sections (homepage only shipped)
- Icon row in footer
- Homepage → latest note cross-link

## Related

- [Implementation roadmap](../../planning/implementation-roadmap.plan.md)
- [Blog system (Phase 4)](blog-system.plan.md)
