import { siteConfig } from "@/content/site.config";
import type {
  ContributionYearParam,
  ContributionsResponse,
  YearTotal,
} from "@/types/contributions";

const REVALIDATE_SECONDS = 3600;

export const CONTRIBUTION_LAST_YEAR_PARAM = "last" as const;

function buildContributionsUrl(year: ContributionYearParam): string {
  return `${siteConfig.github.contributionsApi}/${siteConfig.github.username}?y=${year}`;
}

export async function getContributions(
  year: ContributionYearParam,
): Promise<ContributionsResponse | null> {
  try {
    const response = await fetch(buildContributionsUrl(year), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as ContributionsResponse;
  } catch {
    return null;
  }
}

export function getAvailableYears(
  total: ContributionsResponse["total"],
): YearTotal[] {
  return Object.entries(total)
    .filter(([key]) => /^\d{4}$/.test(key))
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export function getYearContributionCount(
  total: ContributionsResponse["total"],
  year: string,
): number {
  return total[year] ?? 0;
}

export function getContributionCount(
  total: ContributionsResponse["total"],
  options: { isRollingYear: boolean; year: string },
): number {
  if (options.isRollingYear) {
    return total.lastYear ?? 0;
  }

  return getYearContributionCount(total, options.year);
}

export function isValidYearParam(value: string): value is ContributionYearParam {
  return /^\d{4}$/.test(value) || value === "all" || value === "last";
}
