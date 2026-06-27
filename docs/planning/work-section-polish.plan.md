# Work Section Polish (Phase 4.7)

> **Status:** In progress — 2026-06-22  
> **Goal:** Custom Work section identity for Hung Vo - Unified engineering-style project cards aligned with the site’s cyan design system.

## Design direction

**Hung Vo “engineering cards”** — equal-weight 2-column grid, left accent border on hover (matches Experience tabs), dev-grid overlay on covers, grayscale-to-color reveal (matches ProfileFrame), tech pills (matches metric cells).

### Tools & primitives used

| Tool | Role |
|------|------|
| **Tailwind CSS v4** | Layout, tokens (`--accent`, `--surface`, shadows) |
| **Lucide React** | `ArrowRight` on case-study link |
| **CSS grid overlay** | Accent grid on cover — dev-tool aesthetic |
| **Existing `cardHover` + `ui-lift` patterns** | Consistent interaction language |

No new npm dependencies. Framer Motion deferred to Phase 5.

### Layout

```
┌─────────────────────────┐  ┌─────────────────────────┐
│ [cover + grid overlay]  │  │ [cover + grid overlay]  │
│ 2026 · Full-stack Dev   │  │ 2025–26 · Full-stack    │
│ Interview Frogde        │  │ Pharmacy Management     │
│ description...          │  │ description...          │
│ [React] [Next.js] ...   │  │ [React] [Django] ...    │
│ Case Study →    🔗      │  │ Case Study →    🔗      │
└─────────────────────────┘  └─────────────────────────┘
  border-l accent on hover
```

**Removed:** alternating overlap layout, featured vs archive split.

---

## Shipped

- [x] `ProjectCard` — unified card component
- [x] `ProjectCover` — grayscale hover, grid overlay, gradient fade
- [x] `TechPills` — bordered mono tags
- [x] `Projects` section — 2-col grid, subtitle intro
- [x] `homeContent.projects` — `subtitle`, `caseStudyLabel`
- [x] Deleted `FeaturedProject.tsx`

## Remaining

### Assets

Replace solid-color `cover.png` placeholders with real UI screenshots under `public/images/projects/<slug>/`.

### Optional polish

- [ ] `liveUrl` on projects when demos are deployed
- [ ] Framer Motion stagger on scroll (Phase 5)
- [ ] Archive re-introduce only when 4+ projects (e.g. compact list below grid)

---

## Exit criteria

- [x] All projects in equal-weight grid (no orphan archive card)
- [x] Custom visual identity (grid overlay, accent border, tech pills)
- [x] Case Study link with visible label
- [ ] Real project screenshots
- [ ] `npm run build` passes
- [ ] Mobile QA at 390px

## Related

- [Implementation roadmap](implementation-roadmap.plan.md)
