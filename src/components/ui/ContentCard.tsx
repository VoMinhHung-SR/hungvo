import { cn } from "@/lib/cn";
import { cardBase, cardHover } from "@/lib/ui/card-classes";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

export function ContentCard({
  children,
  className,
  hover = false,
  as: Component = "div",
}: ContentCardProps) {
  return (
    <Component className={cn(cardBase, hover && cardHover, className)}>
      {children}
    </Component>
  );
}
