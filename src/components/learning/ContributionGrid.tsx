import type { ContributionDay } from "@/types/contributions";
import { ContributionCell } from "@/components/learning/ContributionCell";
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

  const weekColumns = `repeat(${weeks.length}, var(--contrib-cell-size))`;

  return (
    <div className="overflow-x-auto overflow-y-visible md:overflow-visible">
      <div role="img" aria-label={ariaLabel} className="relative w-max pt-1">
        <div
          className="contrib-calendar-months text-muted"
          style={{ gridTemplateColumns: weekColumns }}
        >
          {monthLabels.map(
            ({ label, startWeekIndex, endWeekIndex, hidden }) => (
              <span
                key={`${label}-${startWeekIndex}`}
                className={cn(
                  "contrib-calendar-month-cell",
                  hidden && "contrib-calendar-month-label--reserved",
                )}
                style={{
                  gridColumn: `${startWeekIndex + 1} / ${endWeekIndex + 1}`,
                }}
                aria-hidden={hidden || undefined}
              >
                {label}
              </span>
            ),
          )}
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
