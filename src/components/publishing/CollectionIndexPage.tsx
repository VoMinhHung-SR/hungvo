import { PostCard } from "@/components/publishing/PostCard";
import { PageIntro } from "@/components/ui/PageIntro";
import type { PostCollection, PostMeta } from "@/types/content";

interface CollectionIndexPageProps {
  title: string;
  description: string;
  posts: readonly PostMeta[];
  collection: PostCollection;
  emptyMessage: string;
}

export function CollectionIndexPage({
  title,
  description,
  posts,
  collection,
  emptyMessage,
}: CollectionIndexPageProps) {
  return (
    <div className="flex max-w-reading flex-col gap-10">
      <PageIntro as="div" title={title} description={description} className="mb-0" />

      {posts.length === 0 ? (
        <p className="text-muted">{emptyMessage}</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} collection={collection} />
          ))}
        </div>
      )}
    </div>
  );
}
