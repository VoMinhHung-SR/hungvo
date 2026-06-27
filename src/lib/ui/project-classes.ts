import { cn } from "@/lib/cn";

import { cardBase, cardHover } from "@/lib/ui/card-classes";

export const projectIndexRow = cn(
  "group grid gap-6 border-b border-border py-12 last:border-b-0",
  "lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,18rem)] lg:items-start lg:gap-8",
);

export const projectIndexRowReversed = cn(
  "lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)_4rem]",
);

export const projectCard = cn(
  cardBase,
  cardHover,
  "group flex flex-col overflow-hidden border-l-2 border-l-transparent p-0 hover:border-l-accent",
);

export const projectCardBody = "flex flex-1 flex-col gap-4 p-5 sm:p-6";

export const techPill = cn(
  "rounded border border-border/60 bg-surface-elevated/80 px-2.5 py-1 font-mono text-xs text-muted",
);

export const projectCoverFrame = cn(
  "relative overflow-hidden bg-surface-elevated",
);

export const projectCoverGrid = cn(
  "pointer-events-none absolute inset-0 opacity-[0.18]",
  "bg-[linear-gradient(color-mix(in_srgb,var(--accent)_35%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--accent)_35%,transparent)_1px,transparent_1px)]",
  "bg-size-[24px_24px]",
  "transition-opacity duration-300 group-hover:opacity-[0.08]",
);

export const projectArchiveCard = cn(
  cardBase,
  cardHover,
  "group flex h-full w-full flex-col p-6 sm:p-7",
);

export const projectArchiveTech = cn(
  "mt-auto flex list-none flex-wrap gap-x-1.5 gap-y-1 pt-6 font-mono text-xs leading-relaxed text-muted",
);
