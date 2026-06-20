import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  index?: string;
  showRule?: boolean;
}

export function SectionHeading({
  children,
  className,
  id,
  index,
  showRule = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex items-center gap-4",
        showRule ? "w-full" : undefined,
        className,
      )}
    >
      <h2
        id={id}
        className="flex shrink-0 items-baseline gap-3 whitespace-nowrap text-section font-semibold tracking-tight text-foreground"
      >
        {index ? (
          <span className="font-mono text-base font-normal text-accent">
            {index}.
          </span>
        ) : null}
        <span>{children}</span>
      </h2>
      {showRule ? (
        <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden />
      ) : null}
    </div>
  );
}
