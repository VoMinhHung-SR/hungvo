import { cn } from "@/lib/cn";

export const cardBase = cn(
  "rounded-lg border border-border bg-surface p-4 sm:p-5",
);

export const cardHover = cn(
  "transition-[border-color,box-shadow,transform] duration-150",
  "hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[var(--shadow-card-hover)]",
);

export const imageFrame = cn(
  "overflow-hidden rounded-[var(--radius-image)] bg-surface-elevated ring-1 ring-border",
);

export const surfacePanel = cn(
  "rounded-lg border border-border bg-surface p-4 sm:p-6",
);

/** Metric stat cells — lighter than ContentCard, no hover lift */
export const metricCell = cn(
  "rounded-lg border border-border/60 bg-surface/60 p-4",
);

/** Hero image frame on narrow viewports only */
export const imageFrameMobile = cn(
  imageFrame,
  "sm:overflow-visible sm:rounded-none sm:bg-transparent sm:ring-0",
);
