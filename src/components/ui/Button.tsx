import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost";

interface BaseButtonProps {
  variant?: ButtonVariant;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "text-accent border border-accent/30 hover:border-accent/60 hover:bg-accent/10 hover:shadow-[var(--glow-accent)]",
  ghost:
    "text-foreground border border-transparent hover:text-accent hover:underline",
};

export function Button({
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition-[color,background-color,border-color,box-shadow,text-decoration] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantStyles[variant],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
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
