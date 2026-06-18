import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PostHeader } from "@/components/publishing/PostHeader";
import { getPostMetadata } from "@/lib/content/post-metadata";
import { proseClasses } from "@/lib/publishing/prose-classes";
import { createMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/structured-data";
import type { PostCollection, PostEntry } from "@/types/content";

interface CreatePostArticlePageConfig {
  collection: PostCollection;
  eyebrow: string;
  getPostBySlug: (slug: string) => PostEntry | undefined;
  getAllSlugs: () => string[];
}

export function createPostArticlePage({
  collection,
  eyebrow,
  getPostBySlug,
  getAllSlugs,
}: CreatePostArticlePageConfig) {
  async function PostArticlePage({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
      notFound();
    }

    const metadata = getPostMetadata(post, collection);
    const { Content } = post;
    const structuredData = articleSchema({
      title: metadata.title,
      description: metadata.description,
      path: metadata.path,
      datePublished: post.seo.publishedAt,
      dateModified: post.seo.updatedAt,
      image: metadata.image,
      keywords: post.seo.keywords ?? [],
      about: post.tags,
    });

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <PostHeader post={post} eyebrow={eyebrow} />
        <div className={proseClasses}>
          <Content />
        </div>
      </>
    );
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
      return createMetadata({ title: "Not Found" });
    }

    const metadata = getPostMetadata(post, collection);

    return createMetadata({
      title: metadata.title,
      description: metadata.description,
      path: metadata.path,
      image: metadata.image,
      type: "article",
    });
  }

  function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
  }

  return {
    default: PostArticlePage,
    generateMetadata,
    generateStaticParams,
  };
}
