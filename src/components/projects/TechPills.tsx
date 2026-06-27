import { cn } from "@/lib/cn";
import { techPill } from "@/lib/ui/project-classes";

interface TechPillsProps {
  items: readonly string[];
  className?: string;
}

export function TechPills({ items, className }: TechPillsProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((tech) => (
        <li key={tech} className={techPill}>
          {tech}
        </li>
      ))}
    </ul>
  );
}
