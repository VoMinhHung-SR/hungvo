import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/content";
import { createPostArticlePage } from "@/lib/publishing/post-article-page";

const { default: PostArticlePage, generateMetadata, generateStaticParams } =
  createPostArticlePage({
    collection: "blog",
    eyebrow: "Blog",
    getPostBySlug: getBlogPostBySlug,
    getAllSlugs: getAllBlogSlugs,
  });

export const dynamicParams = false;

export { generateMetadata, generateStaticParams };
export default PostArticlePage;
