import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionHeading({
  children,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn(
        "text-section font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
}
