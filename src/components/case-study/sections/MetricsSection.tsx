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
      <dl className="grid gap-4 sm:grid-cols-3">
        {section.items.map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-border bg-surface px-4 py-3"
          >
            <dt className="font-mono text-xs text-muted">{item.label}</dt>
            <dd className="mt-1 text-lg font-semibold text-foreground">
              {item.value}
            </dd>
            {item.note ? (
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            ) : null}
          </div>
        ))}
      </dl>
    </section>
  );
}
