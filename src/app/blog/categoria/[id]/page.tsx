import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";

import { POST_CATEGORIES } from "@/content/categories";
import { PostCategory } from "@/content/types";
import { getPostsByCategory } from "@/lib/posts";
import { PostGrid } from "@/components/ui/PostGrid";

interface Props {
  params: Promise<{ id: PostCategory }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(POST_CATEGORIES).map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = POST_CATEGORIES[id];
  return category
    ? { title: category.name, description: category.description }
    : {};
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const category = POST_CATEGORIES[id];
  if (!category) notFound();

  return (
    <Container className="py-16">
      <h1 className="text-4xl font-extrabold">{category.name}</h1>
      <p className="mb-8 mt-2 text-ink-muted">{category.description}</p>
      <PostGrid posts={getPostsByCategory(id)} activeCategory={id} />
    </Container>
  );
}
