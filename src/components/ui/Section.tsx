import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-nav py-section", className)}
      {...props}
    >
      {children}
    </section>
  );
}
