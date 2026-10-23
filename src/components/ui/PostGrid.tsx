import Link from "next/link";
import { POST_CATEGORIES } from "@/content/categories";
import { Post, PostCategory } from "@/content/types";
import { PostCard } from "./PostCard";

interface PostGridProps {
  posts: Post[];
  activeCategory?: PostCategory;
}

const pill = (active: boolean) =>
  `rounded-pill px-4 py-1.5 text-sm ${
    active ? "bg-night text-on-night" : "text-ink-muted hover:text-ink"
  }`;

export const PostGrid = ({ posts, activeCategory }: PostGridProps) => (
  <>
    <nav className="mb-8 flex flex-wrap gap-2">
      <Link href="/blog" className={pill(!activeCategory)}>
        Todos
      </Link>
      {(Object.keys(POST_CATEGORIES) as PostCategory[]).map((id) => (
        <Link
          key={id}
          href={`/blog/categoria/${id}`}
          className={pill(activeCategory === id)}
        >
          {POST_CATEGORIES[id].name}
        </Link>
      ))}
    </nav>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  </>
);
