/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CHALLENGES, getChallengeCover } from "@/content/challenges";
import { ChallengeLevelBadge } from "@/components/ui/ChallengeLevelBadge";
import { Container } from "@/components/layout/Container";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Retos",
  description:
    "Retos de guitarra de la comunidad Peru Guitar para practicar, compartir y mejorar juntos.",
  path: "/comunidad/retos",
});

export default function ChallengesPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-2 text-4xl font-extrabold">Retos</h1>
      <p className="mb-12 max-w-2xl text-ink-muted">
        Saca un lick o un pedacito de una canción, grábate y compártelo. Aquí no
        hay ganadores: es una forma sana de practicar y mejorar en comunidad.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {CHALLENGES.map((challenge) => (
          <Link
            key={challenge.slug}
            href={`/comunidad/retos/${challenge.slug}`}
            className="group flex flex-col overflow-hidden sm:flex-row rounded-card border border-night-line bg-night text-on-night transition-colors hover:border-brand"
          >
            <img
              src={getChallengeCover(challenge)}
              alt=""
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full object-cover sm:aspect-auto sm:w-2/5 sm:shrink-0"
            />
            <div className="flex flex-1 flex-col gap-1 p-5">
              <div className="mb-1 flex items-center gap-3">
                <span className="inline-block rounded-pill bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Reto #{challenge.number}
                </span>
                <ChallengeLevelBadge level={challenge.level} className="text-ink-muted" />
              </div>
              <h2 className="text-xl font-bold">{challenge.title}</h2>
              <p className="text-sm font-medium">{challenge.artist}</p>
              <p className="mt-2 text-sm text-on-night-muted">
                {challenge.description}
              </p>
              <span className="mt-auto flex pt-4 items-center gap-1 text-sm font-semibold text-accent">
                Ver reto
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
