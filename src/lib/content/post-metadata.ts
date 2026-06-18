import type { PostCollection, PostMeta } from "@/types/content";
import { defaultOgImage } from "@/lib/seo/metadata";

export function getPostMetadata(post: PostMeta, collection: PostCollection) {
  return {
    title: post.title,
    description: post.description,
    image: post.seo.ogImage ?? defaultOgImage,
    path: `/${collection}/${post.slug}`,
  };
}
