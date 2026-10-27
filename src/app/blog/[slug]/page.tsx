import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { isValidElement, type ReactNode } from "react";
import { PostCard } from "@/components/ui/PostCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { POSTS } from "@/content";
import { formatDate, getPost } from "@/lib/posts";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/layout/Hero";
import { CategoryTag } from "@/components/ui/CategoryTag";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date.toISOString(),
      authors: post.author,
      images: [post.cover],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

const WORDS_PER_MINUTE = 200;

const getText = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return ` ${node} `;
  if (Array.isArray(node)) return node.map(getText).join("");
  if (isValidElement<{ children?: ReactNode }>(node))
    return getText(node.props.children);
  return "";
};

const getReadingMinutes = (Content: () => ReactNode) => {
  const words = getText(Content()).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Content = post.content;

  return (
    <article>
      <Hero
        eyebrow={<CategoryTag category={post.category} />}
        title={post.title}
        description={post.description}
        image={post.cover}
        narrow
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-on-night-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={16} aria-hidden />
            <time dateTime={post.date.toISOString()}>
              {formatDate(post.date)}
            </time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={16} aria-hidden />
            {getReadingMinutes(post.content)} min de lectura
          </span>
        </div>
      </Hero>

      <Container narrow className="py-16">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-brand"
        >
          <ArrowLeft size={16} /> Volver al blog
        </Link>
        <div className="prose prose-lg max-w-none prose-a:text-brand">
          <Content />
        </div>
      </Container>
      <Container className="border-t border-line pt-12">
        <h2 className="mb-6 text-2xl font-bold">Sigue explorando</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.filter((related) => related.id !== post.id)
            .sort(
              (a, b) =>
                Number(b.category === post.category) -
                Number(a.category === post.category),
            )
            .slice(0, 3)
            .map((related) => (
              <PostCard key={related.id} post={related} />
            ))}
        </div>
      </Container>
    </article>
  );
}
