import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const { eyebrow, title, description, cta } = homeContent.contact;

  return (
    <Section id="contact" className="pb-24">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
        <SectionHeading index="05" showRule={false} className="mb-6 justify-center">
          {title}
        </SectionHeading>
        <p className="mb-10 leading-relaxed text-muted">{description}</p>
        <Button href={cta.href} variant="outline">
          {cta.label}
        </Button>
      </div>
    </Section>
  );
}
