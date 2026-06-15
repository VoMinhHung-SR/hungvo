import { contributionCellClass } from "@/components/learning/contribution-styles";

const LEVELS = [0, 1, 2, 3, 4] as const;

export function ContributionLegend() {
  return (
    <div className="flex items-center gap-2 text-xs text-muted">
      <span>Less</span>
      <div className="flex items-center gap-[3px]">
        {LEVELS.map((level) => (
          <span
            key={level}
            className={`contrib-level-${level} ${contributionCellClass}`}
          />
        ))}
      </div>
      <span>More</span>
    </div>
  );
}
