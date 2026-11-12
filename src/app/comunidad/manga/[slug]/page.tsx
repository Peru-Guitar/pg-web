/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { DEFAULT_PAGE_SIZE, MANGAS, getManga, mangaImage, mangaOg } from "@/content/manga";
import { Container } from "@/components/layout/Container";
import { MangaChapterBar } from "@/components/ui/MangaChapterBar";
import { pageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => MANGAS.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps) {
  const manga = getManga((await params).slug);
  if (!manga) return {};
  return pageMetadata({
    title: `${manga.title} · Vol. ${manga.volume}`,
    description: manga.description,
    path: `/comunidad/manga/${manga.slug}`,
    image: mangaOg(manga.slug),
  });
}

/** Comic halftone dots, used as texture on dark surfaces. */
const HALFTONE =
  "[background-image:radial-gradient(rgb(255_255_255/.07)_1px,transparent_1.5px)] [background-size:10px_10px]";

export default async function MangaPage({ params }: PageProps) {
  const manga = getManga((await params).slug);
  if (!manga) notFound();
  const cover = mangaImage(manga.slug, "cover");
  const { width, height } = manga.pageSize ?? DEFAULT_PAGE_SIZE;

  return (
    // -mb-10 pb-10: cover the footer's top margin so no light strip shows between them.
    <div className="-mb-10 bg-black pb-10 text-on-night">
      {/* Hero: the cover takes the stage, blurred behind and sharp in front */}
      <header className="relative isolate overflow-hidden">
        <img
          src={cover}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full scale-110 object-cover opacity-30 blur-2xl"
        />
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/70 to-black ${HALFTONE}`} />
        <Container className="grid items-center gap-10 pb-14 pt-24 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-14 md:pb-20 md:pt-32">
          <img
            src={cover}
            alt={`Portada de ${manga.title}, volumen ${manga.volume}`}
            width={width}
            height={height}
            className="mx-auto w-full max-w-sm -rotate-2 rounded-md shadow-[0_30px_80px_-20px_rgb(0_0_0/.9)] ring-1 ring-white/15 md:max-w-none"
          />
          <div>
            <Link
              href="/comunidad#manga"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-on-night-muted transition-colors hover:text-accent"
            >
              <ArrowLeft size={16} /> Comunidad
            </Link>
            <p className="mb-3 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[.2em]">
              <span className="rounded-sm bg-brand px-2 py-1 text-white">Manga</span>
              <span className="text-on-night-muted">· Vol. {manga.volume}</span>
            </p>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              {manga.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-on-night-muted">{manga.description}</p>
            <a
              href="#capitulo-1"
              className="mt-8 inline-flex items-center gap-2 rounded-pill bg-brand px-6 py-3 font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <BookOpen size={18} /> Empezar a leer
            </a>
            <ol className="mt-8 grid gap-1 border-t border-white/10 pt-5 text-sm">
              {manga.chapters.map(({ number, title }) => (
                <li key={number}>
                  <a
                    href={`#capitulo-${number}`}
                    className="group flex items-baseline gap-3 py-1 text-on-night-muted transition-colors hover:text-on-night"
                  >
                    <span className="w-6 font-black text-brand">{String(number).padStart(2, "0")}</span>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </header>

      <MangaChapterBar chapters={manga.chapters} />

      {/* Reader: pages stacked edge to edge, like a printed volume */}
      <main id="lector" className="mx-auto max-w-3xl pb-10">
        {manga.chapters.map((chapter) => (
          <section
            key={chapter.number}
            id={`capitulo-${chapter.number}`}
            aria-labelledby={`titulo-capitulo-${chapter.number}`}
          >
            {/* Chapter title card */}
            <div className={`relative flex items-end gap-4 overflow-hidden px-4 py-8 md:px-0 md:py-12 ${HALFTONE}`}>
              <span
                aria-hidden
                className="text-7xl font-black leading-none text-brand md:text-8xl"
              >
                {String(chapter.number).padStart(2, "0")}
              </span>
              <h2 id={`titulo-capitulo-${chapter.number}`} className="pb-1">
                <span className="block text-xs font-bold uppercase tracking-[.25em] text-on-night-muted">
                  Capítulo {chapter.number}
                </span>
                <span className="block text-2xl font-black uppercase leading-tight md:text-3xl">
                  {chapter.title}
                </span>
              </h2>
            </div>
            <img
              src={mangaImage(manga.slug, `capitulo-${chapter.number}`)}
              alt={`Capítulo ${chapter.number}: ${chapter.title}`}
              width={width}
              height={height}
              loading="lazy"
              className="block h-auto w-full"
            />
          </section>
        ))}
      </main>

      {/* End of volume */}
      <footer className={`border-t border-white/10 ${HALFTONE}`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center">
          <p className="text-on-night-muted">¿Te gustó? Compártelo con la comunidad.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="#capitulo-1"
              className="rounded-pill border border-white/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Volver al capítulo 1
            </a>
            <Link
              href="/comunidad#manga"
              className="rounded-pill bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-strong"
            >
              Ir a la comunidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
