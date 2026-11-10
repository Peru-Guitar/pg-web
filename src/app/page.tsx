/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  Music2,
  Play,
  MessageCircle,
  Mic,
  Trophy,
  Video,
  Sparkles,
} from "lucide-react";
import { getLatestPosts } from "@/lib/posts";
import { BOOKS, RESOURCES } from "@/content/resources";
import { RandomCollab } from "@/components/ui/RandomCollab";
import { PODCAST_EPISODES, VIDEOS } from "@/content/media";
import { CHALLENGES, getChallengeCover } from "@/content/challenges";
import { WHATSAPP_URL } from "@/content/community";
import { RandomArtists } from "@/components/ui/RandomArtists";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PostCard } from "@/components/ui/PostCard";

export default function Home() {
  const [challenge] = CHALLENGES;
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
                icon: Sparkles,
                title: "Entrena a tu ritmo",
                text: "Fret Quest y backing tracks",
              },
              {
                icon: Music2,
                title: "Reto del mes",
                text: "Grábate y compártelo",
              },
              {
                icon: BookOpen,
                title: "Cultura guitarrística",
                text: "Escena, opinión y producción",
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
          title="Reto del mes"
          subtitle={`Saca la parte, grábate y compártela con #PGReto${challenge.number}.`}
          link={{ label: "Todos los retos", href: "/retos" }}
        />
        <Link
          href={`/retos/${challenge.slug}`}
          className="group flex flex-col overflow-hidden rounded-3xl border border-night-line bg-night text-on-night transition-colors hover:border-brand md:flex-row"
        >
          <img
            src={getChallengeCover(challenge)}
            alt=""
            width={1600}
            height={900}
            loading="lazy"
            className="aspect-video w-full object-cover md:w-1/2"
          />
          <div className="flex flex-1 flex-col justify-center gap-2 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Reto #{challenge.number} · {challenge.section}
            </p>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {challenge.title}
            </h3>
            <p className="text-on-night-muted">{challenge.artist}</p>
            <p className="mt-2 max-w-md text-sm text-zinc-300">
              {challenge.description}
            </p>
            <span className="mt-4 flex items-center gap-2 text-sm font-bold text-accent">
              Ver el reto{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </Link>
      </Container>
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
      <section>
        <Container className="pt-16 md:pt-20">
          <SectionHeader
            title="Comunidad"
            subtitle="Guitarristas que tocan, comparten y crean juntos."
            link={{ label: "Ver la comunidad", href: "/comunidad" }}
          />
          {/* Community + resources */}
          <div className="grid gap-6 rounded-3xl bg-night p-4 text-on-night sm:p-6 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <RandomCollab />
            <div className="flex flex-col gap-6 lg:pr-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  Comunidad
                </p>
                <p className="mt-2 text-sm text-on-night-muted">
                  Retos, collabs, podcast y recursos gratis. Todo lo que hacemos juntos.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
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
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-white"
                  >
                    Ver la comunidad <ArrowRight size={16} />
                  </Link>
                </div>
                <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {[
                    {
                      href: "/comunidad#retos",
                      icon: Trophy,
                      name: "Retos",
                      meta: `${CHALLENGES.length} ${CHALLENGES.length === 1 ? "reto" : "retos"}`,
                    },
                    {
                      href: "/comunidad#collabs",
                      icon: Video,
                      name: "Collabs",
                      meta: `${VIDEOS.length} videos`,
                    },
                    {
                      href: "/comunidad#podcast",
                      icon: Mic,
                      name: "Podcast",
                      meta: `${PODCAST_EPISODES.length} episodios`,
                    },
                    {
                      href: `/recursos/${BOOKS[0].id}`,
                      icon: BookOpen,
                      name: BOOKS[0].name,
                      meta: "Ebook",
                    },
                    ...RESOURCES.map((track) => ({
                      href: `/comunidad#${track.id}`,
                      icon: Music2,
                      name: track.name,
                      meta: "Backing track",
                    })),
                  ].map(({ href, icon: Icon, name, meta }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex h-full flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:border-accent hover:bg-white/10"
                      >
                        <Icon size={18} className="text-accent" />
                        <span className="line-clamp-2 text-sm font-semibold leading-snug">
                          {name}
                        </span>
                        <span className="mt-auto text-xs text-on-night-muted">
                          {meta}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* PG Fighters */}
          <a
            href="https://fighters.peruguitar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fighters-feature group mt-4 flex min-h-64 flex-col justify-end rounded-3xl border border-white/10 p-6 text-on-night sm:p-8"
          >
            <Gamepad2 className="mb-5 text-accent" size={28} />
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              PG Fighters · El rock peruano anda en peligro
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
              Agárrate a guitarrazos.
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              ¿Podrás ganarle a Acople? Baja a El Sótano y salva el rock a
              punta de riffs.
            </p>
            <span className="mt-6 flex items-center gap-2 text-sm font-bold text-accent">
              Entrar a pelear{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>
        </Container>
      </section>
      <Container className="pt-16 md:pt-20">
        <SectionHeader
          title="Artistas PG"
          subtitle="Guitarristas peruanos que tienes que conocer."
          link={{ label: "Ver todos", href: "/artistas" }}
        />
        <RandomArtists />
      </Container>
    </>
  );
}
