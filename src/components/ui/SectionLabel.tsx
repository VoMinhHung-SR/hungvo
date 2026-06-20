import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p className={cn("mb-4 font-mono text-sm text-accent", className)}>
      {children}
    </p>
  );
}
