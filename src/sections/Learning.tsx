import { homeContent } from "@/content/home";
import { ContributionGraph } from "@/components/learning/ContributionGraph";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CONTRIBUTION_LAST_YEAR_PARAM,
  getAvailableYears,
  getContributions,
} from "@/lib/github/contributions";

export async function Learning() {
  const { title, focusLabel, items } = homeContent.learning;
  const allContributions = await getContributions("all");
  const years = allContributions
    ? getAvailableYears(allContributions.total)
    : [];
  const lastYearContributions = years.length
    ? await getContributions(CONTRIBUTION_LAST_YEAR_PARAM)
    : null;

  return (
    <Section id="learning">
      <SectionHeading className="mb-8">{title}</SectionHeading>
      <div className="max-w-xl">
        <h3 className="mb-4 font-mono text-sm text-accent">{focusLabel}</h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded border border-border bg-surface px-4 py-3 text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {lastYearContributions && years.length > 0 ? (
        <ContributionGraph years={years} initialData={lastYearContributions} />
      ) : (
        <p className="mt-12 text-sm text-muted">
          Contribution graph is temporarily unavailable.
        </p>
      )}
    </Section>
  );
}
