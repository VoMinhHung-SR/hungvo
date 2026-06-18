import type { SiteConfig } from "@/types/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hungvo.dev";

export const siteConfig: SiteConfig = {
  name: "Hung Vo",
  title: "Hung Vo | Frontend Developer",
  description:
    "Frontend Developer focused on building modern web applications and AI-powered tools.",
  url: siteUrl,
  author: {
    name: "Hung Vo",
    role: "Frontend Developer",
    email: "hello@hungvo.dev",
  },
  social: {
    github: "https://github.com/VoMinhHung-SR",
    linkedin: "https://www.linkedin.com/in/hiiro-dev/",
  },
  github: {
    username: "VoMinhHung-SR",
    contributionsApi: "https://github-contributions-api.jogruber.de/v4",
  },
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  homeNav: [
    {
      label: "About",
      href: "/#about",
      kind: "anchor",
      sectionId: "about",
    },
    {
      label: "Work",
      href: "/#projects",
      kind: "anchor",
      sectionId: "projects",
    },
    {
      label: "Learning",
      href: "/#learning",
      kind: "anchor",
      sectionId: "learning",
    },
    {
      label: "Contact",
      href: "/#contact",
      kind: "anchor",
      sectionId: "contact",
    },
  ],
  siteNav: [
    { label: "Home", href: "/", kind: "route", enabled: false },
    { label: "Blog", href: "/blog", kind: "route", enabled: true },
    { label: "Notes", href: "/notes", kind: "route", enabled: true },
    { label: "Lab", href: "/lab", kind: "route", enabled: false },
  ],
};
