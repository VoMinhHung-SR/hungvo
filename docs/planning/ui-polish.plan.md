# UI Polish (Phase 4.5)

> Active plan. Last updated: 2026-06-17.
>
> **Revision v2** — Reviewed and rewritten for implementation clarity. Supersedes the initial Phase 4.5 draft.

Site-wide visual upgrade: one cohesive design system across home, shell, case studies, and publishing. Structural ideas from [Brittany Chiang v4](https://v4.brittanychiang.com/) and [Victor Eke](https://victoreke.com/) — **original execution only** (no copied content or layouts).

## North star

> A dark, cyan-accent developer portfolio that feels **intentional and premium** on first scroll — not a wireframe with color.

**Three pillars:**

1. **Depth** — surfaces, borders, hover, subtle glow (not flat black + text)
2. **Consistency** — one card language, one eyebrow/meta pattern, every route
3. **Restraint** — accent sparingly; CSS transitions only (no motion library in this phase)

**Theme lock:** Keep `globals.css` palette — `#0a0a0a` background, `#38bdf8` accent. Add depth tokens only; **no** brief navy/teal swap.

---

## Reference → Hung Vo translation

### Borrow (structure & UX)

| Source | Take | Hung Vo application |
|--------|------|---------------------|
| Brittany | Sticky side nav + scroll spy | Already have — polish aside surface + header |
| Brittany | Type ladder in hero | Keep; add CTA depth + optional name glow |
| Brittany | Project tile hover | `ProjectCard` shell with image frame + overlay |
| Brittany | Article reading mode | `BackLink` + unchanged reading width |
| Victor | Bordered content modules | `ContentCard` for panels (graph, contact, posts) |
| Victor | Accent block labels | `SectionLabel` before subsections (Learning, etc.) |
| Victor | Meta on list rows | `MetaRow` on posts + case study headers |
| Victor | Grouped footer/contact | `ContactPanel` + expanded `Footer` |

### Reject

- Reference biographies, timelines, project copy
- Victor's large social icon grid
- Page-load animations, parallax, cursor effects
- Cloning grid ratios or exact component shapes

---

## Gap audit (current build)

| Surface | Score | Main issue | Priority |
|---------|-------|------------|----------|
| Side nav + header | 7/10 | Aside blends into void; name block thin | P0 |
| Hero | 6/10 | CTA flat; wasted horizontal space on XL | P0 |
| About | 5/10 | No visual container | P1 |
| Projects | 5/10 | Placeholder images + no hover system | P0 |
| Learning | 6/10 | Focus tiles ≠ graph panel styling | P1 |
| Contact + footer | 4/10 | Loose links; footer too minimal | P1 |
| Blog / Notes index | 4/10 | Divider list, not cards | P1 |
| Case study / MDX | 6/10 | Headers/prose below home polish | P1 |

**Root cause:** Phase 1–4 shipped **architecture without a shared surface system**. Phase 4.5 introduces that system once, applies everywhere.

---

## Design system spec

### Tokens (`globals.css`)

**Locked (do not change hue):**

```css
--background: #0a0a0a;
--surface: #141414;
--surface-elevated: #1c1c1c;
--foreground: #ededed;
--muted: #888888;
--accent: #38bdf8;
--border: #262626;
```

**Add:**

```css
--radius-card: 0.5rem;
--radius-image: 0.5rem;
--glow-accent: 0 0 28px color-mix(in srgb, var(--accent) 16%, transparent);
--shadow-card: 0 12px 40px rgb(0 0 0 / 0.4);
--shadow-card-hover: 0 16px 48px rgb(0 0 0 / 0.5);
--transition-ui: 150ms ease;
```

Map to Tailwind via `@theme inline` where useful (`--radius-lg: var(--radius-card)`).

### Typography roles

| Role | Classes | Usage |
|------|---------|-------|
| Eyebrow | `font-mono text-sm text-accent` | Hero greeting, section labels, article type |
| Display | `text-hero font-bold tracking-tight` | Hero name only |
| Section title | `text-section font-semibold tracking-tight` | `SectionHeading`, page titles |
| Subsection | `text-2xl font-semibold` | Case study section titles |
| Body | `text-muted leading-relaxed` | Paragraphs |
| Meta | `font-mono text-xs text-muted` | Dates, index numbers |

### Section index (optional, Brittany-inspired)

`SectionHeading` gains optional `index?: string` → renders `01.` in mono muted before title. Use on homepage sections only (not article H1).

### Shared components (new)

#### `ContentCard`

```tsx
// src/components/ui/ContentCard.tsx
interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean; // enables border-accent + shadow on hover
  as?: "div" | "article" | "section";
}
```

Base: `rounded-lg border border-border bg-surface p-4 sm:p-5`

#### `SectionLabel`

```tsx
// src/components/ui/SectionLabel.tsx
// Victor-style accent label above a block
<p className="mb-4 font-mono text-sm text-accent">{children}</p>
```

#### `PageIntro`

```tsx
interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode; // MetaRow slot
}
```

#### `MetaRow`

```tsx
interface MetaRowProps {
  items: { label?: string; value: React.ReactNode }[];
  className?: string;
}
// Horizontal flex wrap, mono xs, dot separators
```

#### `BackLink`

```tsx
interface BackLinkProps { href: string; label: string }
// font-mono text-sm text-muted hover:text-accent
// "← {label}" with focus ring
```

#### `cardClasses` helper

```ts
// src/lib/ui/card-classes.ts
export const cardBase = "...";
export const cardHover = "...";
export const imageFrame = "...";
```

### Interaction guardrails

| Allowed | Not allowed |
|---------|-------------|
| `transition-colors`, `transition-shadow`, `transition-transform` ≤200ms | Framer Motion page transitions |
| `hover:-translate-y-0.5` on cards | Scroll-jacking |
| `group-hover` image overlay | Auto-playing animations |
| Focus rings (existing) | Custom cursor |

---

## Surface-by-surface spec

### P0 — Highest visual impact

#### `SiteLayout` + `Header` + `Nav`

- Aside: `lg:sticky lg:top-0 lg:h-screen lg:bg-surface/40 lg:backdrop-blur-sm lg:border-border`
- Header: name `text-base font-semibold`; subtitle `text-xs text-muted` from `siteConfig.author.role`
- Nav: inactive `text-muted`, active `text-accent` + extended line (keep current mechanic)

#### `Hero`

- Wrap CTA area: primary button gets `hover:bg-accent/10 hover:border-accent/60 hover:shadow-[var(--glow-accent)]`
- Optional: `text-shadow` or pseudo glow on name via CSS only — very subtle
- Keep full-height centering; no layout restructure

#### `Projects` (`ProjectCardItem`)

- Entire card = `ContentCard hover`
- Image: `rounded-[var(--radius-image)]` + `ring-1 ring-border`
- Hover: `group` → image `brightness-90` + gradient overlay `from-background/80 to-transparent`
- Title: `group-hover:text-accent transition-colors`
- CTA: ghost button underline on hover

### P1 — Consistency pass

#### `About`

- Body in `ContentCard` **or** left border `border-l-2 border-accent/40 pl-6` (pick one in impl — card preferred for Victor alignment)

#### `Learning`

- `SectionLabel` for "Current Focus" (replace raw `h3`)
- Focus items → `ContentCard` compact (`p-4`)
- Contribution graph wrapper → `ContentCard` with `p-4 sm:p-6`

#### `Contact`

- Links in `ContentCard` vertical stack; each row: label mono muted + link
- Keep 3 links only (email, GitHub, LinkedIn)

#### `Footer`

```
┌─────────────────────────────────────┐
│  GitHub · LinkedIn · Email          │  (muted, hover accent)
│  © 2026 Hung Vo                     │
└─────────────────────────────────────┘
```

#### `SectionHeading`

- Optional `index` prop for homepage

#### Publishing

- `CollectionIndexPage`: `PageIntro` + `PostCard` wrapped in `ContentCard hover`
- `PostCard`: show tags (max 3), meta date mono, collection not needed (route implies it)
- `PostHeader`: align with `PageIntro` + `MetaRow`

#### Case studies

- `CaseStudyHeader`: `MetaRow` for role + timeline; hero image uses `imageFrame`
- `MetricsSection`: each metric in mini `ContentCard`
- Prose: refine `proseClasses` spacing; `pre` uses `surface-elevated` fill

### P2 — Defer if time-boxed

- `rehype-pretty-code` syntax highlighting
- Section index numbers on all sections
- Icon row in footer (text links sufficient for v1)
- Homepage → latest note cross-link

---

## Implementation plan

Verify `npm run build` after each step. Visual check at `localhost:3000` for `/`, one project, `/blog`, `/notes`.

### Step 1 — Foundation tokens

- [ ] `globals.css`: depth tokens + `@theme` mapping
- [ ] `src/lib/ui/card-classes.ts`
- [ ] Contribution graph colors: smoke-test after token add (should be unchanged)

**Files:** `globals.css`

### Step 2 — Core primitives

- [ ] `ContentCard.tsx`
- [ ] `SectionLabel.tsx`
- [ ] `PageIntro.tsx`
- [ ] `MetaRow.tsx`
- [ ] `BackLink.tsx`
- [ ] `Button.tsx`: primary/ghost hover per spec
- [ ] `SectionHeading.tsx`: optional `index` prop

**Files:** `src/components/ui/*`, `src/lib/ui/card-classes.ts`

### Step 3 — Shell (P0)

- [ ] `Header.tsx` — name + role
- [ ] `Nav.tsx` — contrast pass (no structural change)
- [ ] `SiteLayout.tsx` — sticky aside surface
- [ ] `Footer.tsx` — link row + copyright
- [ ] `ArticleLayout.tsx` — `BackLink`

**Files:** `src/components/layout/*`

### Step 4 — Homepage P0

- [ ] `Hero.tsx` — CTA hover + subtle name treatment
- [ ] `Projects.tsx` — `ContentCard` project tile system

**Files:** `src/sections/Hero.tsx`, `src/sections/Projects.tsx`

### Step 5 — Homepage P1 + publishing

- [ ] `About.tsx`, `Learning.tsx`, `Contact.tsx`
- [ ] `PostCard.tsx`, `PostHeader.tsx`, `CollectionIndexPage.tsx`
- [ ] `ContributionGraph.tsx` outer wrapper if not handled in Learning

**Files:** `src/sections/*`, `src/components/publishing/*`, `src/components/learning/*`

### Step 6 — Articles + prose

- [ ] `CaseStudyHeader.tsx`, metric/gallery section polish
- [ ] `prose-classes.ts`, `mdx-components.tsx` (`pre` block)

**Files:** `src/components/case-study/*`, `src/lib/publishing/*`, `src/mdx-components.tsx`

### Step 7 — QA & docs

- [ ] Desktop 1280px + mobile 390px pass all routes
- [ ] Mark exit criteria below
- [ ] Archive note in roadmap when complete

---

## Files touched (complete list)

```
src/app/globals.css
src/lib/ui/card-classes.ts
src/components/ui/ContentCard.tsx      (new)
src/components/ui/SectionLabel.tsx       (new)
src/components/ui/PageIntro.tsx          (new)
src/components/ui/MetaRow.tsx            (new)
src/components/ui/BackLink.tsx           (new)
src/components/ui/Button.tsx
src/components/ui/SectionHeading.tsx
src/components/layout/Header.tsx
src/components/layout/Nav.tsx
src/components/layout/Footer.tsx
src/components/layout/SiteLayout.tsx
src/components/layout/ArticleLayout.tsx
src/sections/Hero.tsx
src/sections/About.tsx
src/sections/Projects.tsx
src/sections/Learning.tsx
src/sections/Contact.tsx
src/components/publishing/*
src/components/case-study/CaseStudyHeader.tsx
src/components/case-study/sections/MetricsSection.tsx
src/components/learning/ContributionGraph.tsx   (wrapper only)
src/lib/publishing/prose-classes.ts
src/mdx-components.tsx
```

**Untouched:** content files, routes, SEO, data layer, contribution API logic.

---

## Exit criteria

- [ ] Palette unchanged: dark base + `#38bdf8` accent
- [ ] `ContentCard` used on: projects, learning focus, graph wrapper, contact, post list
- [ ] Hero + projects visibly improved on first impression (P0 done)
- [ ] Aside sticky with surface treatment on desktop
- [ ] `BackLink` on all article routes (projects, blog, notes)
- [ ] Footer includes social text links
- [ ] No reference site content copied
- [ ] Transitions ≤200ms; no new animation dependencies
- [ ] `npm run build` passes
- [ ] Mobile: nav usable, cards stack, no horizontal overflow

---

## Risks & decisions

| Risk | Mitigation |
|------|------------|
| Clone aesthetic | No experience timeline; different content width; original card radius/shadow |
| Sticky aside + mobile | Sticky only `lg:`; mobile stays document flow |
| Over-card UI | Plain prose in About body OK inside one card — don't nest cards |
| Placeholder images | Frame + gradient hover until real screenshots |
| Scope creep | P2 explicitly deferred; ship after Step 5 if time-limited |

| Decision | Choice |
|----------|--------|
| Palette | **Keep current cyan theme** |
| Motion | CSS only |
| Section numbers | Optional on homepage via `SectionHeading.index` |
| Syntax highlight | P2 / Phase 6 |

---

## What changed in v2 (review notes)

| v1 issue | v2 fix |
|----------|--------|
| Vague "polish aside" | Concrete `lg:sticky lg:h-screen lg:bg-surface/40` spec |
| Components listed without API | Props + class contracts for each primitive |
| Flat priority | P0 / P1 / P2 tiers |
| No interaction rules | Guardrail table |
| Steps merged homepage | Split P0 (Hero+Projects) vs P1 sections |
| Missing file manifest | Complete touch list + explicit untouched areas |
| Brief palette conflict | Locked to current `globals.css` |

---

## Related

- [Implementation roadmap](implementation-roadmap.plan.md)
- [Project brief](../ai/project-brief.md)
- [Blog system (Phase 4)](../archive/2026-06/blog-system.plan.md)
