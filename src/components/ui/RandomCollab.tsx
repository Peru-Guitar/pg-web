"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { VIDEOS } from "@/content/media";

/** Community collab card that shows a random collab on each visit. */
export const RandomCollab = () => {
  // Static export: render the newest one first, then pick at random in the browser.
  const [collab, setCollab] = useState(VIDEOS[0]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCollab(VIDEOS[Math.floor(Math.random() * VIDEOS.length)]);
  }, []);

  return (
    <a
      href={`https://www.youtube.com/watch?v=${collab.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-card bg-gradient-to-br from-brand to-brand-strong text-white shadow-2xl ring-1 ring-black/10 transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-video">
        <img
          src={`https://img.youtube.com/vi/${collab.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-night/30 transition-colors group-hover:bg-night/50">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand">
            <Play size={20} fill="currentColor" />
          </span>
        </div>
      </div>
      <p className="px-5 py-4 font-bold">{collab.title}</p>
    </a>
  );
};
