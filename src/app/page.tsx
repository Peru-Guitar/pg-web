import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Headphones,
  Gamepad2,
  Music2,
  Play,
  Sparkles,
} from "lucide-react";
import { getLatestPosts } from "@/lib/posts";
import { BOOKS, RESOURCES } from "@/content/resources";
import { PODCAST_EPISODES } from "@/content/media";
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
        <Container className="relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[.23em] text-accent">
              Comunidad · Educación · Música · Perú
            </p>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.04] tracking-[-.055em] sm:text-7xl lg:text-8xl">
              La guitarra
              <br />
              nos <span className="ml-2 text-accent">conecta.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-zinc-300">
              Un lugar para tocar más, descubrir nuevas ideas y disfrutar la
              guitarra. A tu ritmo, a tu manera.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="https://app.peruguitar.com" external>
                Comienza a practicar <ArrowRight size={18} />
              </Button>
              <Button href="/blog" variant="outline">
                Explora el contenido
              </Button>
            </div>
            <p className="mt-6 text-xs text-zinc-400">
              Hecho en Perú. Para guitarristas de todas partes.
            </p>
          </div>
          <div className="min-w-0">
          <a
            href="https://app.peruguitar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="quest-feature group relative block overflow-hidden rounded-[1.75rem] border border-violet-400/30 p-7 shadow-2xl sm:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-200">
                <Sparkles size={16} /> Tu próxima sesión
              </span>
              <ArrowRight
                className="text-violet-200 transition-transform group-hover:translate-x-1"
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
            <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-violet-300">
              Entrena. Descubre. Repite.
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Fret Quest
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-slate-300">
              Haz de la práctica una parte de tu día. Entra y sigue explorando
              tu guitarra.
            </p>
            <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-bold text-white">
              <Play size={15} fill="currentColor" /> Abrir Fret Quest
            </span>
          </a>
          <a
            href="https://fighters.peruguitar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <Gamepad2 size={17} className="shrink-0" aria-hidden="true" />
            <span>¿Una pausa? Juega PG Fighters</span>
            <ArrowRight size={15} className="shrink-0" aria-hidden="true" />
          </a>
          </div>
        </Container>
        <Container className="relative">
          <div className="grid grid-cols-1 divide-y divide-white/10 border-t border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                icon: Music2,
                title: "Practica a tu ritmo",
                text: "Fret Quest y backing tracks",
              },
              {
                icon: BookOpen,
                title: "Siempre algo que aprender",
                text: "Artículos y guías gratuitas",
              },
              {
                icon: Headphones,
                title: "Conecta con la comunidad",
                text: "Podcasts y colaboraciones",
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
          title="Ideas para tu próxima sesión"
          subtitle="Lecturas que también se llevan a la guitarra."
          link={{ label: "Explorar el blog", href: "/blog" }}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {getLatestPosts(8).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
      <Container className="pt-16 md:pt-20">
        <SectionHeader
          title="Menos buscar. Más tocar."
          subtitle="Recursos gratuitos para poner las manos en las cuerdas."
          link={{ label: "Todos los recursos", href: "/recursos" }}
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Link
            href={`/recursos/${BOOKS[0].id}`}
            className="resource-feature group rounded-3xl border border-white/10 p-8 text-on-night sm:p-10"
          >
            <BookOpen className="mb-8 text-accent" size={32} />
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Ebook gratuito · 7 capítulos
            </p>
            <h3 className="mt-3 max-w-sm text-3xl font-extrabold tracking-tight">
              {BOOKS[0].name}
            </h3>
            <p className="mt-4 max-w-md text-zinc-300">
              {BOOKS[0].description}
            </p>
            <span className="mt-8 flex items-center gap-2 text-sm font-bold text-accent">
              Abre el libro <ArrowRight size={16} />
            </span>
          </Link>
          <div className="grid gap-4">
            {RESOURCES.map((track, index) => (
              <Link
                key={track.id}
                href={`/recursos#${track.id}`}
                className="resource-track group flex items-center gap-5 rounded-3xl border border-white/10 p-6 text-on-night sm:p-8"
                data-track={track.id}
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                  <Music2 size={25} />
                </span>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-zinc-300">
                    Backing track / 0{index + 1}
                  </p>
                  <h3 className="my-2 text-2xl font-bold">{track.name}</h3>
                  <p className="text-sm text-zinc-300">
                    {track.key} · {track.bpm} BPM
                  </p>
                </div>
                <ArrowRight size={20} className="shrink-0 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <Container className="pt-16 md:pt-20">
        <div className="grid gap-8 rounded-3xl bg-night p-8 text-on-night sm:p-12 lg:grid-cols-2">
          <div>
            <Headphones className="mb-5 text-brand" size={30} />
            <p className="text-xs uppercase tracking-widest text-accent">
              La comunidad se escucha
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Conversaciones entre guitarristas.
            </h2>
            <p className="mt-4 text-on-night-muted">
              Música, experiencias y todo lo que pasa más allá de las seis
              cuerdas.
            </p>
            <Link
              href="/media#podcasts"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-accent"
            >
              Escuchar el podcast <ArrowRight size={16} />
            </Link>
          </div>
          <div className="divide-y divide-white/10">
            {PODCAST_EPISODES.slice(0, 3).map((episode, i) => (
              <a
                key={episode.id}
                href={`https://open.spotify.com/episode/${episode.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 py-5"
              >
                <span className="font-mono text-sm text-zinc-500">
                  0{i + 1}
                </span>
                <span className="flex-1 font-semibold">{episode.title}</span>
                <Play size={17} className="text-brand" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
