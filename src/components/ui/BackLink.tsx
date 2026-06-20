import { InternalLink } from "@/components/ui/Link";
import { cn } from "@/lib/cn";

interface BackLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function BackLink({ href, label, className }: BackLinkProps) {
  return (
    <InternalLink
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors duration-150 hover:text-accent",
        className,
      )}
    >
      <span aria-hidden>←</span>
      {label}
    </InternalLink>
  );
}
