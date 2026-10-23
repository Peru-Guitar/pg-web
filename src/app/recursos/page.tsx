/* eslint-disable @next/next/no-img-element */
import { BookOpen, Download } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

import { BOOKS, RESOURCES } from "@/content/resources";
import { toDirectDownloadUrl } from "@/lib/drive";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ResourceCard } from "@/components/ui/ResourceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = pageMetadata({
  title: "Recursos",
  description: "Ebooks y backing tracks gratuitos de Peru Guitar para practicar guitarra.",
  path: "/recursos",
});

const GRID = "flex flex-col gap-6";

export default function ResourcesPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-2 text-4xl font-extrabold">Recursos</h1>
      <p className="mb-12 text-ink-muted">
        Material gratuito para practicar. Descárgalo y a darle con todo.
      </p>

      <SectionHeader title="Ebooks" />
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

      <SectionHeader title="Backing tracks" />
      <div className={GRID}>
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
    </Container>
  );
}
