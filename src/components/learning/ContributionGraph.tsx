"use client";

import { useMemo, useState, useTransition } from "react";

import { ContributionGrid } from "@/components/learning/ContributionGrid";
import { ContributionLegend } from "@/components/learning/ContributionLegend";
import { YearSelector } from "@/components/learning/YearSelector";
import { getContributionCount } from "@/lib/github/contributions";
import {
  getLocalToday,
  normalizeRollingContributions,
} from "@/lib/github/contribution-rolling";
import type { ContributionsResponse, YearTotal } from "@/types/contributions";

interface ContributionGraphProps {
  years: YearTotal[];
  initialData: ContributionsResponse;
}

export function ContributionGraph({ years, initialData }: ContributionGraphProps) {
  const focusYear = years[0]?.year ?? new Date().getFullYear().toString();

  const [isRollingYear, setIsRollingYear] = useState(true);
  const [selectedYear, setSelectedYear] = useState(focusYear);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [localToday] = useState(getLocalToday);

  const displayContributions = useMemo(() => {
    if (!isRollingYear) {
      return data.contributions;
    }

    return normalizeRollingContributions(data.contributions, localToday);
  }, [data.contributions, isRollingYear, localToday]);

  const contributionCount = getContributionCount(data.total, {
    isRollingYear,
    year: selectedYear,
  });

  function handleYearSelect(year: string) {
    if (!isRollingYear && year === selectedYear) {
      return;
    }

    startTransition(async () => {
      setError(null);

      try {
        const response = await fetch(`/api/contributions?y=${year}`);

        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const nextData = (await response.json()) as ContributionsResponse;
        setIsRollingYear(false);
        setSelectedYear(year);
        setData(nextData);
      } catch {
        setError("Unable to load contributions for this year.");
      }
    });
  }

  return (
    <div className="mt-12">
      <h3 className="mb-4 font-mono text-sm text-accent">Contribution Graph</h3>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1 rounded-lg border border-border bg-surface p-4 sm:p-6">
          <div className={isPending ? "opacity-60" : undefined}>
            <ContributionGrid
              contributions={displayContributions}
              isRollingYear={isRollingYear}
              year={selectedYear}
              rangeEnd={isRollingYear ? localToday : undefined}
            />
          </div>

          <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">
              {contributionCount} contribution
              {contributionCount === 1 ? "" : "s"}{" "}
              {isRollingYear ? "in the last year" : `in ${selectedYear}`}
            </p>
            <ContributionLegend />
          </div>

          {error && <p className="mt-3 text-sm text-muted">{error}</p>}
        </div>

        <YearSelector
          years={years}
          selectedYear={selectedYear}
          focusYear={focusYear}
          isRollingYear={isRollingYear}
          onSelect={handleYearSelect}
          disabled={isPending}
        />
      </div>
    </div>
  );
}
