import { Reveal } from "@/components/ui/Reveal";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Learning } from "@/sections/Learning";
import { Projects } from "@/sections/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal delay={0.05}>
        <Experience />
      </Reveal>
      <Reveal delay={0.05}>
        <Projects />
      </Reveal>
      <Reveal delay={0.05}>
        <Learning />
      </Reveal>
      <Reveal delay={0.05}>
        <Contact />
      </Reveal>
    </>
  );
}
