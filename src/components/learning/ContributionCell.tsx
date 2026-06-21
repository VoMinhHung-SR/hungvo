"use client";

import type { ContributionDay } from "@/types/contributions";
import { cn } from "@/lib/cn";
import { formatContributionLabel } from "@/lib/github/contribution-label";
import { contributionCellClass } from "@/components/learning/contribution-styles";

const LEVEL_CLASSES: Record<number, string> = {
  0: "contrib-level-0",
  1: "contrib-level-1",
  2: "contrib-level-2",
  3: "contrib-level-3",
  4: "contrib-level-4",
};

interface ContributionCellProps {
  day: ContributionDay | null;
  includeYear?: boolean;
}

export function ContributionCell({
  day,
  includeYear = false,
}: ContributionCellProps) {
  if (!day) {
    return <span className={contributionCellClass} aria-hidden="true" />;
  }

  const label = formatContributionLabel(day.count, day.date, { includeYear });

  return (
    <span className="contrib-cell-group relative block">
      <span
        aria-label={label}
        className={cn(
          contributionCellClass,
          "contrib-cell-interactive",
          LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0],
        )}
      />
      <span role="tooltip" className="contrib-tooltip">
        {label}
      </span>
    </span>
  );
}
