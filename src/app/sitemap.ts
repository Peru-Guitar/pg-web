import { ARTISTS } from "@/content/artists";
import { MetadataRoute } from "next";
import { POSTS } from "@/content";
import { CHALLENGES } from "@/content/challenges";
import { PRODUCTS } from "@/content/products";
import { POST_CATEGORIES } from "@/content/categories";
import { SITE_URL } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/blog`, lastModified: new Date() },
    { url: `${SITE_URL}/comunidad`, lastModified: new Date() },
    { url: `${SITE_URL}/artistas`, lastModified: new Date() },
    ...ARTISTS.map(({ slug }) => ({ url: `${SITE_URL}/artistas/${slug}` })),
    { url: `${SITE_URL}/retos`, lastModified: new Date() },
    { url: `${SITE_URL}/tienda`, lastModified: new Date() },
    { url: `${SITE_URL}/acerca-de-nosotros` },
    { url: `${SITE_URL}/recursos/no-mas-arpegios-aburridos` },
    ...CHALLENGES.map(({ slug }) => ({ url: `${SITE_URL}/retos/${slug}` })),
    ...PRODUCTS.map((product) => ({ url: `${SITE_URL}/tienda/${product.id}` })),
    ...Object.keys(POST_CATEGORIES).map((id) => ({
      url: `${SITE_URL}/blog/categoria/${id}`,
    })),
    ...POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.id}`,
      lastModified: post.date,
    })),
  ];
}
