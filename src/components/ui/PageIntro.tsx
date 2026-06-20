import { cn } from "@/lib/cn";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  as?: "header" | "div";
}

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
  className,
  as: Component = "header",
}: PageIntroProps) {
  return (
    <Component
      className={cn(
        "mb-10 flex flex-col gap-4 border-b border-border pb-8",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-sm text-accent">{eyebrow}</p>
      ) : null}
      <h1 className="text-section font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      {description ? <p className="text-lg text-muted">{description}</p> : null}
      {children}
    </Component>
  );
}
