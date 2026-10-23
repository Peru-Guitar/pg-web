import { LegacyRedirect } from "@/components/layout/LegacyRedirect";
import { POSTS } from "@/content";

// Legacy URLs (peruguitar.com/<slug>) → /blog/<slug>, to keep SEO.
interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...POSTS.map((post) => ({ slug: post.id })),
    { slug: "alone-backing-track" },
    { slug: "two-worlds-backing-track" },
  ];
}

export default async function LegacyPostRedirect({ params }: Props) {
  const { slug } = await params;
  if (["alone-backing-track", "two-worlds-backing-track"].includes(slug))
    return <LegacyRedirect to={`/recursos#${slug}`} />;
  return <LegacyRedirect to={`/blog/${slug}`} />;
}
