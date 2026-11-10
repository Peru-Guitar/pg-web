/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Guitar, AudioLines, Users, Lightbulb } from "lucide-react";
import { Post } from "@/content/types";
import { formatDate } from "@/lib/posts";
import { CategoryTag } from "./CategoryTag";

const icons = {
  guitar: Guitar,
  reflections: Lightbulb,
  production: AudioLines,
  events: Users,
};

/** `row` puts the cover on the left and the text on the right. */
export const PostCard = ({
  post,
  layout = "card",
}: {
  post: Post;
  layout?: "card" | "row";
}) => {
  const row = layout === "row";
  const Icon = icons[post.category];
  return (
    <article
      className={`post-card flex overflow-hidden rounded-card border border-line bg-surface ${row ? "flex-row" : "flex-col"}`}
    >
      <Link
        href={`/blog/${post.id}`}
        aria-label={`Leer ${post.title}`}
        className={`relative block shrink-0 overflow-hidden bg-night ${row ? "w-2/5 self-stretch" : "aspect-video"}`}
      >
        {!post.cover && (
          <div
            data-category={post.category}
            className="post-art flex h-full items-center justify-center text-accent"
          >
            <Icon size={row ? 40 : 58} strokeWidth={1} aria-hidden="true" />
            <span className="absolute bottom-4 left-4 hidden sm:block text-[10px] font-bold uppercase tracking-[.2em] opacity-60">
              PeruGuitar / Editorial
            </span>
          </div>
        )}
        {post.cover && (
          <img
            src={post.cover}
            alt=""
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col gap-2 p-4">
        <div>
          <CategoryTag category={post.category} />
        </div>
        <Link
          href={`/blog/${post.id}`}
          className="font-semibold hover:text-brand"
        >
          {post.title}
        </Link>
        <time
          dateTime={post.date.toISOString()}
          className="mt-auto text-sm text-ink-muted"
        >
          {formatDate(post.date)}
        </time>
      </div>
    </article>
  );
};
