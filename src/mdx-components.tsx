import Image from "next/image";
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { InternalLink } from "@/components/ui/Link";
import { cn } from "@/lib/cn";

function MdxLink({
  href,
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  if (!href) {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    );
  }

  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <ExternalLink href={href} className={className} {...props}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <InternalLink href={href} className={className} {...props}>
      {children}
    </InternalLink>
  );
}

function MdxImage({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: ComponentPropsWithoutRef<"img">) {
  if (typeof src === "string" && width && height) {
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={Number(width)}
        height={Number(height)}
        className={cn(
          "h-auto w-full rounded-lg border border-border",
          className,
        )}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      width={width}
      height={height}
      className={cn(
        "h-auto w-full rounded-lg border border-border",
        className,
      )}
      {...props}
    />
  );
}

function MdxPre({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );
}

const components = {
  a: MdxLink,
  img: MdxImage,
  pre: MdxPre,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
