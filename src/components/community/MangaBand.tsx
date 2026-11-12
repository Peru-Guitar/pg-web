/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  LATEST_MANGA,
  Manga,
  MANGAS,
  mangaImage,
  mangaSeriesWithVolumes,
} from "@/content/manga";
import { TornBand } from "@/components/ui/TornBand";
import { Container } from "@/components/layout/Container";

const VolumeCard = ({ manga }: { manga: Manga }) => (
  <Link href={`/comunidad/manga/${manga.slug}`} className="group flex gap-4 sm:block">
    {/* Shared with the volume page: the cover grows into its hero */}
    <ViewTransition name={`manga-cover-${manga.slug}`} share="manga-cover">
      <img
        src={mangaImage(manga.slug, "cover", true)}
        alt={`Portada de ${manga.title}, volumen ${manga.volume}`}
        width={400}
        height={500}
        loading="lazy"
        className="aspect-[4/5] w-28 shrink-0 rounded-lg object-cover shadow-xl ring-1 ring-white/15 transition-transform group-hover:-translate-y-1 sm:w-full"
      />
    </ViewTransition>
    <div className="min-w-0 sm:mt-4">
      <p className="text-xs font-black uppercase tracking-[.2em] text-brand">
        Vol. {manga.volume}
      </p>
      <h4 className="mt-1 font-extrabold leading-snug group-hover:text-accent">
        {manga.title}
      </h4>
      <p className="mt-1 line-clamp-3 text-sm text-on-night-muted">{manga.description}</p>
      <p className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-accent">
        {manga.chapters.length} {manga.chapters.length === 1 ? "capítulo" : "capítulos"}
        <ArrowRight size={14} />
      </p>
    </div>
  </Link>
);

/**
 * Manga block on the dark speed-lines background.
 * - `teaser`: torn-paper band on the hub with the latest volumes.
 * - `page`: full-bleed dark page (no torn edges) with every series and volume.
 */
export const MangaBand = ({
  teaser = false,
  page = false,
}: {
  teaser?: boolean;
  page?: boolean;
}) => {
  const Heading = page ? "h1" : "h2";
  const Wrapper = page ? "div" : TornBand;
  return (
    <section
      id="manga"
      aria-labelledby="manga-titulo"
      className={page ? "-mb-10" : "my-16 scroll-mt-24"}
    >
      <Wrapper
        className={
          page
            ? "relative isolate min-h-[80vh] overflow-hidden bg-black pb-24 pt-24 text-on-night md:pb-32 md:pt-32"
            : "isolate bg-black py-24 text-on-night md:py-36"
        }
      >
        {/* Background: latest cover blurred, speed lines and halftone dots */}
        <img
          src={mangaImage(LATEST_MANGA.slug, "cover", true)}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-30 h-full w-full scale-110 object-cover opacity-35 blur-2xl saturate-150"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-20 opacity-80 [background-image:repeating-conic-gradient(from_0deg_at_50%_40%,rgb(255_255_255/.10)_0deg_1.5deg,transparent_1.5deg_9deg)] [mask-image:radial-gradient(circle_at_50%_40%,transparent_20%,black_75%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/70 to-black/90 [background-image:radial-gradient(rgb(255_255_255/.07)_1px,transparent_1.5px)] [background-size:10px_10px]"
        />
        <Container>
          {page && (
            <Link
              href="/comunidad"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-on-night-muted hover:text-accent"
            >
              <ArrowLeft size={16} /> Volver a comunidad
            </Link>
          )}
          <div className="flex items-end justify-between gap-4">
            <div>
              <Heading
                id="manga-titulo"
                className="text-3xl font-black uppercase tracking-tight md:text-5xl"
              >
                Manga
              </Heading>
              <p className="mt-2 text-on-night-muted">
                Historias de la comunidad contadas en viñetas.
              </p>
            </div>
            {teaser && (
              <Link
                href="/comunidad/manga"
                className="flex shrink-0 items-center gap-1 text-sm font-medium text-accent hover:text-on-night"
              >
                Ver los {MANGAS.length} volúmenes <ArrowRight size={16} />
              </Link>
            )}
          </div>

          {teaser ? (
            <>
              {/* Latest volumes, newest first */}
              <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {MANGAS.slice(0, 3).map((manga) => (
                  <li key={manga.slug}>
                    <VolumeCard manga={manga} />
                  </li>
                ))}
              </ol>
            </>
          ) : (
            mangaSeriesWithVolumes().map((series) => (
              <section key={series.id} aria-labelledby={`manga-${series.id}`} className="mt-12">
                <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-accent">
                  {series.volumes.length} {series.volumes.length === 1 ? "volumen" : "volúmenes"}
                </p>
                <h3
                  id={`manga-${series.id}`}
                  className="text-2xl font-extrabold leading-tight sm:text-3xl"
                >
                  {series.name}
                </h3>
                <p className="mt-3 max-w-2xl text-on-night-muted">{series.description}</p>
                {/* Volumes, newest first */}
                <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {series.volumes.map((manga) => (
                    <li key={manga.slug}>
                      <VolumeCard manga={manga} />
                    </li>
                  ))}
                </ol>
              </section>
            ))
          )}
        </Container>
      </Wrapper>
    </section>
  );
};
