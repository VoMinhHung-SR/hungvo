import { homeContent } from "@/content/home";
import { ContributionGraph } from "@/components/learning/ContributionGraph";
import { ArrowList } from "@/components/ui/ArrowList";
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
      <SectionHeading index="04">{title}</SectionHeading>
      <SectionLabel>{focusLabel}</SectionLabel>
      <ArrowList items={items} className="sm:grid-cols-3" />

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
