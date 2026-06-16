import type { BulletSection as BulletSectionData } from "@/types/content";

interface BulletSectionProps {
  section: BulletSectionData;
}

export function BulletSection({ section }: BulletSectionProps) {
  return (
    <section id={section.id} className="flex flex-col gap-4">
      {section.eyebrow ? (
        <p className="font-mono text-xs text-accent">{section.eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
      <ul className="list-inside list-disc space-y-2 text-muted">
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
