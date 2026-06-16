import type { CaseStudy } from "@/types/content";

const slug = "interview-frogde" as const;
const imageBase = `/images/projects/${slug}`;

export const interviewFrogde: CaseStudy = {
  slug,
  title: "Interview Frogde",
  description:
    "AI-powered coding interview assistant that helps candidates practice technical questions with structured feedback.",
  techStack: ["React", "Next.js", "TypeScript", "AI"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Full-stack Developer",
  timeline: "2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "Interview Frogde dashboard showing practice session and feedback panel",
  seo: {
    publishedAt: "2026-06-05",
    updatedAt: "2026-06-14",
    ogImage: `${imageBase}/hero.png`,
    keywords: [
      "AI interview assistant",
      "coding interview",
      "Next.js",
      "TypeScript",
      "technical practice",
    ],
  },
  repoUrl: "https://github.com/VoMinhHung-SR/interview-forge",
  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "Interview Frogde is a practice platform for technical interviews. It combines structured question flows with AI-assisted feedback so candidates can rehearse answers before real interviews.",
        "The goal was a focused tool—not a generic chat UI—that mirrors how interview loops actually progress from warm-up to deeper system questions.",
      ],
    },
    {
      id: "problem",
      type: "text",
      title: "Problem",
      paragraphs: [
        "Most interview prep tools either dump question lists or offer unstructured AI chat. Candidates struggle to track progress, identify weak areas, and get actionable feedback on their reasoning.",
      ],
    },
    {
      id: "solution",
      type: "bullets",
      title: "Solution",
      items: [
        "Session-based practice flows grouped by topic and difficulty",
        "AI feedback on clarity, completeness, and technical accuracy",
        "Progress tracking across completed sessions",
        "Responsive UI optimized for long-form reading and note-taking",
      ],
    },
    {
      id: "architecture",
      type: "text",
      title: "Architecture",
      paragraphs: [
        "The frontend is built with Next.js App Router and TypeScript. API routes handle AI orchestration while keeping provider keys server-side. State is scoped per session to keep the UX predictable and debuggable.",
      ],
    },
    {
      id: "outcomes",
      type: "metrics",
      title: "Outcomes",
      items: [
        { label: "Stack", value: "Next.js + TypeScript" },
        { label: "Focus", value: "Interview practice UX" },
        { label: "Status", value: "Active development" },
      ],
    },
    {
      id: "challenges",
      type: "bullets",
      title: "Challenges",
      items: [
        "Balancing AI flexibility with structured interview formats",
        "Keeping latency acceptable for multi-turn feedback loops",
        "Designing UI that works for both quick drills and deep dives",
      ],
    },
    {
      id: "lessons",
      type: "bullets",
      title: "Lessons Learned",
      items: [
        "Constrain AI flows early—open-ended chat is harder to evaluate",
        "Invest in session state modeling before adding more features",
        "Ship a narrow vertical slice before expanding question types",
      ],
    },
  ],
};
