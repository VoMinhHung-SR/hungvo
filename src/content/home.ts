import { siteConfig } from "@/content/site.config";

export const homeContent = {
  hero: {
    eyebrow: "Frontend developer · product builder",
    name: "Hung Vo.",
    tagline: {
      lead: "I ship software for ",
      emphasis: "problems I actually have.",
    },
    description:
      "From a live clinic pharmacy platform to browser extensions and interview prep tools — React & Next.js up front, Django when the product needs a backend.",
    highlights: [
      "OUPharmacy ecosystem",
      "Browser extensions",
      "Maintained & deployed",
    ],
    cta: {
      label: "View selected work",
      href: "/#projects",
    },
    secondaryCta: {
      label: "GitHub",
      href: siteConfig.social.github,
    },
  },
  about: {
    title: "About Me",
    paragraphs: [
      "Most of what I've built started as something I needed — clinic software for pharmacy workflows, extensions to quiet noisy sites, scrapers to skip repetitive copy-paste. I keep the useful ones running instead of chasing the next greenfield demo.",
      "I'm frontend-first with React and Next.js, but I'll own the Django API and database when the product demands it. Interview Frogde, mini games for LeetCode practice, tools like these — I learn by shipping small, then refining what sticks.",
    ],
    pullQuote: "Progress comes from consistency more than intensity.",
    skillGroups: [
      {
        label: "Frontend",
        items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        label: "Backend & data",
        items: ["Django", "PostgreSQL", "REST APIs"],
      },
      {
        label: "Also comfortable",
        items: ["Browser extensions", "Git", "AI-assisted workflows"],
      },
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
      href: "mailto:vominhhug154@gmail.com",
    },
  },
} as const;
