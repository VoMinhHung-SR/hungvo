import type { TextSection as TextSectionData } from "@/types/content";

interface TextSectionProps {
  section: TextSectionData;
}

export function TextSection({ section }: TextSectionProps) {
  return (
    <section id={section.id} className="flex flex-col gap-4">
      {section.eyebrow ? (
        <p className="font-mono text-xs text-accent">{section.eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
      <div className="flex flex-col gap-4 text-muted">
        {section.paragraphs.map((paragraph, index) => (
          <p key={`${section.id}-p-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
