import { cn } from "@/lib/cn";

import { cardBase, cardHover } from "@/lib/ui/card-classes";

export const projectIndexRow = cn(
  "group grid gap-6 border-b border-border py-12 last:border-b-0",
  "lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,18rem)] lg:items-start lg:gap-8",
);

export const projectIndexRowReversed = cn(
  "lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)_4rem]",
);

/** First featured project — larger media column, no reverse. */
export const projectIndexRowEmphasized = cn(
  "group grid gap-6 border-b border-border py-14 last:border-b-0 sm:py-16",
  "lg:grid-cols-[4rem_minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-10",
);

export const projectMediaLink = cn(
  "block overflow-hidden rounded-[var(--radius-image)] ring-1 ring-border",
  "transition-[box-shadow,ring-color] duration-150",
  "group-hover:shadow-[var(--glow-accent)] group-hover:ring-accent/40",
);

export const projectMediaLinkDefault = "lg:max-w-[18rem]";
export const projectMediaLinkEmphasized = "lg:max-w-[26rem] w-full";

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

export const projectArchiveCard = cn(
  cardBase,
  cardHover,
  "group flex h-full w-full flex-col p-6 sm:p-7",
);

export const projectArchiveTech = cn(
  "mt-auto flex list-none flex-wrap gap-x-1.5 gap-y-1 pt-6 font-mono text-xs leading-relaxed text-muted",
);
