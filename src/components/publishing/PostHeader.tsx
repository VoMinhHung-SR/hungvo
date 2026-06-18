import { Badge } from "@/components/ui/Badge";
import type { PostMeta } from "@/types/content";

interface PostHeaderProps {
  post: PostMeta;
  eyebrow: string;
}

function formatPostDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function PostHeader({ post, eyebrow }: PostHeaderProps) {
  return (
    <header className="mb-10 flex flex-col gap-4 border-b border-border pb-8">
      <p className="font-mono text-sm text-accent">{eyebrow}</p>
      <h1 className="text-section text-foreground">{post.title}</h1>
      <p className="text-lg text-muted">{post.description}</p>
      <time
        className="text-sm text-muted"
        dateTime={post.seo.publishedAt}
      >
        {formatPostDate(post.seo.publishedAt)}
      </time>
      {post.tags?.length ? (
        <ul className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
