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

export const PostCard = ({ post }: { post: Post }) => {
  const Icon = icons[post.category];
  return (
    <article className="post-card flex flex-col overflow-hidden rounded-card border border-line bg-surface">
      <Link
        href={`/blog/${post.id}`}
        aria-label={`Leer ${post.title}`}
        className="relative block aspect-video overflow-hidden bg-night"
      >
        {!post.cover && (
          <div
            data-category={post.category}
            className="post-art flex h-full items-center justify-center text-accent"
          >
            <Icon size={58} strokeWidth={1} aria-hidden="true" />
            <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[.2em] opacity-60">
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

      <div className="flex flex-1 flex-col gap-2 p-4">
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
