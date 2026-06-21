# Homepage Layout Refactor (Phase 4.5 v2)

> **Archived:** 2026-06-17 — Phase complete. Supersedes card-module UI polish v1.

Restructured portfolio IA and homepage: top navigation, marketing-style sections, featured project layout. Kept cyan palette `#38bdf8` on `#0a0a0a`.

## Shipped

### Shell
- Top sticky header with numbered nav (`01.`–`05.`)
- Fixed `SocialRail` (GitHub, LinkedIn) + `EmailRail` on desktop
- Minimal centered footer
- Removed left-sidebar layout

### Homepage
- **Hero** — large muted tagline + outline CTA
- **About** — 2-column text + skills `ArrowList` + `ProfileFrame` placeholder
- **Experience** — tab panel (`ExperienceTabs`)
- **Projects** — `FeaturedProject` alternating overlap layout + `ProjectArchiveCard` grid
- **Learning** — focus list + contribution graph
- **Contact** — centered eyebrow + “Say Hello” CTA

### Primitives
- `SectionHeading` + horizontal rule
- `Button` `outline` variant + `ui-lift`
- `ProfileFrame`, `ArrowList`, `SocialIcons`

### Content
- `ExperienceEntry` type + experience data in `home.ts`
- `getArchiveProjects()` for archive grid
- `site.config` homeNav: About, Experience, Work, Learning, Contact

### Unchanged
- Blog/notes/case study still use `ContentCard`, `PageIntro`, `MetaRow`

## Exit criteria (met)

- [x] Top nav + side rails on desktop
- [x] Homepage body sections without `ContentCard`
- [x] Featured projects alternate layout
- [x] Experience tabs
- [x] Contact centered CTA
- [x] `npm run build` passes

## Deferred (addressed in Phase 4.6)

- Profile photo at `/images/profile.jpg` — `ProfileFrame` wired; initials fallback until asset added
- Mobile visual QA at 390px
- Shell on article slug routes — ✅ unified under `SiteLayout`
- Header Resume button — ✅ shipped

## Related

- [Implementation roadmap](../../planning/implementation-roadmap.plan.md)
- [UI polish v1](ui-polish.plan.md)
- [Consolidation refactor](consolidation-refactor.plan.md)
