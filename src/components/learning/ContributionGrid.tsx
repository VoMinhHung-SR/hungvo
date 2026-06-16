import type { ContributionDay } from "@/types/contributions";
import { ContributionCell } from "@/components/learning/ContributionCell";
import {
  buildRollingWeekColumns,
  buildWeekColumns,
  getMonthLabelPositions,
} from "@/lib/github/contribution-grid";

interface ContributionGridProps {
  contributions: ContributionDay[];
  isRollingYear: boolean;
  year: string;
  rangeEnd?: Date;
}

export function ContributionGrid({
  contributions,
  isRollingYear,
  year,
  rangeEnd,
}: ContributionGridProps) {
  const weeks = isRollingYear
    ? buildRollingWeekColumns(contributions, rangeEnd)
    : buildWeekColumns(contributions, year);
  const monthLabels = getMonthLabelPositions(weeks);
  const cells = weeks.flatMap((week) => week);

  const ariaLabel = isRollingYear
    ? "Contribution graph for the last year"
    : `Contribution graph for ${year}`;

  return (
    <div className="overflow-x-auto overflow-y-visible md:overflow-visible">
      <div role="img" aria-label={ariaLabel} className="relative w-max pt-1">
        <div className="contrib-calendar-months text-muted">
          {weeks.map((_, weekIndex) => {
            const month = monthLabels.find(
              (label) => label.weekIndex === weekIndex,
            );

            return (
              <span
                key={`month-${weekIndex}`}
                className="overflow-visible leading-none"
              >
                {month?.label ?? ""}
              </span>
            );
          })}
        </div>

        <div className="contrib-calendar-grid">
          {cells.map((day, index) => (
            <ContributionCell key={`cell-${index}`} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
}
