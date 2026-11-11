import { notFound } from "next/navigation";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { CHALLENGES, getChallenge, getChallengeCover } from "@/content/challenges";
import { ChallengeLevelBadge } from "@/components/ui/ChallengeLevelBadge";
import settings from "@/content/settings.json";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/layout/Hero";
import { Button } from "@/components/ui/Button";
import { ChallengeNotes } from "@/components/ui/ChallengeNotes";
import { ChallengeVideo } from "@/components/ui/ChallengeVideo";
import { CopyButton } from "@/components/ui/CopyButton";
import { pageMetadata } from "@/lib/metadata";

import { WHATSAPP_URL } from "@/content/community";

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
    path: `/comunidad/retos/${challenge.slug}`,
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
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-on-night-muted">
          <span>
            {challenge.artist} · {challenge.section}
          </span>
          <ChallengeLevelBadge level={challenge.level} className="text-accent" />
        </p>
      </Hero>

      <Container narrow className="py-16">
        <ChallengeVideo
          id={challenge.youtubeId}
          title={`Video del reto: ${challenge.title}`}
          {...challenge.range}
        />

        {challenge.fretQuestUrl && (
          <a
            href={challenge.fretQuestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group -mt-2 flex items-center gap-4 rounded-card border border-night-line bg-night p-5 text-on-night transition-colors hover:border-amber-400"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
              <Sparkles size={20} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-bold">Practícalo en Fret Quest</span>
              <span className="block text-sm text-on-night-muted">
                El lick del reto como ejercicio, para sacarlo paso a paso.
              </span>
            </span>
            <ArrowRight
              size={18}
              className="shrink-0 text-amber-400 transition-transform group-hover:translate-x-1"
            />
          </a>
        )}

        <h2 className="mb-4 mt-12 text-2xl font-bold">Sobre la canción</h2>
        <p>{challenge.about}</p>

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
            <InstagramIcon size={16} /> Ir a Instagram
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
