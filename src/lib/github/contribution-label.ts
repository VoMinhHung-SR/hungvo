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

function formatContributionDate(date: string, includeYear = false): string {
  const value = new Date(`${date}T00:00:00`);
  const month = value.toLocaleDateString("en-US", { month: "long" });
  const day = value.getDate();
  const suffix = getOrdinalSuffix(day);

  if (includeYear) {
    return `${month} ${day}${suffix}, ${value.getFullYear()}`;
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
