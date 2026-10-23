import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

// Legacy category URLs (peruguitar.com/c/<id>) → /blog/categoria/<id>, to keep SEO.
interface Props {
  params: Promise<{ id: string }>;
}

const LEGACY_CATEGORIES: Record<string, string> = {
  guitar: "/blog/categoria/guitar",
  theory: "/blog/categoria/theory",
  reflections: "/blog/categoria/reflections",
  production: "/blog/categoria/production",
  resources: "/recursos",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(LEGACY_CATEGORIES).map((id) => ({ id }));
}

export default async function LegacyCategoryRedirect({ params }: Props) {
  const { id } = await params;
  return <LegacyRedirect to={LEGACY_CATEGORIES[id]} />;
}
