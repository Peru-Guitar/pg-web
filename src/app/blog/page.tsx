import { Metadata } from "next";
import { POSTS } from "@/content";
import { PostGrid } from "@/components/ui/PostGrid";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre guitarra, teoría, producción y más.",
};

export default function BlogPage() {
  return (
    <Container className="py-16">
      <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-brand">
        El lado musical de las ideas
      </p>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
        El blog de PeruGuitar.
      </h1>
      <p className="mb-10 max-w-xl text-lg text-ink-muted">
        Técnica, reflexiones y experiencias para seguir creciendo como
        guitarrista.
      </p>
      <PostGrid posts={POSTS} />
    </Container>
  );
}
