import { siteConfig } from "@/content/site.config";

export const homeContent = {
  hero: {
    greeting: "Hi, my name is",
    name: "Hung Vo.",
    tagline: "I build modern web experiences",
    description:"Frontend Developer specializing in React, Next.js, and TypeScript. Focused on building performant user experiences, shipping real products, and improving through continuous learning.",
    cta: {
      label: "Check out my work!",
      href: "/#projects",
    },
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I'm a frontend developer who enjoys building products with React, Next.js, and TypeScript.", 
      "I like turning ideas into real applications — from polished user interfaces to full-stack products backed by Django and PostgreSQL. I'm particularly interested in the intersection of product thinking, engineering, and user experience.",
      "I believe progress comes from consistency more than intensity. That's why I enjoy maintaining long-term habits across coding, learning, and fitness, and why I'm always looking for ways to improve a little every day.",
      "Currently, I'm exploring AI-assisted development, system design, and the tools that help developers build better software.",
    ],
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Django",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
    profileImage: "/images/profile.jpg",
    profileImageAlt: "Hung Vo",
  },
  experience: {
    title: "Where I've Worked",
    items: [
      {
        id: "freelance",
        company: "Independent",
        role: "Frontend Developer",
        range: "2024 — Present",
        bullets: [
          "Build and ship client-facing web apps with React, Next.js, and TypeScript.",
          "Collaborate on product scope, UI implementation, and performance tuning.",
          "Prototype AI-assisted workflows and developer tooling.",
        ],
      },
      {
        id: "projects",
        company: "Personal Projects",
        role: "Full-stack Developer",
        range: "2023 — Present",
        bullets: [
          "Designed and built Interview Frogde — an AI-powered interview practice assistant.",
          "Developed a pharmacy management platform with React and Django.",
          "Maintain open-source contributions and portfolio experiments on GitHub.",
        ],
        url: "https://github.com/VoMinhHung-SR",
      },
    ],
  },
  projects: {
    title: "Some Things I've Built",
    subtitle:
      "Selected products and tools — each with a full case study on problem, architecture, and what I learned.",
    caseStudyLabel: "Case Study",
    showMore: {
      label: "Show more",
      lessLabel: "Show less",
    },
    noteworthy: {
      title: "Other Noteworthy Projects",
      description:
        "Extensions, tools, and browser mini games — smaller builds alongside the featured work above.",
      viewArchive: {
        label: "View the archive",
        href: siteConfig.social.github,
      },
    },
  },
  learning: {
    title: "Learning Journey",
    focusLabel: "Current Focus",
    items: [
      "AI-Assisted Development",
      "AWS Services",
      "System Design",
      "Full-Stack Product Development",
      "Browser Extensions",
      "LeetCode",
    ],
  },
  contact: {
    eyebrow: "What's Next?",
    title: "Get In Touch",
    description:
      "I'm open to frontend roles, freelance collaborations, and interesting product ideas. Whether you have a question or just want to say hi, my inbox is always open.",
    cta: {
      label: "Say Hello",
      href: "mailto:hello@hungvo.dev",
    },
  },
} as const;
