import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Artist } from "@/content/artists";
import { ArtistAvatar } from "./ArtistAvatar";

export const ArtistCard = ({ artist }: { artist: Artist }) => (
  <Link
    href={`/artistas/${artist.slug}`}
    className="group flex flex-col overflow-hidden rounded-card border border-night-line bg-night-surface text-on-night transition-colors hover:border-brand"
  >
    <ArtistAvatar artist={artist} className="w-full text-6xl" />
    <div className="flex flex-1 flex-col gap-1 p-5">
      <h3 className="text-xl font-bold">{artist.name}</h3>
      <p className="text-sm text-on-night-muted">{artist.tagline}</p>
      <span className="mt-auto flex items-center gap-1 pt-3 text-sm font-semibold text-accent">
        Ver perfil{" "}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </div>
  </Link>
);
