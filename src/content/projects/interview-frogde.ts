import type { CaseStudy } from "@/types/content";

const slug = "interview-frogde" as const;
const imageBase = `/images/projects/${slug}`;

export const interviewFrogde: CaseStudy = {
  slug,
  title: "Interview Frogde",
  description:
    "A LeetCode interview coach in your browser—get a nudge when you're stuck, honest feedback when you submit. Built to help you learn the pattern, not copy the answer.",
  techStack: ["Chrome MV3", "React", "TypeScript", "Vite", "AI"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Full-stack Developer",
  timeline: "2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "Interview Frogde coaching panel on a LeetCode problem",
  seo: {
    publishedAt: "2026-06-05",
    updatedAt: "2026-06-14",
    ogImage: `${imageBase}/hero.png`,
    keywords: [
      "coding interview coach",
      "Chrome extension",
      "LeetCode",
      "AI hints",
      "interview prep",
    ],
  },
  repoUrl: "https://github.com/VoMinhHung-SR/interview-forge",
  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "Interview Frogde is a Chrome extension for anyone prepping technical interviews on LeetCode. It acts like a patient mentor: hints that escalate when you need them, never a pasted solution.",
        "Submit your code and get a review focused on what interviewers care about—pattern, complexity, edge cases, and how to improve. Everything stays on your device; no account, no cloud sync.",
      ],
    },
    {
      id: "solution",
      type: "bullets",
      title: "Key features",
      items: [
        "Progressive hints (up to 8) that guide without spoiling",
        "Post-submit review: complexity, bottlenecks, missed cases",
        "Auto-analyze on LeetCode submit with a ready-when-you-are badge",
        "Pick up where you left off—sessions saved per problem",
      ],
    },
    {
      id: "outcomes",
      type: "metrics",
      title: "At a glance",
      items: [
        { label: "For", value: "LeetCode prep" },
        { label: "Coach", value: "Gemini AI" },
        { label: "Privacy", value: "Local only" },
      ],
    },
    {
      id: "lessons",
      type: "bullets",
      title: "Takeaway",
      items: [
        "Users want a coach, not a cheat sheet—product guardrails matter",
        "One platform done well beats many half-supported ones",
      ],
    },
  ],
};
