declare module "*.mdx" {
  import type { Element, MDXProps } from "mdx/types";
  import type { PostMeta } from "@/types/content";

  export default function MDXContent(props: MDXProps): Element;
  export const meta: PostMeta;
}
