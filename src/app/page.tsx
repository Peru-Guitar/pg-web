/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenText,
  Gamepad2,
  Music2,
  Play,
  MessageCircle,
  Mic,
  Trophy,
  Users,
  Video,
  Sparkles,
} from "lucide-react";
import { getLatestPosts } from "@/lib/posts";
import { BOOKS, RESOURCES } from "@/content/resources";
import { MANGAS, mangaImage } from "@/content/manga";
import { TornBand } from "@/components/ui/TornBand";
import { PODCAST_EPISODES, VIDEOS } from "@/content/media";
import { CHALLENGE_LEVELS, CHALLENGES, getChallengeCover } from "@/content/challenges";
import { WHATSAPP_URL } from "@/content/community";
import { RandomArtists } from "@/components/ui/RandomArtists";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PostCard } from "@/components/ui/PostCard";

export default function Home() {
  return (
    <>
      <section className="home-hero relative isolate overflow-hidden bg-night text-on-night">
        <div className="hero-strings" aria-hidden="true">
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <i key={n} />
          ))}
        </div>
        <Container className="relative grid gap-12 pb-16 pt-32 md:pb-24 md:pt-40 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[.23em] text-accent">
              Cultura · Artistas · Comunidad · Perú
            </p>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.04] tracking-[-.055em] sm:text-7xl lg:text-8xl">
              La guitarra
              <br />
              nos <span className="ml-2 text-accent">conecta.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-zinc-300">
              El punto de encuentro de la guitarra peruana: su escena, sus
              artistas y una comunidad que toca, comparte y crea junta.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="https://fretquest.peruguitar.com" external>
                Entrena en Fret Quest <ArrowRight size={18} />
              </Button>
              <Button href="/comunidad" variant="outline">
                Únete a la comunidad
              </Button>
            </div>
            <p className="mt-6 text-xs text-zinc-400">
              Hecho en Perú. Para guitarristas de todas partes.
            </p>
          </div>
          <div className="min-w-0">
          <a
            href="https://fretquest.peruguitar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="quest-feature group relative block overflow-hidden rounded-[1.75rem] border border-brand/30 p-7 shadow-2xl sm:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <Sparkles size={16} /> Tu próxima sesión
              </span>
              <ArrowRight
                className="text-accent transition-transform group-hover:translate-x-1"
                size={20}
              />
            </div>
            <div className="fretboard my-10" aria-hidden="true">
              {[0, 1, 2, 3, 4, 5].map((n) => (
                <i key={n} />
              ))}
              <span className="note note-one">E</span>
              <span className="note note-two">A</span>
              <span className="note note-three">D</span>
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-accent">
              Entrena. Descubre. Repite.
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Fret Quest
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-zinc-300">
              Haz de la práctica una parte de tu día. Entra y sigue explorando
              tu guitarra.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white">
              <Play size={15} fill="currentColor" /> Abrir Fret Quest
            </span>
          </a>
          </div>
        </Container>
        <Container className="relative">
          <div className="grid grid-cols-1 divide-y divide-white/10 border-t border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                icon: Users,
                title: "Conoce otros guitarristas",
                text: "Artistas PG y el grupo de la comunidad",
              },
              {
                icon: Sparkles,
                title: "Mejoremos juntos",
                text: "Entrena con Fret Quest o los retos",
              },
              {
                icon: Trophy,
                title: "Hagamos crecer la comunidad",
                text: "Collabs, Artistas PG y mucho más",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-4 py-6 sm:px-6 first:pl-0"
              >
                <Icon className="shrink-0 text-brand" size={25} />
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="mt-1 text-xs text-zinc-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Container className="pt-16 md:pt-20">
        <SectionHeader
          title="Lo último en el blog"
          subtitle="Escena, ideas y todo lo que pasa alrededor de la guitarra."
          link={{ label: "Explorar el blog", href: "/blog" }}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {getLatestPosts(6).map((post) => (
            <PostCard key={post.id} post={post} layout="row" />
          ))}
        </div>
      </Container>
      {/* Community: its own torn-paper band, a summary of everything plus what's new */}
      <section aria-labelledby="home-comunidad" className="mt-16 md:mt-20">
        <TornBand className="bg-bg-deep py-20 md:py-32">
          <Container>
            <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-brand">
                  Todo lo que hacemos juntos
                </p>
                <h2 id="home-comunidad" className="text-3xl font-extrabold md:text-4xl">
                  Comunidad
                </h2>
                <p className="mt-3 text-ink-muted md:text-lg">
                  Guitarristas que tocan, comparten y crean juntos: retos, collabs, manga,
                  podcast y recursos gratis.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-strong"
                >
                  <MessageCircle size={16} /> Entrar al grupo
                </a>
                <Link
                  href="/comunidad"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink/15 bg-surface px-4 py-2.5 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                >
                  Ver la comunidad <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Sub-page tabs: every community section with its count */}
            <ul className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {[
                {
                  href: "/comunidad#retos",
                  icon: Trophy,
                  name: "Retos",
                  meta: `${CHALLENGES.length} ${CHALLENGES.length === 1 ? "reto" : "retos"}`,
                },
                { href: "/comunidad#collabs", icon: Video, name: "Collabs", meta: `${VIDEOS.length} videos` },
                {
                  href: "/comunidad#manga",
                  icon: BookOpenText,
                  name: "Manga",
                  meta: `${MANGAS.length} ${MANGAS.length === 1 ? "volumen" : "volúmenes"}`,
                },
                { href: "/comunidad#podcast", icon: Mic, name: "Podcast", meta: `${PODCAST_EPISODES.length} episodios` },
                { href: `/comunidad/recursos/${BOOKS[0].id}`, icon: BookOpen, name: "Ebook", meta: "Gratis" },
                { href: "/comunidad#recursos", icon: Music2, name: "Tracks", meta: `${RESOURCES.length} backing tracks` },
              ].map(({ href, icon: Icon, name, meta }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="flex h-full items-center gap-3 rounded-xl border border-ink/10 bg-surface/60 p-3 transition-colors hover:border-brand hover:bg-surface"
                  >
                    <Icon size={18} className="shrink-0 text-brand" />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">{name}</span>
                      <span className="block truncate text-xs text-ink-muted">{meta}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* What's new: the latest item of each kind */}
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <span className="size-2 animate-pulse rounded-full bg-brand" /> Lo nuevo
            </p>
            <ul className="grid gap-4 md:grid-cols-3">
              {[
                {
                  href: `/comunidad/manga/${MANGAS[0].slug}`,
                  image: mangaImage(MANGAS[0].slug, "cover", true),
                  portrait: true,
                  tag: "Manga",
                  title: `${MANGAS[0].title} · Vol. ${MANGAS[0].volume}`,
                  meta: `${MANGAS[0].chapters.length} capítulos`,
                },
                {
                  href: `/comunidad/retos/${CHALLENGES[0].slug}`,
                  image: getChallengeCover(CHALLENGES[0]),
                  tag: `Reto #${CHALLENGES[0].number}`,
                  title: `${CHALLENGES[0].title} · ${CHALLENGES[0].artist}`,
                  meta: `${CHALLENGES[0].section} · ${CHALLENGE_LEVELS[CHALLENGES[0].level]}`,
                },
                {
                  href: `https://www.youtube.com/watch?v=${VIDEOS[0].id}`,
                  external: true,
                  image: `https://img.youtube.com/vi/${VIDEOS[0].id}/mqdefault.jpg`,
                  tag: "Collab",
                  title: VIDEOS[0].title,
                  meta: "Video en YouTube",
                },
              ].map(({ href, external, image, portrait, tag, title, meta }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-sm ring-1 ring-ink/5 transition-transform hover:-translate-y-1"
                  >
                    <span className="block aspect-video overflow-hidden bg-night">
                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className={`h-full w-full object-cover ${portrait ? "object-top" : ""} transition-transform duration-500 group-hover:scale-105`}
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">
                        {tag}
                      </span>
                      <span className="mt-1 font-bold leading-snug group-hover:text-brand">
                        {title}
                      </span>
                      <span className="mt-1 text-sm text-ink-muted">{meta}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>


            {/* Collabs + podcast and free resources */}
            <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <div>
                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-extrabold">Collabs</h3>
                  <Link href="/comunidad#collabs" className="text-sm font-semibold text-brand hover:underline">
                    Ver todos
                  </Link>
                </div>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {VIDEOS.slice(0, 6).map((video) => (
                    <li key={video.id}>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        <span className="relative block aspect-video overflow-hidden rounded-lg bg-night">
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt=""
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-night/20 opacity-0 transition-opacity group-hover:opacity-100">
                            <span className="flex size-9 items-center justify-center rounded-full bg-brand text-white">
                              <Play size={14} fill="currentColor" />
                            </span>
                          </span>
                        </span>
                        <span className="mt-2 block truncate text-sm font-semibold group-hover:text-brand">
                          {video.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stretches to the collabs grid height: the resources list fills the rest */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="mb-4 text-xl font-extrabold">Podcast</h3>
                  <Link
                    href="/comunidad#podcast"
                    className="group flex items-center gap-4 rounded-xl bg-night p-4 text-on-night transition-transform hover:-translate-y-0.5"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Mic size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wider text-accent">
                        Episodio {PODCAST_EPISODES.length}
                      </span>
                      <span className="block truncate font-bold">
                        {PODCAST_EPISODES[PODCAST_EPISODES.length - 1].title}
                      </span>
                      <span className="block text-xs text-on-night-muted">
                        {PODCAST_EPISODES.length} episodios en Spotify
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-4 text-xl font-extrabold">Recursos gratis</h3>
                  <ul className="flex flex-1 flex-col divide-y divide-ink/10 rounded-xl bg-surface ring-1 ring-ink/5">
                    {[
                      { href: `/comunidad/recursos/${BOOKS[0].id}`, icon: BookOpen, name: BOOKS[0].name, meta: "Ebook" },
                      ...RESOURCES.map((track) => ({
                        href: `/comunidad#${track.id}`,
                        icon: Music2,
                        name: track.name,
                        meta: "Backing track",
                      })),
                    ].map(({ href, icon: Icon, name, meta }) => (
                      <li key={href} className="flex flex-1">
                        <Link
                          href={href}
                          className="group flex flex-1 items-center gap-3 px-4 py-2.5 transition-colors hover:text-brand"
                        >
                          <Icon size={18} className="shrink-0 text-brand" />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-semibold">{name}</span>
                            <span className="block text-xs text-ink-muted">{meta}</span>
                          </span>
                          <ArrowRight size={14} className="shrink-0 text-ink-muted group-hover:text-brand" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </TornBand>
      </section>
      <Container className="pt-6 md:pt-8">
          {/* PG Fighters */}
          <a
            href="https://fighters.peruguitar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fighters-feature group flex min-h-64 flex-col justify-between gap-6 rounded-3xl border border-white/10 px-6 py-8 text-on-night sm:px-8 sm:py-12"
          >
            <div className="max-w-md">
              <Gamepad2 className="mb-5 text-accent" size={30} />
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                PG Fighters · El rock peruano anda en peligro
              </p>
              <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Agárrate a guitarrazos.
              </h3>
              <p className="mt-3 text-zinc-300">
                ¿Podrás ganarle a Acople? Baja a El Sótano y salva el rock a
                punta de riffs.
              </p>
            </div>
            <span className="flex items-center gap-2 text-sm font-bold text-accent">
              Entrar a pelear{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>
      </Container>
      <Container className="pt-16 md:pt-20">
        <SectionHeader
          title="Artistas PG"
          subtitle="Guitarristas que tienes que conocer."
          link={{ label: "Ver todos", href: "/artistas" }}
        />
        <RandomArtists />
      </Container>
    </>
  );
}
