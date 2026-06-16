import { cn } from "@/lib/cn";
import type { YearTotal } from "@/types/contributions";

interface YearSelectorProps {
  years: YearTotal[];
  selectedYear: string;
  focusYear: string;
  isRollingYear: boolean;
  onSelect: (year: string) => void;
  disabled?: boolean;
}

export function YearSelector({
  years,
  selectedYear,
  focusYear,
  isRollingYear,
  onSelect,
  disabled = false,
}: YearSelectorProps) {
  return (
    <div
      className="flex flex-row gap-2 lg:flex-col"
      role="group"
      aria-label="Select year"
    >
      {years.map(({ year }) => {
        const isSelected = !isRollingYear && year === selectedYear;
        const isFocused = isRollingYear && year === focusYear;
        const isHighlighted = isSelected || isFocused;

        return (
          <button
            key={year}
            type="button"
            aria-pressed={isSelected}
            aria-current={isFocused ? "true" : undefined}
            disabled={disabled}
            onClick={() => onSelect(year)}
            className={cn(
              "min-w-[4.5rem] rounded-md px-3 py-1.5 text-center text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isHighlighted
                ? "bg-accent text-background"
                : "border border-border bg-surface text-muted hover:border-muted hover:text-foreground",
              disabled && "cursor-not-allowed opacity-60",
            )}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}
