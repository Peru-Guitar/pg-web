import { LegacyRedirect } from "@/components/layout/LegacyRedirect";
import { CHALLENGES } from "@/content/challenges";

// Challenges now live under /comunidad/retos.
interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => CHALLENGES.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps) {
  return { alternates: { canonical: `/comunidad/retos/${(await params).slug}` } };
}

export default async function LegacyChallengePage({ params }: PageProps) {
  return <LegacyRedirect to={`/comunidad/retos/${(await params).slug}`} />;
}
