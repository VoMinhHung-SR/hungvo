import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  index?: string;
  showRule?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeading({
  children,
  className,
  id,
  index,
  showRule = true,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex items-center gap-4",
        showRule ? "w-full" : undefined,
        className,
      )}
    >
      <Heading
        id={id}
        className="flex shrink-0 items-baseline gap-3 whitespace-nowrap text-section font-semibold tracking-tight text-foreground"
      >
        {index ? (
          <span className="font-mono text-[0.62em] font-normal leading-[1.1] text-accent tabular-nums">
            {index}.
          </span>
        ) : null}
        <span className="leading-[1.1]">{children}</span>
      </Heading>
      {showRule ? (
        <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden />
      ) : null}
    </div>
  );
}
