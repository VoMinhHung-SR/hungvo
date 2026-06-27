import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { uiLift } from "@/lib/ui/interaction-classes";

type ButtonAsButton = {
  href?: undefined;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = {
  href: string;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const outlineStyles = cn(
  "font-mono text-accent border border-accent bg-transparent px-6 py-3",
  uiLift,
);

export function Button({ className, href, ...props }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    outlineStyles,
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          {...(isExternal && href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <Link
        href={href}
        className={styles}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      type="button"
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
