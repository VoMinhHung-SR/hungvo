export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

export type ContributionYearParam = "all" | "last" | string;

export interface YearTotal {
  year: string;
  count: number;
}
