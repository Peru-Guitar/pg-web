/* eslint-disable @next/next/no-img-element */
import { BookOpen, Download, Play } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

import { PODCAST_EPISODES, VIDEOS } from "@/content/media";
import { BOOKS, RESOURCES } from "@/content/resources";
import { youtubeUrl } from "@/content/settings.json";
import { toDirectDownloadUrl } from "@/lib/drive";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = pageMetadata({
  title: "Recursos",
  description: "Ebooks, backing tracks, collabs de la comunidad y el podcast de Peru Guitar.",
  path: "/recursos",
});

const GRID = "flex flex-col gap-6";

const SECTIONS = [
  { id: "ebooks", label: "Ebooks" },
  { id: "backing-tracks", label: "Backing tracks" },
  { id: "collabs", label: "Collabs" },
  { id: "podcasts", label: "Podcast" },
];

export default function ResourcesPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-2 text-4xl font-extrabold">Recursos</h1>
      <p className="mb-6 text-ink-muted">
        Material gratuito para practicar, collabs de la comunidad y nuestro
        podcast.
      </p>

      <nav aria-label="Secciones" className="mb-12 flex flex-wrap gap-2">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="rounded-pill border border-line bg-surface px-4 py-2 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div id="ebooks" className="scroll-mt-24">
        <SectionHeader title="Ebooks" />
      </div>
      <div className={`mb-16 ${GRID}`}>
        {BOOKS.map((book) => (
          <ResourceCard
            key={book.id}
            id={book.id}
            type="ebook"
            title={book.name}
            description={book.description}
            specs={book.specs}
            media={
              <div className="h-full w-full bg-night">
                {book.cover && (
                  <img
                    src={book.cover}
                    alt="Primer plano del mástil y las manos de un guitarrista tocando arpegios"
                    width={1200}
                    height={1600}
                    className="h-full w-full object-cover object-[center_55%]"
                  />
                )}
              </div>
            }
            actions={
              <Button href={`/recursos/${book.id}`}>
                <BookOpen size={16} /> Leer la guía
              </Button>
            }
          />
        ))}
      </div>

      <div id="backing-tracks" className="scroll-mt-24">
        <SectionHeader title="Backing tracks" />
      </div>
      <div className={`mb-16 ${GRID}`}>
        {RESOURCES.map((track) => (
          <ResourceCard
            key={track.id}
            id={track.id}
            type="audio"
            title={track.name}
            description={track.description}
            specs={[
              { label: "Tonalidad", value: track.key },
              { label: "Tempo", value: `${track.bpm} BPM` },
            ]}
            media={
              <iframe
                src={`https://www.youtube.com/embed/${track.youtubeId}?rel=0&modestbranding=1`}
                title={track.name}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            }
            actions={track.downloads.map((file) => (
              <Button
                key={file.url}
                href={toDirectDownloadUrl(file.url)}
                download
              >
                <Download size={16} /> Descargar {file.extension.toUpperCase()}
                {file.size && ` · ${file.size}`}
              </Button>
            ))}
          >
            <ul className="flex flex-col gap-2 text-sm">
              {track.practice.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong>{" "}
                  <span className="text-ink-muted">{item.text}</span>
                </li>
              ))}
            </ul>
          </ResourceCard>
        ))}
      </div>

      <div id="collabs" className="scroll-mt-24">
        <SectionHeader
          title="Collabs"
          link={{ label: "Ver canal de YouTube", href: youtubeUrl }}
        />
      </div>
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
              <h3 className="font-bold group-hover:text-brand">
                {video.title}
              </h3>
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
