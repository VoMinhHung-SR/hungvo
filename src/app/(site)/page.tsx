import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Learning } from "@/sections/Learning";
import { Projects } from "@/sections/Projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Learning />
      <Contact />
    </>
  );
}
