# Publishing System (Phase 4)

> Active plan. Last updated: 2026-06-17.
>
> **Revision:** Optimized after senior review — fixed layout IA, static MDX registry, shared article page logic, typography plugin. ~17 new files, ~9 modified (down from ~22 touch points in v1 plan).

Blog posts and technical notes as MDX-backed, statically generated article routes — reusing SEO and reading-layout patterns from Phase 3.

## Scope

- MDX pipeline for `src/content/blog/` and `src/content/notes/`
- Routes: `/blog`, `/blog/[slug]`, `/notes`, `/notes/[slug]`
- Index pages under `(site)` route group (full nav shell)
- Article pages with reading layout + back link (no side nav — same UX as case studies)
- Per-article metadata + `Article` JSON-LD
- Extend `sitemap.ts` for blog and notes URLs
- Enable `Blog` and `Notes` in `siteNav`

## Out of scope

- CMS or remote MDX fetching
- Comments, RSS, search, pagination
- Syntax highlighting (`rehype-pretty-code`) — defer until notes include multi-line code
- `/lab` route (Phase 5)
- Dynamic OG images (Phase 6)
- Replacing case study TS content with MDX
- Separate `PostList`, `MdxContent`, `sitemap-entries.ts`, `posts.ts` abstractions

## Design references

- [Project brief](../ai/project-brief.md) — dark theme, typography-first
- [Case study system](../archive/2026-06/case-study-system.plan.md) — SSG, SEO, article layout
- [Architecture decisions](../architecture/decisions.md) — ADR-001, ADR-002, ADR-008

## Content model

### Shared post contract

Extend `src/types/content.ts`:

```ts
export interface PostSeo {
  publishedAt: string;   // ISO 8601
  updatedAt: string;
  ogImage?: string;
  keywords?: string[];
}

export interface PostMeta extends ContentItemBase {
  seo: PostSeo;
  tags?: string[];
  draft?: boolean;
}

export type PostCollection = "blog" | "notes";

export type PostEntry = PostMeta & {
  Content: React.ComponentType;
};
```

**Blog** — longer articles. **Notes** — shorter technical snippets. Same shape; eyebrow label differs (`Blog` vs `Note`).

### MDX metadata + static registry (no dynamic import)

Each `.mdx` exports `meta`. Registry **static-imports** both `meta` and default `Content`:

```mdx
export const meta = {
  slug: "building-with-nextjs",
  title: "Building with Next.js",
  description: "Why I reach for the App Router.",
  seo: {
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    keywords: ["Next.js"],
  },
  tags: ["nextjs"],
};

# Building with Next.js

Body content…
```

```ts
// src/content/blog/index.ts
import Building, { meta as buildingMeta } from "./building-with-nextjs.mdx";

const posts = [
  { ...buildingMeta, Content: Building },
] as const satisfies readonly PostEntry[];

export const allBlogPosts = [...posts]
  .filter((p) => !p.draft)
  .sort((a, b) => b.seo.publishedAt.localeCompare(a.seo.publishedAt));

export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs() {
  return allBlogPosts.map((p) => p.slug);
}
```

**Why static import over `import(\`…/${slug}.mdx\`)`:** type-safe, no bundler path resolution risk, single source of truth (registry), import failure = build failure.

### Authoring flow (one step after file creation)

1. Create `src/content/<collection>/<slug>.mdx` with exported `meta`
2. Add static import to `src/content/<collection>/index.ts`

No frontmatter parser. No filesystem glob. Matches ADR-001 registry pattern.

### Starter content

| Collection | Slug | Purpose |
|------------|------|---------|
| blog | `building-with-nextjs` | Short intro post |
| notes | `react-server-components` | Short technical note |

## MDX infrastructure

### Dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx remark-gfm @tailwindcss/typography
```

### Config

`next.config.ts`:

- Wrap with `createMDX()` from `@next/mdx`
- `remarkPlugins: ['remark-gfm']` (string form for Turbopack compat)
- Do **not** add `md`/`mdx` to `pageExtensions` — content lives in `src/content/`, not as route files

`src/app/globals.css`:

- `@plugin "@tailwindcss/typography"`

### MDX components (minimal)

| File | Role |
|------|------|
| `src/mdx-components.tsx` | Required App Router convention; thin overrides only |

Override sparingly in `mdx-components.tsx`:

- `a` → themed internal/external link (reuse `InternalLink` / `ExternalLink` where possible)
- `img` → `next/image` when `width`/`height` provided; else native `<img>`
- `pre` → surface background + border (code blocks unstyled until Phase 6 highlight)

**Prose body** styled via `@tailwindcss/typography` on article container — not custom `h1`–`h6` map.

```tsx
// Article prose wrapper (inside slug page or layout)
<div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted prose-a:text-accent …">
  <Content />
</div>
```

Tune prose modifiers once in a shared constant (`src/lib/publishing/prose-classes.ts`) to avoid duplication between blog and notes.

## Routing & layouts

### Route tree (final — no ambiguity)

```
src/app/
├── (site)/
│   ├── layout.tsx              # SiteLayout (existing)
│   ├── page.tsx                # home (existing)
│   ├── blog/
│   │   └── page.tsx            # GET /blog — index with nav
│   └── notes/
│       └── page.tsx            # GET /notes — index with nav
├── blog/
│   └── [slug]/
│       ├── layout.tsx          # ArticleLayout backHref="/blog"
│       └── page.tsx            # GET /blog/[slug]
└── notes/
    └── [slug]/
        ├── layout.tsx          # ArticleLayout backHref="/notes"
        └── page.tsx            # GET /notes/[slug]
```

| Route | Layout | Nav visible |
|-------|--------|-------------|
| `/blog`, `/notes` | `SiteLayout` via `(site)` | Yes |
| `/blog/[slug]`, `/notes/[slug]` | `ArticleLayout` | No — back link only |

This matches ADR-002: article reading mode without homepage side nav; index pages remain navigable.

### Generalize `CaseStudyLayout` → `ArticleLayout`

Refactor existing `CaseStudyLayout` (do not add `PublishingLayout`):

```tsx
interface ArticleLayoutProps {
  children: React.ReactNode;
  backHref: string;
  backLabel?: string;  // default "Back"
}
```

- `src/app/projects/[slug]/layout.tsx` → `backHref="/#projects"` `backLabel="Back to work"`
- `src/app/blog/[slug]/layout.tsx` → `backHref="/blog"` `backLabel="Back to blog"`
- `src/app/notes/[slug]/layout.tsx` → `backHref="/notes"` `backLabel="Back to notes"`

Reading width stays `max-w-reading`. One layout component, three consumers.

### Shared slug page factory

Avoid duplicate `[slug]/page.tsx` logic. Add `src/lib/publishing/post-article-page.tsx`:

```ts
export function createPostArticlePage(config: {
  collection: PostCollection;
  eyebrow: string;
  getPostBySlug: (slug: string) => PostEntry | undefined;
  getAllSlugs: () => string[];
}) { /* returns page module exports: default, generateStaticParams, generateMetadata */ }
```

Blog and notes `page.tsx` become thin wrappers (~5 lines each) calling `createPostArticlePage`.

## UI components (minimal set)

| Component | Location | Notes |
|-----------|----------|-------|
| `ArticleLayout` | `src/components/layout/ArticleLayout.tsx` | Renamed from `CaseStudyLayout` |
| `PostHeader` | `src/components/publishing/PostHeader.tsx` | Eyebrow, title, description, date, tags |
| `PostCard` | `src/components/publishing/PostCard.tsx` | Index page card |
| `CollectionIndexPage` | `src/components/publishing/CollectionIndexPage.tsx` | Shared index shell: heading + card grid |

Index pages pass collection-specific title/description + posts array. **No** `PostList` — map inline inside `CollectionIndexPage`.

`PostHeader` is lighter than `CaseStudyHeader` (no hero image in v1).

## Data layer

Extend `src/lib/content.ts` (do **not** add `posts.ts`):

```ts
export { getBlogPostBySlug, getAllBlogSlugs, allBlogPosts } from "@/content/blog";
export { getNoteBySlug, getAllNoteSlugs, allNotes } from "@/content/notes";
```

Add `src/lib/content/post-metadata.ts`:

```ts
export function getPostMetadata(post: PostMeta, collection: PostCollection) { … }
```

## SEO

### Sitemap

Extend `src/app/sitemap.ts` directly (no `sitemap-entries.ts` until Phase 6):

- `/blog`, `/notes` — priority `0.7`, `changeFrequency: "weekly"`
- Articles — priority `0.6`, `changeFrequency: "monthly"`, `lastModified` from `seo.updatedAt`

### JSON-LD

Reuse `articleSchema()` on each slug page via shared factory.

## Navigation

1. `site.config.ts` — `enabled: true` for Blog and Notes in `siteNav`
2. `Nav.tsx` — add `usePathname()` for `kind: "route"` active state:

```ts
const isActive =
  item.kind === "route"
    ? pathname === item.href || pathname.startsWith(`${item.href}/`)
    : activeSection === item.sectionId;
```

Keep Home and Lab disabled.

## Validation

Single `src/lib/content/validate-posts.ts`:

```ts
export function validatePosts(collection: PostCollection, posts: readonly PostMeta[]) { … }
```

Checks:

- Required SEO fields (`publishedAt`, `updatedAt`)
- `slug` is non-empty, unique within collection
- `publishedAt` ≤ `updatedAt`
- `keywords` non-empty when provided

**Dropped** (redundant with static import): filesystem existence check, filename ↔ slug match.

Call once from `src/content/blog/index.ts` and `src/content/notes/index.ts` at module load.

## Implementation order (5 steps)

Verify `npm run build` after each step.

### Step 1 — MDX + typography toolchain

- [x] Install dependencies
- [x] Configure `next.config.ts`
- [x] Add `src/mdx-components.tsx` (thin overrides)
- [x] Enable `@tailwindcss/typography` in `globals.css`
- [x] Add `src/lib/publishing/prose-classes.ts`

### Step 2 — Types, registries, validation

- [ ] Extend `src/types/content.ts`
- [ ] `src/content/blog/index.ts` + sample MDX
- [ ] `src/content/notes/index.ts` + sample MDX
- [ ] `validate-posts.ts` + `post-metadata.ts`
- [ ] Extend `src/lib/content.ts`

### Step 3 — Layout + UI

- [ ] Refactor `CaseStudyLayout` → `ArticleLayout` with `backHref`; update projects layout
- [ ] `PostHeader`, `PostCard`, `CollectionIndexPage`
- [ ] `createPostArticlePage` factory

### Step 4 — Routes

- [ ] `(site)/blog/page.tsx`, `(site)/notes/page.tsx`
- [ ] `blog/[slug]/layout.tsx` + `page.tsx`
- [ ] `notes/[slug]/layout.tsx` + `page.tsx`

### Step 5 — Sitemap, nav, verify

- [ ] Extend `sitemap.ts`
- [ ] Enable Blog + Notes in `siteNav`
- [ ] Route active state in `Nav.tsx`
- [ ] Full exit criteria check

## Files affected

### New (~17)

```
src/mdx-components.tsx
src/lib/publishing/prose-classes.ts
src/lib/publishing/post-article-page.tsx
src/lib/content/post-metadata.ts
src/lib/content/validate-posts.ts
src/content/blog/index.ts
src/content/blog/building-with-nextjs.mdx
src/content/notes/index.ts
src/content/notes/react-server-components.mdx
src/components/publishing/PostHeader.tsx
src/components/publishing/PostCard.tsx
src/components/publishing/CollectionIndexPage.tsx
src/app/(site)/blog/page.tsx
src/app/(site)/notes/page.tsx
src/app/blog/[slug]/layout.tsx
src/app/blog/[slug]/page.tsx
src/app/notes/[slug]/layout.tsx
src/app/notes/[slug]/page.tsx
```

### Modified (~9)

```
next.config.ts
package.json
src/types/content.ts
src/lib/content.ts
src/app/sitemap.ts
src/content/site.config.ts
src/components/layout/Nav.tsx
src/components/layout/CaseStudyLayout.tsx  → rename/refactor to ArticleLayout.tsx
src/app/projects/[slug]/layout.tsx
src/app/globals.css
```

### Untouched

```
src/content/projects/*
src/components/case-study/*
src/sections/*
src/app/api/contributions/*
```

## Exit criteria

- [ ] MDX compiles at build time via static registry imports
- [ ] `/blog` and `/notes` render index with `SiteLayout` nav
- [ ] `/blog/[slug]` and `/notes/[slug]` render MDX with themed prose
- [ ] SSG via `generateStaticParams()`; `dynamicParams = false`; unknown slugs 404
- [ ] Per-article metadata + `Article` JSON-LD
- [ ] Sitemap includes index + article URLs (non-draft only)
- [ ] Blog and Notes in nav with route active state
- [ ] `npm run build` passes

## Risks & mitigations

| Risk | Mitigation |
|------|------------|
| Typography plugin + Tailwind v4 setup | Follow `@plugin` syntax; verify prose renders in dev + build |
| `ArticleLayout` rename breaks projects | Update `projects/[slug]/layout.tsx` in same PR as refactor |
| MDX + Turbopack plugin quirks | String plugin names in `next.config.ts`; verify `next dev` and `npm run build` |
| Blog/notes page drift | Shared `createPostArticlePage` + `CollectionIndexPage` |
| Registry forgotten on new post | Document 2-step flow; `validatePosts` catches SEO gaps at build |

## Follow-up (post–Phase 4)

- RSS (`/feed.xml`) when 5+ posts
- `rehype-pretty-code` for syntax highlighting
- Cross-link latest post from Learning section
- `readingTime` derived at build time
- `sitemap-entries.ts` if URL builders grow in Phase 6

## Related

- [Implementation roadmap](implementation-roadmap.plan.md)
- [Case study system (Phase 3)](../archive/2026-06/case-study-system.plan.md)
- [Next.js MDX guide](https://nextjs.org/docs/app/guides/mdx)
