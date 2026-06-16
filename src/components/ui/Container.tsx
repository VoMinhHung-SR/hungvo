import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
} & HTMLAttributes<HTMLElement>;

export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("mx-auto w-full max-w-content px-6 lg:px-8", className)}
      {...props}
    />
  );
}
