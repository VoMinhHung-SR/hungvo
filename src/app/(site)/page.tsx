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
      <About />
      <Experience />
      <Projects />
      <Learning />
      <Contact />
    </>
  );
}
