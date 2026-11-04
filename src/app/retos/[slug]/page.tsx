import { notFound } from "next/navigation";
import { Instagram, MessageCircle } from "lucide-react";
import { CHALLENGES, getChallenge, getChallengeCover } from "@/content/challenges";
import settings from "@/content/settings.json";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/layout/Hero";
import { Button } from "@/components/ui/Button";
import { ChallengeNotes } from "@/components/ui/ChallengeNotes";
import { ChallengeVideo } from "@/components/ui/ChallengeVideo";
import { CopyButton } from "@/components/ui/CopyButton";
import { pageMetadata } from "@/lib/metadata";

const WHATSAPP_URL = "https://chat.whatsapp.com/BqVeyGhXMGO2XkdD424Z7o?mode=gi_t";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () =>
  CHALLENGES.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps) {
  const challenge = getChallenge((await params).slug);
  if (!challenge) return {};

  return pageMetadata({
    title: `Reto #${challenge.number}: ${challenge.title}`,
    description: challenge.description,
    path: `/retos/${challenge.slug}`,
    image: getChallengeCover(challenge),
  });
}

export default async function ChallengePage({ params }: PageProps) {
  const challenge = getChallenge((await params).slug);
  if (!challenge) notFound();

  return (
    <article>
      <Hero
        eyebrow={
          <span className="inline-block rounded-pill bg-brand px-3 py-1 text-xs font-semibold text-white normal-case tracking-normal">
            Reto #{challenge.number}
          </span>
        }
        title={challenge.title}
        description={challenge.description}
        image={getChallengeCover(challenge)}
        narrow
      >
        <p className="text-sm text-on-night-muted">
          {challenge.artist} · {challenge.section}
        </p>
      </Hero>

      <Container narrow className="py-16">
        <ChallengeVideo
          id={challenge.youtubeId}
          title={`Video del reto: ${challenge.title}`}
          {...challenge.range}
        />

        <h2 className="mb-4 mt-12 text-2xl font-bold">Cómo sacarlo</h2>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          {challenge.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold">Comparte tu versión</h2>
        <p className="mb-4">
          Grábate en un reel, publícalo en Instagram y etiqueta a{" "}
          <strong>@peruguitar</strong>. Puedes usar este texto:
        </p>
        <div className="mb-4 rounded-card border border-line bg-surface p-5">
          {challenge.caption}
        </div>
        <div className="flex flex-wrap gap-3">
          <CopyButton text={challenge.caption} />
          <Button href={settings.instagramUrl} variant="outline" external>
            <Instagram size={16} /> Ir a Instagram
          </Button>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold">Recibe feedback</h2>
        <p className="mb-4">
          También puedes compartirlo en el grupo de WhatsApp, y entre todos nos
          vamos dando feedback.
        </p>
        <Button href={WHATSAPP_URL} variant="outline" external>
          <MessageCircle size={16} /> Unirme al grupo
        </Button>

        <ChallengeNotes />
      </Container>
    </article>
  );
}
