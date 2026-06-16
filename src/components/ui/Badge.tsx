import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2.5 py-1 font-mono text-xs text-accent",
        "border border-accent/20 bg-accent/5",
        className,
      )}
    >
      {children}
    </span>
  );
}
