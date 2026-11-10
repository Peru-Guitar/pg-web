/* eslint-disable @next/next/no-img-element */
import { Artist, artistInitials } from "@/content/artists";

export const ArtistAvatar = ({
  artist,
  className = "",
}: {
  artist: Artist;
  className?: string;
}) =>
  artist.photo ? (
    <img
      src={artist.photo}
      alt={artist.name}
      width={800}
      height={800}
      loading="lazy"
      className={`aspect-square object-cover ${className}`}
    />
  ) : (
    <div
      aria-hidden="true"
      className={`flex aspect-square items-center justify-center bg-gradient-to-br from-brand to-night font-extrabold tracking-tight text-white ${className}`}
    >
      {artistInitials(artist.name)}
    </div>
  );
