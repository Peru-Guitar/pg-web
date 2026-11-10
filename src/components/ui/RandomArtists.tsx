"use client";

import { useEffect, useState } from "react";
import { ARTISTS } from "@/content/artists";
import { ArtistRow } from "./ArtistRow";

const COUNT = 6;

/** Six artists picked at random on each visit. */
export const RandomArtists = () => {
  // Static export: render the first ones, then shuffle in the browser.
  const [artists, setArtists] = useState(ARTISTS.slice(0, COUNT));

  useEffect(() => {
    const shuffled = [...ARTISTS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setArtists(shuffled.slice(0, COUNT));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {artists.map((artist) => (
        <ArtistRow key={artist.slug} artist={artist} />
      ))}
    </div>
  );
};
