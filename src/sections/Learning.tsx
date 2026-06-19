import { homeContent } from "@/content/home";
import { ContributionGraph } from "@/components/learning/ContributionGraph";
import { ContentCard } from "@/components/ui/ContentCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
      <SectionHeading index="03" className="mb-8">
        {title}
      </SectionHeading>
      <div className="max-w-xl">
        <SectionLabel>{focusLabel}</SectionLabel>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item}>
              <ContentCard className="p-4 text-foreground">{item}</ContentCard>
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
