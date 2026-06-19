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
