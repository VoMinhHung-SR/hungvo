import type { CaseStudy } from "@/types/content";

const slug = "oupharmacy-store" as const;
const imageBase = `/images/projects/${slug}`;

export const oupharmacyStore: CaseStudy = {
  slug,
  title: "OUPharmacy Store",
  description:
    "The online shop for OUPharmacy—customers browse medicines by category, order with confidence, and manage their account in one place. Inventory and orders stay in sync with the clinic back-office.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Frontend Developer",
  timeline: "2025 – 2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "OUPharmacy Store product catalog and checkout",
  seo: {
    publishedAt: "2025-08-10",
    updatedAt: "2026-06-01",
    ogImage: `${imageBase}/hero.png`,
    keywords: [
      "pharmacy storefront",
      "Next.js",
      "e-commerce",
      "TypeScript",
      "OUPharmacy",
    ],
  },
  repoUrl: "https://github.com/VoMinhHung-SR/oupharmacy-store",
  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "OUPharmacy Store is where customers shop—the public face of the OUPharmacy platform. People find products, add to cart, check out, and track orders without calling the clinic.",
        "It works as one product family with the staff admin app: what staff manage behind the counter shows up accurately for shoppers online.",
      ],
    },
    {
      id: "solution",
      type: "bullets",
      title: "Key features",
      items: [
        "Browse by category, search products, save favorites",
        "Cart, checkout, and order history in a familiar e-commerce flow",
        "Account hub: addresses, payments, profile, notifications",
        "Bilingual experience (next-intl) for local customers",
      ],
    },
    {
      id: "stack",
      type: "bullets",
      title: "Built with",
      items: [
        "Next.js 14 App Router, TypeScript, Tailwind CSS",
        "TanStack Query, react-hook-form, OUPharmacy REST APIs",
      ],
    },
  ],
};
