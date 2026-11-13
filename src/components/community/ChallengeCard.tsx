/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Challenge, getChallengeCover } from "@/content/challenges";
import { ChallengeLevelBadge } from "@/components/ui/ChallengeLevelBadge";

/** Challenge card; `row` puts the cover beside the text on wide screens. */
export const ChallengeCard = ({
  challenge,
  layout = "stacked",
}: {
  challenge: Challenge;
  layout?: "stacked" | "row";
}) => {
  const row = layout === "row";
  return (
    <Link
      href={`/comunidad/retos/${challenge.slug}`}
      className={`group flex flex-col overflow-hidden rounded-card border border-night-line bg-night text-on-night transition-colors hover:border-brand ${row ? "sm:flex-row" : ""}`}
    >
      <img
        src={getChallengeCover(challenge)}
        alt=""
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
        className={`aspect-video w-full object-cover ${row ? "sm:aspect-auto sm:w-2/5 sm:shrink-0" : ""}`}
      />
      <div className="flex flex-1 flex-col gap-1 p-5">
        <div className="mb-1 flex items-center justify-between gap-3">
          <span className="inline-block rounded-pill bg-brand px-3 py-1 text-xs font-semibold text-white">
            Reto #{challenge.number}
          </span>
          <ChallengeLevelBadge level={challenge.level} className="text-on-night-muted" />
        </div>
        <h3 className="text-xl font-bold">{challenge.title}</h3>
        <p className="text-sm font-medium">{challenge.artist}</p>
        <p className="mt-2 text-sm text-on-night-muted">{challenge.description}</p>
        <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-accent">
          Ver reto
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};
