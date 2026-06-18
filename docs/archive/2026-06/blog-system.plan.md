# Publishing System (Phase 4)

> **Archived:** 2026-06-17 — Phase complete. Retained for historical reference.

MDX-backed blog and technical notes with static registries, shared article page factory, and SEO integration.

## Shipped

- MDX toolchain: `@next/mdx`, `remark-gfm`, `@tailwindcss/typography`, `src/mdx-components.tsx`
- Static registries: `src/content/blog/`, `src/content/notes/` with exported `meta` per file
- Types: `PostMeta`, `PostSeo`, `PostEntry`, `PostCollection`
- `validatePosts()` build-time checks (SEO fields, slug uniqueness, date order)
- `ArticleLayout` (generalized from `CaseStudyLayout`) with `backHref`
- Publishing UI: `PostHeader`, `PostCard`, `CollectionIndexPage`
- `createPostArticlePage()` shared factory for slug routes
- Routes: `/blog`, `/notes` (index under `(site)`), `/blog/[slug]`, `/notes/[slug]`
- Per-article metadata + `Article` JSON-LD
- Sitemap entries for blog/notes index + articles
- `Blog` and `Notes` enabled in `siteNav` with route active state

## Sample content

| Collection | Slug |
|------------|------|
| blog | `building-with-nextjs` |
| notes | `react-server-components` |

## Key files

```
src/mdx-components.tsx
src/types/content.ts
src/types/mdx.d.ts
src/content/blog/index.ts
src/content/blog/building-with-nextjs.mdx
src/content/notes/index.ts
src/content/notes/react-server-components.mdx
src/lib/content/validate-posts.ts
src/lib/content/post-metadata.ts
src/lib/publishing/prose-classes.ts
src/lib/publishing/post-article-page.tsx
src/components/layout/ArticleLayout.tsx
src/components/publishing/*
src/app/(site)/blog/page.tsx
src/app/(site)/notes/page.tsx
src/app/blog/[slug]/*
src/app/notes/[slug]/*
src/app/sitemap.ts
src/content/site.config.ts
src/components/layout/Nav.tsx
next.config.ts
```

## Add new content

### Blog post

1. Create `src/content/blog/<slug>.mdx` with exported `meta`
2. Add static import to `src/content/blog/index.ts`

### Technical note

Same flow under `src/content/notes/`.

## Acceptance criteria

- [x] MDX compiles at build time via static registry imports
- [x] `/blog` and `/notes` render index with `SiteLayout` nav
- [x] `/blog/[slug]` and `/notes/[slug]` render MDX with themed prose
- [x] SSG via `generateStaticParams()`; `dynamicParams = false`; unknown slugs 404
- [x] Per-article metadata + `Article` JSON-LD
- [x] Sitemap includes index + article URLs (non-draft only)
- [x] Blog and Notes in nav with route active state
- [x] `npm run build` passes

## Follow-up

- RSS (`/feed.xml`) when 5+ posts
- `rehype-pretty-code` for syntax highlighting
- Cross-link latest post from Learning section
- `readingTime` derived at build time

## Related

- [Implementation roadmap](../../planning/implementation-roadmap.plan.md)
- [Case study system](case-study-system.plan.md)
