export const homeContent = {
  hero: {
    greeting: "Hi, my name is",
    name: "Hung Vo.",
    tagline: "I build products for the web.",
    description:
      "Frontend Developer focused on building modern web applications and AI-powered tools.",
    cta: {
      label: "View Projects",
      href: "/#projects",
    },
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm a Frontend Developer who enjoys building clean, intentional interfaces with the React ecosystem — React, Next.js, and TypeScript are my daily tools.",
      "I care about product mindset as much as code quality: shipping useful tools, iterating from real feedback, and keeping UX simple.",
      "I'm always learning — whether it's system design, AI applications, or sharpening fundamentals through continuous practice.",
    ],
  },
  projects: {
    title: "Selected Work",
    viewCaseStudy: "View Case Study",
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
    title: "Let's build something useful.",
  },
} as const;
