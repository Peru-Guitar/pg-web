import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Artist } from "@/content/artists";
import { ArtistAvatar } from "./ArtistAvatar";

/** Compact horizontal card: photo on the left, name and tagline on the right. */
export const ArtistRow = ({ artist }: { artist: Artist }) => (
  <Link
    href={`/artistas/${artist.slug}`}
    className="group flex items-center gap-4 rounded-card bg-night-surface p-3 pr-5 text-on-night transition-transform hover:-translate-y-1"
  >
    <ArtistAvatar
      artist={artist}
      className="w-20 shrink-0 rounded-xl text-2xl sm:w-24"
    />
    <div className="min-w-0 flex-1">
      <h3 className="font-bold">{artist.name}</h3>
      <p className="line-clamp-2 text-sm text-on-night-muted">
        {artist.tagline}
      </p>
    </div>
    <ArrowRight
      size={18}
      className="shrink-0 text-accent transition-transform group-hover:translate-x-1"
    />
  </Link>
);
