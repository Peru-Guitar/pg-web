/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BookOpen, Download, Play } from "lucide-react";
import { BOOKS, RESOURCES } from "@/content/resources";
import { toDirectDownloadUrl } from "@/lib/drive";

const CARD =
  "flex scroll-mt-24 items-center gap-4 rounded-card border border-line bg-surface p-3";
const THUMB = "aspect-square w-20 shrink-0 rounded-lg bg-night object-cover";
const ACTION =
  "inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-strong";

/** Free ebooks and backing tracks as compact rows, shown inside the community page. */
export const ResourcesList = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {BOOKS.map((book) => (
      <article key={book.id} id={book.id} className={CARD}>
        {book.cover ? (
          <img src={book.cover} alt="" loading="lazy" className={THUMB} />
        ) : (
          <div className={THUMB} />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-wider text-ink-muted">
            Ebook
          </p>
          <h3 className="truncate font-bold">{book.name}</h3>
          <Link href={`/recursos/${book.id}`} className={`mt-1 ${ACTION}`}>
            <BookOpen size={15} /> Leer gratis
          </Link>
        </div>
      </article>
    ))}
    {RESOURCES.map((track) => (
      <article key={track.id} id={track.id} className={CARD}>
        <img
          src={`https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className={THUMB}
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-wider text-ink-muted">
            Backing track
          </p>
          <h3 className="truncate font-bold">{track.name}</h3>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
            <a
              href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className={ACTION}
            >
              <Play size={15} /> Escuchar
            </a>
            {track.downloads.map((file) => (
              <a
                key={file.url}
                href={toDirectDownloadUrl(file.url)}
                download
                className={ACTION}
              >
                <Download size={15} /> {file.extension.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
);
