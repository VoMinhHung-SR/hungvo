import { HeroContent } from "@/components/hero/HeroContent";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-center py-section">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl" />
      </div>
      <HeroContent />
    </Section>
  );
}
