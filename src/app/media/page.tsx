/* eslint-disable @next/next/no-img-element */
import { pageMetadata } from "@/lib/metadata";
import { Play } from "lucide-react";

import { PODCAST_EPISODES, VIDEOS } from "@/content/media";
import { youtubeUrl } from "@/content/settings.json";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = pageMetadata({
  title: "Media",
  description: "Collabs de la comunidad, entrevistas y el podcast de Peru Guitar.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-2 text-4xl font-extrabold">Media</h1>
      <p className="mb-12 text-ink-muted">
        Collabs de la comunidad, entrevistas y nuestro podcast.
      </p>

      <SectionHeader
        title="Collabs"
        link={{ label: "Ver canal de YouTube", href: youtubeUrl }}
      />
      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-card border border-line bg-surface"
          >
            <div className="relative aspect-video bg-night">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-night/20 transition-colors group-hover:bg-night/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Play size={20} fill="currentColor" />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <h2 className="font-bold group-hover:text-brand">
                {video.title}
              </h2>
              <p className="text-sm text-ink-muted">{video.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div id="podcasts" className="scroll-mt-24">
        <SectionHeader title="Podcast" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {[...PODCAST_EPISODES].reverse().map((episode) => (
          <div key={episode.id}>
            <p className="mb-2 text-sm font-semibold text-ink-muted">
              Episodio {PODCAST_EPISODES.indexOf(episode) + 1} · {episode.title}
            </p>
            <iframe
              src={`https://open.spotify.com/embed/episode/${episode.id}`}
              title={episode.title}
              height={152}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="w-full rounded-card border-0"
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
