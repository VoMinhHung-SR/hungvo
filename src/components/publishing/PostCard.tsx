import { InternalLink } from "@/components/ui/Link";
import type { PostCollection, PostMeta } from "@/types/content";

interface PostCardProps {
  post: PostMeta;
  collection: PostCollection;
}

function formatPostDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function PostCard({ post, collection }: PostCardProps) {
  return (
    <article className="flex flex-col gap-3 border-b border-border pb-8 last:border-b-0 last:pb-0">
      <InternalLink
        href={`/${collection}/${post.slug}`}
        className="group w-fit"
      >
        <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </h2>
      </InternalLink>
      <p className="text-muted">{post.description}</p>
      <time className="text-sm text-muted" dateTime={post.seo.publishedAt}>
        {formatPostDate(post.seo.publishedAt)}
      </time>
    </article>
  );
}
