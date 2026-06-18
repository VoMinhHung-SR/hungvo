import { PostCard } from "@/components/publishing/PostCard";
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
      <header className="flex flex-col gap-3">
        <h1 className="text-section font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="text-lg text-muted">{description}</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">{emptyMessage}</p>
      ) : (
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} collection={collection} />
          ))}
        </div>
      )}
    </div>
  );
}
