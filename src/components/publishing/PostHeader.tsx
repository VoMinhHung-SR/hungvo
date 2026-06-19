import { Badge } from "@/components/ui/Badge";
import { MetaRow } from "@/components/ui/MetaRow";
import { PageIntro } from "@/components/ui/PageIntro";
import { formatPostDate } from "@/lib/publishing/format-post-date";
import type { PostMeta } from "@/types/content";

interface PostHeaderProps {
  post: PostMeta;
  eyebrow: string;
}

export function PostHeader({ post, eyebrow }: PostHeaderProps) {
  return (
    <PageIntro
      eyebrow={eyebrow}
      title={post.title}
      description={post.description}
    >
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
      {post.tags?.length ? (
        <ul className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      ) : null}
    </PageIntro>
  );
}
