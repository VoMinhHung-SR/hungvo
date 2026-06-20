import { getAllNoteSlugs, getNoteBySlug } from "@/lib/content";
import { createPostArticlePage } from "@/lib/publishing/post-article-page";

const { default: PostArticlePage, generateMetadata, generateStaticParams } =
  createPostArticlePage({
    collection: "notes",
    eyebrow: "Note",
    getPostBySlug: getNoteBySlug,
    getAllSlugs: getAllNoteSlugs,
  });

export const dynamicParams = false;

export { generateMetadata, generateStaticParams };
export default PostArticlePage;
