# Publishing UI Polish (Phase 4.5)

> **Archived:** 2026-06-20 — Most items shipped in [ui-polish v1](ui-polish.plan.md). Remaining items (syntax highlighting) deferred to Phase 6 per [consolidation refactor](consolidation-refactor.plan.md).

Visual polish for `/blog`, `/notes`, and article pages — align publishing UI with the quality bar set by homepage project cards and case study headers (Phase 2–3).

## Problem

Phase 4 shipped functional MDX publishing, but the UI reads as **MVP-plain**:

- Index lists are flat dividers — no card surfaces, no tags, no CTA
- Index width (`max-w-reading`) feels narrow inside `SiteLayout`'s wide main column
- Article prose is mostly `text-muted` — low contrast, flat hierarchy
- Code blocks in notes look unstyled (no highlight, weak `pre` treatment)
- `PostHeader` meta order and spacing don't match `CaseStudyHeader` polish
- Blog vs Notes share identical index shell — no collection identity

## Scope

### In

- Redesign `PostCard` — surface card, tags, formatted date, ghost CTA (match project card language)
- Polish `CollectionIndexPage` — page eyebrow, wider index layout (`max-w-content`), post count
- Polish `PostHeader` — meta row (date · tags), spacing aligned with case study header
- Refine `prose-classes` — stronger heading/body contrast, list spacing, blockquote
- Code block UI — `rehype-pretty-code` + themed `pre`/`code` in `mdx-components`
- `ArticleLayout` back link — arrow affordance, hover accent (no layout restructure)
- Shared `formatPostDate` util (remove duplicate formatters)

### Out

- RSS, CMS, search, pagination
- Dynamic OG images (Phase 6)
- `/lab` (Phase 5)
- `readingTime` display (defer unless trivial after word-count helper exists)
- Cross-link Learning section (optional micro-task — only if time at end)
- Framer Motion page transitions
- Cover images per post (defer — no assets yet)

## Design references

- [Project brief](../ai/project-brief.md) — dark premium, spacing, accent sparingly, not flashy
- Homepage `ProjectCardItem` in `src/sections/Projects.tsx` — surface border, Badge, ghost Button
- `CaseStudyHeader` — eyebrow mono accent, title scale, meta row
- [Blog system (Phase 4)](../archive/2026-06/blog-system.plan.md) — routes/content unchanged

## UI direction

| Area | Current | Target |
|------|---------|--------|
| Index card | Border-bottom list item | `border border-border bg-surface` rounded card, hover border accent/30 |
| Index width | `max-w-reading` | `max-w-content` for list; article pages stay `max-w-reading` |
| Page header | Plain h1 + paragraph | Mono eyebrow (`Blog` / `Notes`) + h1 + description |
| Post meta | Date orphaned below description | Single meta row: `time` + tags (index and article) |
| Prose body | Mostly muted | Body `text-foreground/90`; headings `text-foreground`; keep links accent |
| Code | Plain pre | Pretty-code + `surface-elevated` block, mono font |
| Back link | Plain muted text | `← Label` with hover accent |

Avoid: gradients, heavy shadows, card images placeholders, animation libraries.

## Implementation order

Verify `npm run build` after each step.

### Step 1 — Shared utilities + prose

- [ ] `src/lib/publishing/format-post-date.ts` — single date formatter
- [ ] Refine `src/lib/publishing/prose-classes.ts` — contrast + spacing
- [ ] Update `PostHeader`, `PostCard` to use shared formatter

### Step 2 — Index page polish

- [ ] Redesign `PostCard` — surface card, tags, CTA (`Read →` / `View note →`)
- [ ] Update `CollectionIndexPage` — eyebrow prop, `max-w-content`, optional `count` label
- [ ] Pass collection-specific eyebrow from `(site)/blog/page.tsx` and `(site)/notes/page.tsx`

### Step 3 — Article header + layout

- [ ] Polish `PostHeader` — meta row layout, border treatment like case study
- [ ] Polish `ArticleLayout` — back link with `←` prefix, hover accent

### Step 4 — Code block styling

- [ ] Install `rehype-pretty-code` + `shiki` (or bundled theme)
- [ ] Add to `next.config.ts` `rehypePlugins` (string form for Turbopack)
- [ ] Style `pre`/`code` in `mdx-components.tsx` + minimal CSS in `globals.css` if needed
- [ ] Verify `react-server-components` note renders highlighted block

### Step 5 — Verify

- [ ] Visual check: `/blog`, `/notes`, both slug pages
- [ ] `npm run build` passes
- [ ] No regression on `/projects/[slug]` (ArticleLayout unchanged structurally)

## Files affected

### New

```
src/lib/publishing/format-post-date.ts
```

### Modified

```
src/components/publishing/PostCard.tsx
src/components/publishing/PostHeader.tsx
src/components/publishing/CollectionIndexPage.tsx
src/components/layout/ArticleLayout.tsx
src/lib/publishing/prose-classes.ts
src/mdx-components.tsx
src/app/globals.css
src/app/(site)/blog/page.tsx
src/app/(site)/notes/page.tsx
next.config.ts
package.json
```

### Untouched

```
src/content/blog/*
src/content/notes/*
src/lib/publishing/post-article-page.tsx
src/app/blog/[slug]/page.tsx
src/app/notes/[slug]/page.tsx
```

## Exit criteria

- [ ] Index pages use card-based list with surface borders and hover state
- [ ] Blog and Notes index have distinct mono eyebrows
- [ ] Article prose has clear heading vs body contrast
- [ ] Code blocks in notes are syntax-highlighted and themed
- [ ] Post headers and back links match site visual language
- [ ] `npm run build` passes

## Risks

| Risk | Mitigation |
|------|------------|
| `rehype-pretty-code` + Turbopack | String plugin name in config; verify dev + build |
| Shiki bundle size | Single dark theme only (`github-dark` or `one-dark-pro`) |
| Prose overrides fight typography plugin | Tune `prose-classes` incrementally; avoid duplicate custom MDX headings |

## Related

- [Implementation roadmap](implementation-roadmap.plan.md)
- [Blog system (Phase 4)](../archive/2026-06/blog-system.plan.md)
