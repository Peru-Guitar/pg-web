/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BookOpen, Download, Music2 } from "lucide-react";
import { ALL_RESOURCES, type ResourceItem } from "@/content/resources";
import { toDirectDownloadUrl } from "@/lib/drive";

const ACTION =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-strong";

const formatDate = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

/**
 * Free ebooks and backing tracks as cards with a large cover, newest first.
 * `limit` caps the total, used for the preview on the community hub.
 */
export const ResourcesList = ({ limit }: { limit?: number }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {ALL_RESOURCES.slice(0, limit).map((item) => (
      <ResourceCard key={item.id} item={item} />
    ))}
  </div>
);

const ResourceCard = ({ item }: { item: ResourceItem }) => {
  const isBook = item.kind === "book";
  const image = isBook
    ? item.cover
    : item.cover ?? (item.youtubeId && `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`);
  const Icon = isBook ? BookOpen : Music2;

  return (
    <article
      id={item.id}
      className="group flex scroll-mt-24 flex-col overflow-hidden rounded-card border border-line bg-surface transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-night">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            width={640}
            height={640}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-brand">
            <Icon size={56} />
          </div>
        )}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-night/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
          <Icon size={13} /> {isBook ? "Ebook" : "Backing track"}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-lg font-bold leading-snug">{item.name}</h3>
        <p className="text-sm text-ink-muted">
          {!isBook && item.author ? `por ${item.author} · ` : ""}
          {formatDate(item.date)}
        </p>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-3">
          {isBook ? (
            <Link href={`/comunidad/recursos/${item.id}`} className={ACTION}>
              <BookOpen size={15} /> Leer gratis
            </Link>
          ) : (
            item.downloads.map((file) => (
              <a key={file.url} href={toDirectDownloadUrl(file.url)} download className={ACTION}>
                <Download size={15} /> Descargar {file.extension.toUpperCase()}
              </a>
            ))
          )}
        </div>
      </div>
    </article>
  );
};
