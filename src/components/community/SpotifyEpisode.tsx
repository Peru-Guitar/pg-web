"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { SpotifyIcon } from "@/components/ui/BrandIcons";

/**
 * Lightweight stand-in for the Spotify embed: each iframe loads a whole
 * Spotify app, so it is only mounted after the visitor clicks play.
 */
export const SpotifyEpisode = ({
  id,
  title,
  number,
}: {
  id: string;
  title: string;
  number: number;
}) => {
  const [active, setActive] = useState(false);

  if (active)
    return (
      <iframe
        src={`https://open.spotify.com/embed/episode/${id}?autoplay=1`}
        title={title}
        height={152}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="w-full rounded-card border-0"
      />
    );

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Escuchar episodio ${number}: ${title}`}
      className={`group relative isolate flex h-[152px] w-full items-center gap-5 overflow-hidden rounded-card bg-gradient-to-br p-5 text-left text-on-night ring-1 ring-night-line transition-colors hover:ring-brand ${number % 2 ? "from-night via-night to-[color-mix(in_srgb,var(--color-brand-strong)_75%,black)]" : "from-night via-night to-[color-mix(in_srgb,var(--color-accent)_50%,black)]"}`}
    >
      {/* Soft glow and sound-wave bars for some texture */}
      <span
        aria-hidden
        className={`absolute -right-10 -top-16 -z-10 size-48 rounded-full blur-3xl transition-opacity group-hover:opacity-90 ${number % 2 ? "bg-brand" : "bg-accent"} opacity-30`}
      />
      <span aria-hidden className="absolute bottom-0 right-5 -z-10 flex h-20 items-end gap-1 opacity-20">
        {[40, 70, 55, 90, 35, 75, 50, 85, 45, 65].map((h, i) => (
          <i key={i} className="w-1.5 rounded-t-full bg-on-night" style={{ height: `${h}%` }} />
        ))}
      </span>
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-black/40 transition-transform group-hover:scale-105">
        <Play size={26} fill="currentColor" className="translate-x-0.5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-bold uppercase tracking-widest text-accent">
          Episodio {number}
        </span>
        <span className="mt-1 line-clamp-2 block text-lg font-bold leading-snug">
          {title}
        </span>
        <span className="mt-2 flex items-center gap-1.5 text-sm text-on-night-muted">
          <SpotifyIcon size={14} /> Escuchar en Spotify
        </span>
      </span>
    </button>
  );
};
