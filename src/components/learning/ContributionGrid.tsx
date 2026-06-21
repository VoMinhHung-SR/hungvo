import type { ContributionDay } from "@/types/contributions";
import { ContributionCell } from "@/components/learning/ContributionCell";
import {
  CONTRIBUTION_CELL_GAP,
  CONTRIBUTION_CELL_SIZE,
} from "@/components/learning/contribution-styles";
import {
  buildRollingWeekColumns,
  buildWeekColumns,
  getMonthLabelPositions,
} from "@/lib/github/contribution-grid";
import { cn } from "@/lib/cn";

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
  const monthLabels = getMonthLabelPositions(weeks, {
    reserveLeadingPartialMonth: isRollingYear,
  });
  const cells = weeks.flatMap((week) => week);

  const ariaLabel = isRollingYear
    ? "Contribution graph for the last year"
    : `Contribution graph for ${year}`;

  const weekStep = CONTRIBUTION_CELL_SIZE + CONTRIBUTION_CELL_GAP;
  const weekColumns = `repeat(${weeks.length}, var(--contrib-cell-size))`;

  const labelByWeek = new Map(
    monthLabels.map((entry) => [entry.weekIndex, entry]),
  );

  return (
    <div className="overflow-x-auto overflow-y-visible md:overflow-visible">
      <div role="img" aria-label={ariaLabel} className="relative w-max pt-1">
        <div
          className="contrib-calendar-months text-muted"
          style={{ gridTemplateColumns: weekColumns }}
        >
          {weeks.map((_, weekIndex) => {
            const month = labelByWeek.get(weekIndex);

            return (
              <span
                key={`month-${weekIndex}`}
                className={cn(
                  "contrib-calendar-month-cell",
                  month?.hidden && "contrib-calendar-month-label--reserved",
                )}
                aria-hidden={month?.hidden || undefined}
              >
                {month?.label ?? ""}
              </span>
            );
          })}
        </div>

        <div
          className="contrib-calendar-grid"
          style={{ gridTemplateColumns: weekColumns }}
        >
          {cells.map((day, index) => (
            <ContributionCell
              key={day?.date ?? `empty-${index}`}
              day={day}
              includeYear={isRollingYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
