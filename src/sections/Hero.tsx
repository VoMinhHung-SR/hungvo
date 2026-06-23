import { HeroContent } from "@/components/hero/HeroContent";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section className="relative flex min-h-[calc(100vh-6rem)] flex-col justify-center overflow-hidden py-section">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden
      />
      <HeroContent />
    </Section>
  );
}
