import type { ContributionDay } from "@/types/contributions";

function formatDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getLocalToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function getRollingDateRange(localToday = getLocalToday()) {
  const end = new Date(localToday);
  const start = new Date(localToday);
  start.setDate(start.getDate() - 365);

  return { start, end };
}

export function normalizeRollingContributions(
  contributions: ContributionDay[],
  localToday = getLocalToday(),
): ContributionDay[] {
  const { start, end } = getRollingDateRange(localToday);
  const byDate = new Map(contributions.map((day) => [day.date, day]));
  const normalized: ContributionDay[] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    const dateKey = formatDateKey(cursor);

    normalized.push(
      byDate.get(dateKey) ?? { date: dateKey, count: 0, level: 0 },
    );

    cursor.setDate(cursor.getDate() + 1);
  }

  return normalized;
}
