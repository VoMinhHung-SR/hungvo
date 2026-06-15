import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function ExternalLink({
  href,
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

interface InternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function InternalLink({
  href,
  className,
  children,
  ...props
}: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
