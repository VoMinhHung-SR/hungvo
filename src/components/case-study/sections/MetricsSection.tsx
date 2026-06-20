import { ContentCard } from "@/components/ui/ContentCard";
import type { MetricsSection as MetricsSectionData } from "@/types/content";

interface MetricsSectionProps {
  section: MetricsSectionData;
}

export function MetricsSection({ section }: MetricsSectionProps) {
  return (
    <section id={section.id} className="flex flex-col gap-4">
      {section.eyebrow ? (
        <p className="font-mono text-xs text-accent">{section.eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {section.items.map((item) => (
          <ContentCard key={item.label} className="p-4">
            <p className="font-mono text-xs text-muted">{item.label}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {item.value}
            </p>
            {item.note ? (
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            ) : null}
          </ContentCard>
        ))}
      </div>
    </section>
  );
}
