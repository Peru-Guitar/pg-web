import { POSTS } from "@/content";
import { PostCategory } from "@/content/types";

export const SITE_URL = "https://peruguitar.com";

export const getPost = (slug: string) => POSTS.find((p) => p.id === slug);

export const getPostsByCategory = (category: PostCategory) =>
  POSTS.filter((p) => p.category === category);

export const getLatestPosts = (count: number) => POSTS.slice(0, count);

export const formatDate = (date: Date) =>
  date.toLocaleDateString("es-PE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
