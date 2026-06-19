import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  index?: string;
}

export function SectionHeading({
  children,
  className,
  id,
  index,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn(
        "flex items-baseline gap-4 text-section font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {index ? (
        <span className="font-mono text-base font-normal text-muted">
          {index}.
        </span>
      ) : null}
      <span>{children}</span>
    </h2>
  );
}
