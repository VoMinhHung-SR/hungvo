import type { Metadata } from "next";

import { siteConfig } from "@/content/site.config";

const defaultOgImage = "/og/default.png";

export interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    path = "",
    image = defaultOgImage,
    type = "website",
  } = options;

  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(image, siteConfig.url).toString();

  return {
    title: pageTitle,
    description,
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [{ url: imageUrl, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  };
}

export { siteConfig, defaultOgImage };
