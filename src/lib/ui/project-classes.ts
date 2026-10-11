import { cn } from "@/lib/cn";

import { cardBase, cardHover } from "@/lib/ui/card-classes";

/** Editorial index row: copy leads, media supports (~55/45). */
export const projectIndexRow = cn(
  "group grid gap-5 border-b border-border py-10 last:border-b-0",
  "lg:grid-cols-[2.5rem_minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-start lg:gap-6",
);

export const projectIndexRowReversed = cn(
  "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_2.5rem]",
);

/** Featured row — slightly more media weight, same rhythm as siblings. */
export const projectIndexRowEmphasized = cn(
  "group grid gap-5 border-b border-border py-11 last:border-b-0 sm:py-12",
  "lg:grid-cols-[2.5rem_minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-7",
);

export const projectMediaLink = cn(
  // self-start: keep frame at media aspect — avoid grid stretch leaving empty band
  "block w-full self-start overflow-hidden rounded-[var(--radius-image)] ring-1 ring-border/70",
  "transition-[box-shadow,ring-color] duration-150",
  "group-hover:ring-accent/35",
);

export const projectMediaLinkDefault = "w-full";
export const projectMediaLinkEmphasized = "w-full";

export const projectCard = cn(
  cardBase,
  cardHover,
  "group flex flex-col overflow-hidden border-l-2 border-l-transparent p-0 hover:border-l-accent",
);

export const projectCardBody = "flex flex-1 flex-col gap-4 p-5 sm:p-6";

export const techPill = cn(
  "rounded border border-border/60 bg-surface-elevated/80 px-2 py-0.5 font-mono text-[11px] text-muted",
);

export const projectCoverFrame = cn(
  "relative overflow-hidden bg-surface-elevated",
);

export const projectArchiveCard = cn(
  cardBase,
  cardHover,
  "group flex h-full w-full flex-col p-6 sm:p-7",
);

export const projectArchiveTech = cn(
  "mt-auto flex list-none flex-wrap gap-x-1.5 gap-y-1 pt-6 font-mono text-xs leading-relaxed text-muted",
);
