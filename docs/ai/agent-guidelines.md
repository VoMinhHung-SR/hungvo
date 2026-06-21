# Agent Guidelines

> Rules for AI agents working in this repository. Last updated: 2026-06-15.

## Required reading

Before creating or modifying documentation, read:

1. [workspace-rules.md](workspace-rules.md) — documentation governance
2. [project-brief.md](project-brief.md) — product requirements
3. [../architecture/decisions.md](../architecture/decisions.md) — architecture decisions

---

## Documentation policy (mandatory)

### Never create

- Markdown files at repository root (except `README.md`, `AGENTS.md`, `CLAUDE.md`)
- Markdown files inside `src/`, `public/`, or application directories
- Review or audit files in `docs/architecture/`
- Implementation reports in `docs/planning/` or `docs/ai/`
- Generic filenames: `notes.md`, `summary.md`, `review.md`, `temp.md`

### Always route to

| Document type | Location |
|---------------|----------|
| Active feature plan | `docs/planning/[feature-name].plan.md` |
| Permanent architecture doc | `docs/architecture/[topic].md` |
| AI workflow / prompt index | `docs/ai/` |
| Review, audit, retrospective, implementation summary | `docs/archive/YYYY-MM/[name].md` |
| Completed or retired plan | `docs/archive/YYYY-MM/[feature-name].plan.md` |

### Prefer update over create

Before creating a new file, check whether an existing document in the correct folder should be updated instead.

---

## Application code policy

- Do not modify `src/` unless explicitly asked to implement a feature.
- Do not change architecture without explicit approval.
- Follow ADRs in `docs/architecture/decisions.md`.
- Phase work requires approval before starting the next phase.

---

## Phase readiness

Phase 4.6 consolidation is complete. See [implementation roadmap](../planning/implementation-roadmap.plan.md) for Phase 5+.

Archived: [consolidation-refactor.plan.md](../archive/2026-06/consolidation-refactor.plan.md)

---

## Session workflow

1. Read the relevant plan in `docs/planning/` before implementing.
2. Implement only the approved scope.
3. On completion:
   - Update the plan checkboxes in `docs/planning/`
   - Write implementation summary to `docs/archive/YYYY-MM/`
   - Update permanent docs in `docs/architecture/` if system behavior changed
4. Do not leave session artifacts at repository root.

---

## Cursor-specific

- Prompt history index: [cursor-prompts.md](cursor-prompts.md)
- Next.js agent rules: root `AGENTS.md` (tool-managed, do not relocate)

---

## Archive month convention

Use `YYYY-MM` based on the date the document is archived (not created).

Current archive bucket: `docs/archive/2026-06/`
