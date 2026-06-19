import { cn } from "@/lib/cn";

interface MetaRowItem {
  label?: string;
  value: React.ReactNode;
}

interface MetaRowProps {
  items: MetaRowItem[];
  className?: string;
}

export function MetaRow({ items, className }: MetaRowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted",
        className,
      )}
    >
      {items.map((item, index) => (
        <span key={item.label ?? index} className="inline-flex items-center gap-3">
          {index > 0 ? (
            <span className="text-border" aria-hidden>
              ·
            </span>
          ) : null}
          {item.label ? (
            <>
              <span>{item.label}</span>
              <span className="text-foreground">{item.value}</span>
            </>
          ) : (
            <span>{item.value}</span>
          )}
        </span>
      ))}
    </div>
  );
}
