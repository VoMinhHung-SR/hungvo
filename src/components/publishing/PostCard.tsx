import { Badge } from "@/components/ui/Badge";
import { ContentCard } from "@/components/ui/ContentCard";
import { InternalLink } from "@/components/ui/Link";
import { MetaRow } from "@/components/ui/MetaRow";
import { formatPostDate } from "@/lib/publishing/format-post-date";
import type { PostCollection, PostMeta } from "@/types/content";

interface PostCardProps {
  post: PostMeta;
  collection: PostCollection;
}

export function PostCard({ post, collection }: PostCardProps) {
  const tags = post.tags?.slice(0, 3) ?? [];

  return (
    <ContentCard as="article" hover className="group flex flex-col gap-3">
      <InternalLink href={`/${collection}/${post.slug}`} className="w-fit">
        <h2 className="text-xl font-semibold text-foreground transition-colors duration-150 group-hover:text-accent">
          {post.title}
        </h2>
      </InternalLink>
      <p className="text-muted">{post.description}</p>
      <MetaRow
        items={[
          {
            value: (
              <time dateTime={post.seo.publishedAt}>
                {formatPostDate(post.seo.publishedAt)}
              </time>
            ),
          },
        ]}
      />
      {tags.length > 0 ? (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      ) : null}
    </ContentCard>
  );
}
