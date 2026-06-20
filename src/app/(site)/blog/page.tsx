import type { Metadata } from "next";

import { CollectionIndexPage } from "@/components/publishing/CollectionIndexPage";
import { allBlogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Articles on frontend development, Next.js, and building products for the web.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <CollectionIndexPage
      title="Blog"
      description="Longer-form writing on web development, tools, and product-minded frontend work."
      posts={allBlogPosts}
      collection="blog"
      emptyMessage="No blog posts published yet."
    />
  );
}
