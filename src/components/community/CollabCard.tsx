/* eslint-disable @next/next/no-img-element */
import { Play } from "lucide-react";
import { Video } from "@/content/media";

export const CollabCard = ({ video }: { video: Video }) => (
  <a
    href={`https://www.youtube.com/watch?v=${video.id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface"
  >
    <div className="relative aspect-video bg-night">
      <img
        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-night/20 transition-colors group-hover:bg-night/40">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
          <Play size={20} fill="currentColor" />
        </span>
      </div>
    </div>
    <div className="flex flex-col gap-2 p-5">
      <h3 className="font-bold group-hover:text-brand">{video.title}</h3>
      <p className="text-sm text-ink-muted">{video.description}</p>
    </div>
  </a>
);
