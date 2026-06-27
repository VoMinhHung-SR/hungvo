import type { ContributionDay } from "@/types/contributions";

export type WeekColumn = (ContributionDay | null)[];

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function buildRollingWeekColumns(
  contributions: ContributionDay[],
  rangeEnd?: Date,
): WeekColumn[] {
  if (contributions.length === 0) {
    return [];
  }

  const byDate = new Map(contributions.map((day) => [day.date, day]));
  const rangeStart = new Date(`${contributions[0].date}T00:00:00`);
  const rangeEndDate =
    rangeEnd ?? new Date(`${contributions[contributions.length - 1].date}T00:00:00`);

  const cursor = new Date(rangeStart);
  cursor.setDate(cursor.getDate() - cursor.getDay());

  const weeks: WeekColumn[] = [];
  let currentWeek: WeekColumn = Array.from({ length: 7 }, () => null);

  while (cursor <= rangeEndDate) {
    const dayOfWeek = cursor.getDay();
    const dateKey = formatDate(cursor);
    const inRange = cursor >= rangeStart && cursor <= rangeEndDate;

    currentWeek[dayOfWeek] = inRange
      ? (byDate.get(dateKey) ?? { date: dateKey, count: 0, level: 0 })
      : null;

    if (dayOfWeek === 6) {
      weeks.push(currentWeek);
      currentWeek = Array.from({ length: 7 }, () => null);
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  if (currentWeek.some((day) => day !== null)) {
    weeks.push(currentWeek);
  }

  return weeks;
}

export function buildWeekColumns(
  contributions: ContributionDay[],
  year: string,
): WeekColumn[] {
  const byDate = new Map(contributions.map((day) => [day.date, day]));
  const weeks: WeekColumn[] = [];
  let currentWeek: WeekColumn = Array.from({ length: 7 }, () => null);

  const start = new Date(`${year}-01-01T00:00:00`);
  const end = new Date(`${year}-12-31T00:00:00`);
  const cursor = new Date(start);

  while (cursor <= end) {
    const dayOfWeek = cursor.getDay();
    const dateKey = formatDate(cursor);

    currentWeek[dayOfWeek] = byDate.get(dateKey) ?? {
      date: dateKey,
      count: 0,
      level: 0,
    };

    if (dayOfWeek === 6) {
      weeks.push(currentWeek);
      currentWeek = Array.from({ length: 7 }, () => null);
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  if (currentWeek.some((day) => day !== null)) {
    weeks.push(currentWeek);
  }

  return weeks;
}

export interface MonthLabelPosition {
  label: string;
  startWeekIndex: number;
  /** Exclusive — span covers [startWeekIndex, endWeekIndex) */
  endWeekIndex: number;
  /** Partial leading month — reserve column space without visible text */
  hidden?: boolean;
}

function getLeadingPartialMonthPlaceholder(
  weeks: WeekColumn[],
): { label: string; weekIndex: number; hidden: true } | null {
  const firstDay = weeks[0]?.find((day) => day !== null);
  if (!firstDay) {
    return null;
  }

  const date = new Date(`${firstDay.date}T00:00:00`);
  if (date.getDate() === 1) {
    return null;
  }

  return {
    label: MONTH_LABELS[date.getMonth()],
    weekIndex: 0,
    hidden: true,
  };
}

function toMonthSpans(
  markers: Array<{ label: string; weekIndex: number; hidden?: boolean }>,
  weekCount: number,
): MonthLabelPosition[] {
  return markers.map((marker, index) => ({
    label: marker.label,
    startWeekIndex: marker.weekIndex,
    endWeekIndex: markers[index + 1]?.weekIndex ?? weekCount,
    hidden: marker.hidden,
  }));
}

export function getMonthLabelPositions(
  weeks: WeekColumn[],
  options?: { reserveLeadingPartialMonth?: boolean },
): MonthLabelPosition[] {
  const markers: Array<{ label: string; weekIndex: number; hidden?: boolean }> =
    [];
  let lastMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const monthStartDay = week.find((day) => {
      if (!day) {
        return false;
      }

      return new Date(`${day.date}T00:00:00`).getDate() === 1;
    });

    if (!monthStartDay) {
      return;
    }

    const month = new Date(`${monthStartDay.date}T00:00:00`).getMonth();
    if (month === lastMonth) {
      return;
    }

    markers.push({ label: MONTH_LABELS[month], weekIndex });
    lastMonth = month;
  });

  if (options?.reserveLeadingPartialMonth) {
    const placeholder = getLeadingPartialMonthPlaceholder(weeks);
    if (placeholder) {
      return toMonthSpans([placeholder, ...markers], weeks.length);
    }
  }

  return toMonthSpans(markers, weeks.length);
}
