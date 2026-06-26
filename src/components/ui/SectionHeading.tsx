import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  index?: string;
  showRule?: boolean;
  size?: "default" | "sm";
  as?: "h1" | "h2";
}

const headingSize = {
  default: "whitespace-nowrap text-section",
  sm: "text-xl sm:text-2xl",
} as const;

const indexSize = {
  default: "text-[0.62em]",
  sm: "text-[0.85em]",
} as const;

export function SectionHeading({
  children,
  className,
  id,
  index,
  showRule = true,
  size = "sm",
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
        className={cn(
          "flex shrink-0 items-baseline gap-2.5 tracking-tight text-foreground",
          headingSize[size],
        )}
      >
        {index ? (
          <span
            className={cn(
              "font-mono font-normal leading-none text-accent tabular-nums",
              indexSize[size],
            )}
          >
            {index}.
          </span>
        ) : null}
        <span className="font-semibold leading-[1.1]">{children}</span>
      </Heading>
      {showRule ? (
        <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden />
      ) : null}
    </div>
  );
}
