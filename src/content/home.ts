import { siteConfig } from "@/content/site.config";

export const homeContent = {
  hero: {
    greeting: "Hi, my name is",
    name: "Hung Vo.",
    tagline: "I build things for the web.",
    description:
      "I'm a Frontend Developer who enjoys shipping modern web products — from polished interfaces to AI-powered tools that solve real problems.",
    cta: {
      label: "Check out my work!",
      href: "/#projects",
    },
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I'm a Frontend Developer who enjoys building clean, intentional interfaces with the React ecosystem — React, Next.js, and TypeScript are my daily tools.",
      "I care about product mindset as much as code quality: shipping useful tools, iterating from real feedback, and keeping UX simple.",
      "When I'm not coding, I'm usually exploring AI applications, system design, or sharpening fundamentals through continuous practice.",
    ],
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
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
      viewArchive: {
        label: "View the archive",
        href: siteConfig.social.github,
      },
    },
    leetcodeGames: {
      eyebrow: "Mini Game Projects",
      title: "Algorithm Practice, Playable",
      description:
        "Small browser projects I built while studying LeetCode — turning patterns like BFS, greedy, and game trees into interactive mini games.",
    },
  },
  learning: {
    title: "Learning Journey",
    focusLabel: "Current Focus",
    items: [
      "AI Applications",
      "System Design",
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
