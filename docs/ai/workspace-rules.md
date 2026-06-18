# Documentation Governance

> Repository-wide rules for all humans and AI agents. Last updated: 2026-06-15.

## Documentation root

```
docs/
├── planning/       # Active and future implementation plans
├── architecture/   # Permanent system documentation
├── ai/             # AI collaboration assets
└── archive/        # Historical and temporary documents
```

---

## Folder responsibilities

### `docs/planning/`

**Purpose:** Feature planning and implementation planning.

**Allowed content:**
- Active implementation plans
- Future work plans
- Cross-phase roadmaps

**Naming:** `[feature-name].plan.md`

**Examples:**
- `docs/planning/home-sections.plan.md`
- `docs/planning/case-studies.plan.md`
- `docs/archive/2026-06/blog-system.plan.md`

**Rules:**
- Planning artifacts only
- No completed plans (archive them)
- No reviews or retrospectives

---

### `docs/architecture/`

**Purpose:** Permanent architecture documentation.

**Naming:** `[topic].md`

**Examples:**
- `docs/architecture/decisions.md`
- `docs/architecture/theme-system.md`
- `docs/architecture/content-system.md`

**Rules:**
- Long-term documentation only
- No sprint artifacts
- No temporary reports
- No implementation reviews
- No audits or retrospectives

---

### `docs/ai/`

**Purpose:** AI collaboration assets.

**Examples:**
- `docs/ai/project-brief.md`
- `docs/ai/workspace-rules.md`
- `docs/ai/agent-guidelines.md`
- `docs/ai/cursor-prompts.md`

**Rules:**
- AI instructions and workflows only
- Project brief only
- No implementation reports (archive them)
- No architecture ADRs (use `docs/architecture/`)

---

### `docs/archive/`

**Purpose:** Historical and temporary documentation.

**Naming:** `docs/archive/YYYY-MM/[document-name].md`

**Examples:**
- `docs/archive/2026-06/phase-1-foundation.plan.md`
- `docs/archive/2026-06/foundation-review.md`

**Allowed content:**
- Completed reviews
- Retired plans
- Implementation reports and summaries
- Audits and retrospectives

---

## Repository rules

### 1. No documentation in repository root

Do not create `.md` files at the repository root except the allowed exceptions below.

### 2. Allowed root-level markdown (exceptions only)

| File | Purpose |
|------|---------|
| `README.md` | Repository entry point |
| `AGENTS.md` | Tool-specific agent rules (Next.js) |
| `CLAUDE.md` | Claude Code pointer to `AGENTS.md` |

### 3. All other markdown must live under `docs/`

Permitted locations:
- `docs/planning/`
- `docs/architecture/`
- `docs/ai/`
- `docs/archive/YYYY-MM/`

No `.md` files in `src/`, `public/`, or other application directories.

### 4. Naming conventions

| Type | Pattern | Destination |
|------|---------|-------------|
| Implementation plan | `[feature-name].plan.md` | `docs/planning/` |
| Architecture topic | `[topic].md` | `docs/architecture/` |
| Review / report / audit | `[name].md` | `docs/archive/YYYY-MM/` |
| Retired plan | `[feature-name].plan.md` | `docs/archive/YYYY-MM/` |

### 5. Document lifecycle

```
Create plan          → docs/planning/[feature].plan.md
Implement feature    → update plan checkboxes
Feature complete     → archive plan to docs/archive/YYYY-MM/
Write permanent docs → docs/architecture/[topic].md
AI session notes     → docs/ai/ (workflows only) or archive (reports)
```

### 6. Before creating any new document

1. Determine document type (plan, architecture, AI asset, or archive).
2. Check if an existing document should be updated instead.
3. Route to the correct folder using naming conventions.
4. Never create documentation in repository root or `src/`.

### 7. AI agent obligations

AI agents **must** follow this policy automatically:

- Read `docs/ai/agent-guidelines.md` before creating documentation.
- Never create `IMPLEMENTATION.md`, `NOTES.md`, or `REVIEW.md` at repository root.
- Route reviews and implementation summaries to `docs/archive/YYYY-MM/`.
- Route active plans to `docs/planning/[feature-name].plan.md`.
- Update existing architecture docs rather than creating duplicate review files in `docs/architecture/`.

---

## Quick routing guide

| I want to document… | Put it in… |
|---------------------|------------|
| Phase 2 hero section plan | `docs/planning/hero-section.plan.md` |
| How the theme system works | `docs/architecture/theme-system.md` |
| Cursor prompt templates | `docs/ai/cursor-prompts.md` |
| Phase 1 code review | `docs/archive/2026-06/foundation-review.md` |
| Completed feature plan | `docs/archive/YYYY-MM/[feature].plan.md` |

---

## Related documents

- [Agent guidelines](agent-guidelines.md) — AI-specific workflow rules
- [Project brief](project-brief.md) — product and design requirements
- [Architecture decisions](../architecture/decisions.md) — permanent ADRs
- [Implementation roadmap](../planning/implementation-roadmap.plan.md) — active cross-phase plan
