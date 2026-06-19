import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero() {
  const { greeting, name, tagline, description, cta } = homeContent.hero;

  return (
    <Section className="flex min-h-[calc(100vh-8rem)] flex-col justify-center py-section lg:min-h-[calc(100vh-4rem)]">
      <p className="mb-4 font-mono text-sm text-accent">{greeting}</p>
      <h1 className="text-hero-glow text-hero font-bold tracking-tight text-foreground">
        {name}
      </h1>
      <p className="mt-2 text-section font-semibold text-muted">{tagline}</p>
      <p className="mt-6 max-w-xl leading-relaxed text-muted">{description}</p>
      <div className="mt-10">
        <Button href={cta.href}>{cta.label}</Button>
      </div>
    </Section>
  );
}
