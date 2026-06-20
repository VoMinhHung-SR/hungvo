import { cn } from "@/lib/cn";

import { cardBase, cardHover } from "@/lib/ui/card-classes";

export const featuredPanel = cn(
  "rounded-lg bg-surface/90 p-6 shadow-[var(--shadow-card)] ring-1 ring-border backdrop-blur-sm sm:p-8",
);

export const archiveCard = cn(
  cardBase,
  cardHover,
  "flex h-full flex-col gap-4 p-6",
);
