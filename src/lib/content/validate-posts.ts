import type { PostCollection, PostMeta } from "@/types/content";

function validateSlug(collection: PostCollection, post: PostMeta) {
  if (!post.slug.trim()) {
    throw new Error(`[${collection}:${post.slug || "unknown"}] slug is required`);
  }
}

function validateSeo(collection: PostCollection, post: PostMeta) {
  const { seo } = post;

  if (!seo.publishedAt) {
    throw new Error(`[${collection}:${post.slug}] seo.publishedAt is required`);
  }

  if (!seo.updatedAt) {
    throw new Error(`[${collection}:${post.slug}] seo.updatedAt is required`);
  }

  if (seo.publishedAt > seo.updatedAt) {
    throw new Error(
      `[${collection}:${post.slug}] seo.publishedAt must be on or before seo.updatedAt`,
    );
  }

  if (seo.keywords !== undefined && seo.keywords.length === 0) {
    throw new Error(
      `[${collection}:${post.slug}] seo.keywords must include at least one entry when provided`,
    );
  }
}

export function validatePosts(
  collection: PostCollection,
  posts: readonly PostMeta[],
) {
  const seenSlugs = new Set<string>();

  for (const post of posts) {
    validateSlug(collection, post);
    validateSeo(collection, post);

    if (seenSlugs.has(post.slug)) {
      throw new Error(`[${collection}] Duplicate slug: ${post.slug}`);
    }

    seenSlugs.add(post.slug);
  }
}
