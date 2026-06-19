import { cn } from "@/lib/cn";

interface ArrowListProps {
  items: readonly string[];
  className?: string;
}

export function ArrowList({ items, className }: ArrowListProps) {
  return (
    <ul className={cn("grid gap-2 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-sm text-muted before:absolute before:left-0 before:text-accent before:content-['▹']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
