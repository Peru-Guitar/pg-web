/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, MessageCircle, Play, Users } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { CHALLENGES, getChallengeCover } from "@/content/challenges";
import { ChallengeLevelBadge } from "@/components/ui/ChallengeLevelBadge";
import { PODCAST_EPISODES, VIDEOS } from "@/content/media";
import { youtubeUrl } from "@/content/settings.json";
import { WHATSAPP_URL } from "@/content/community";
import { MANGAS, mangaImage } from "@/content/manga";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResourcesList } from "@/components/ui/ResourcesList";

export const metadata = pageMetadata({
  title: "Comunidad",
  description:
    "Retos, collabs, podcast, recursos gratuitos y el grupo de Peru Guitar: la comunidad guitarrística peruana.",
  path: "/comunidad",
});


const SECTIONS = [
  { id: "retos", label: "Retos" },
  { id: "collabs", label: "Collabs" },
  { id: "manga", label: "Manga" },
  { id: "podcast", label: "Podcast" },
  { id: "recursos", label: "Recursos" },
  { id: "grupo", label: "Grupo" },
];

export default function CommunityPage() {
  return (
    <Container className="py-16">
      <h1 className="mb-2 text-4xl font-extrabold">Comunidad</h1>
      <p className="mb-6 max-w-2xl text-ink-muted">
        Guitarristas que tocan, comparten y crean juntos. Súmate al reto del
        mes, entra al grupo y mira lo que hemos grabado juntos.
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

      <div id="retos" className="scroll-mt-24">
        <SectionHeader
          title="Retos"
          subtitle="Saca un lick o un pedazo de canción, grábate y compártelo."
          link={{ label: "Todos los retos", href: "/comunidad/retos" }}
        />
      </div>
      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES.slice(0, 2).map((challenge) => (
          <Link
            key={challenge.slug}
            href={`/comunidad/retos/${challenge.slug}`}
            className="group flex flex-col overflow-hidden rounded-card border border-night-line bg-night text-on-night transition-colors hover:border-brand"
          >
            <img
              src={getChallengeCover(challenge)}
              alt=""
              width={1600}
              height={900}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-1 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  Reto #{challenge.number}
                </p>
                <ChallengeLevelBadge level={challenge.level} className="text-on-night-muted" />
              </div>
              <h3 className="text-xl font-bold">
                {challenge.title} · {challenge.artist}
              </h3>
              <p className="text-sm text-on-night-muted">{challenge.section}</p>
              <span className="mt-auto flex items-center gap-1 pt-3 text-sm font-semibold text-accent">
                Ver el reto <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div id="collabs" className="scroll-mt-24">
        <SectionHeader
          title="Collabs"
          subtitle="Videos hechos entre miembros de la comunidad."
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
        ))}
      </div>

      {/* Manga */}
      <div id="manga" className="scroll-mt-24">
        <SectionHeader
          title="Manga"
          subtitle="Historias de la comunidad contadas en viñetas."
        />
      </div>
      {MANGAS.map((manga) => (
        <section
          key={manga.slug}
          aria-labelledby={`manga-${manga.slug}`}
          className="relative isolate mb-16 overflow-hidden rounded-3xl bg-night text-on-night"
        >
          {/* Manga-style background: blurred cover, speed lines and halftone dots */}
          <img
            src={mangaImage(manga.slug, "cover", true)}
            alt=""
            aria-hidden
            className="absolute inset-0 -z-30 h-full w-full scale-125 object-cover opacity-70 blur-xl saturate-150"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-[15] opacity-90 [background-image:repeating-conic-gradient(from_0deg_at_80%_50%,rgb(255_255_255/.14)_0deg_1.5deg,transparent_1.5deg_9deg)] [mask-image:radial-gradient(circle_at_80%_50%,transparent_15%,black_70%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-night/10 via-night/55 to-night/70"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 [background-image:radial-gradient(rgb(255_255_255/.08)_1px,transparent_1.5px)] [background-size:10px_10px]"
          />
          <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            {/* Big cover on desktop only; mobile shows a small one next to the title */}
            <Link
              href={`/comunidad/manga/${manga.slug}`}
              className="group hidden overflow-hidden md:block"
            >
              <img
                src={mangaImage(manga.slug, "cover", true)}
                alt={`Portada de ${manga.title}`}
                width={400}
                height={500}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="flex min-w-0 flex-col justify-center gap-5 p-5 sm:p-8">
              <div>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/comunidad/manga/${manga.slug}`}
                    className="w-24 shrink-0 -rotate-3 overflow-hidden rounded-md shadow-xl ring-1 ring-white/20 md:hidden"
                  >
                    <img
                      src={mangaImage(manga.slug, "cover", true)}
                      alt={`Portada de ${manga.title}`}
                      width={400}
                      height={500}
                      loading="lazy"
                      className="w-full"
                    />
                  </Link>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-accent">
                      Manga · Vol. {manga.volume}
                    </p>
                    <h2
                      id={`manga-${manga.slug}`}
                      className="text-2xl font-extrabold leading-tight sm:text-3xl"
                    >
                      {manga.title}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-on-night-muted">{manga.description}</p>
              </div>
              {/* Chapters: desktop only; mobile keeps just the cover and the button */}
              <ol className="hidden grid-cols-5 gap-3 md:grid">
                {manga.chapters.map((chapter) => (
                  <li key={chapter.number}>
                    <Link
                      href={`/comunidad/manga/${manga.slug}#capitulo-${chapter.number}`}
                      className="group block"
                    >
                      <img
                        src={mangaImage(manga.slug, `capitulo-${chapter.number}`, true)}
                        alt=""
                        width={400}
                        height={500}
                        loading="lazy"
                        className="aspect-[4/5] w-full rounded-lg object-cover ring-1 ring-white/10 transition-transform group-hover:-translate-y-1"
                      />
                      <span className="mt-2 block text-xs font-bold text-on-night-muted group-hover:text-accent">
                        Cap. {chapter.number}
                      </span>
                      <span className="block text-xs leading-snug text-on-night">
                        {chapter.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
              <Link
                href={`/comunidad/manga/${manga.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-strong md:self-start md:py-2.5"
              >
                Leer el manga <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <div id="podcast" className="scroll-mt-24">
        <SectionHeader
          title="Archivo del podcast"
          subtitle="Conversaciones entre guitarristas que grabamos en su momento."
        />
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

      <div id="recursos" className="mt-16 scroll-mt-24">
        <SectionHeader
          title="Recursos gratuitos"
          subtitle="Material gratuito para poner las manos en las cuerdas."
        />
      </div>
      <ResourcesList />

      <div
        id="grupo"
        className="community-feature relative isolate mt-16 flex scroll-mt-24 flex-col items-start gap-6 overflow-hidden rounded-3xl p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-12"
      >
        <div className="community-strings" aria-hidden="true">
          {Array.from({ length: 14 }, (_, n) => (
            <i key={n} />
          ))}
        </div>
        <Users
          aria-hidden="true"
          size={260}
          strokeWidth={1}
          className="absolute -bottom-20 -right-10 -z-10 text-white/5"
        />
        <div>
          <MessageCircle className="mb-4 text-brand" size={30} />
          <h2 className="text-3xl font-extrabold tracking-tight">
            Únete al grupo de Peru Guitar
          </h2>
          <p className="mt-3 max-w-md text-white/80">
            El grupo de WhatsApp de la comunidad: retos, dudas, música y
            novedades.
          </p>
        </div>
        <Button href={WHATSAPP_URL} external>
          Entrar al grupo <ArrowRight size={18} />
        </Button>
      </div>
    </Container>
  );
}
