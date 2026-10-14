function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/** Deterministic labels — avoid toLocaleDateString (SSR/client locale mismatch). */
function formatContributionDate(date: string, includeYear = false): string {
  const [yearRaw, monthRaw, dayRaw] = date.split("-");
  const year = Number(yearRaw);
  const monthIndex = Number(monthRaw) - 1;
  const day = Number(dayRaw);
  const month = MONTH_NAMES[monthIndex] ?? "January";
  const suffix = getOrdinalSuffix(day);

  if (includeYear) {
    return `${month} ${day}${suffix}, ${year}`;
  }

  return `${month} ${day}${suffix}`;
}

export function formatContributionLabel(
  count: number,
  date: string,
  options?: { includeYear?: boolean },
): string {
  const formattedDate = formatContributionDate(date, options?.includeYear);

  if (count === 0) {
    return `No contributions on ${formattedDate}.`;
  }

  if (count === 1) {
    return `1 contribution on ${formattedDate}.`;
  }

  return `${count} contributions on ${formattedDate}.`;
}
