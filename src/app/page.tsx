/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  Music2,
  Play,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { getLatestPosts } from "@/lib/posts";
import { BOOKS, RESOURCES } from "@/content/resources";
import { VIDEOS } from "@/content/media";
import { CHALLENGES, getChallengeCover } from "@/content/challenges";
import { WHATSAPP_URL } from "@/content/community";
import { ARTISTS } from "@/content/artists";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PostCard } from "@/components/ui/PostCard";

export default function Home() {
  const [challenge] = CHALLENGES;
  const [collab] = VIDEOS;
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
        <div className="relative isolate grid gap-8 community-feature overflow-hidden rounded-3xl p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center">
          <div className="community-strings" aria-hidden="true">
            {Array.from({ length: 14 }, (_, n) => (
              <i key={n} />
            ))}
          </div>
          <Users
            aria-hidden="true"
            size={300}
            strokeWidth={1}
            className="absolute -bottom-24 -right-16 -z-10 text-white/5"
          />
          <div>
            <MessageCircle className="mb-5 text-brand" size={30} />
            <p className="text-xs font-bold uppercase tracking-widest text-white/80">
              Comunidad
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Guitarristas que tocan juntos.
            </h2>
            <p className="mt-4 text-white/85">
              Únete al grupo de WhatsApp de Peru Guitar: retos, dudas, música
              y novedades.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-strong"
              >
                Entrar al grupo <ArrowRight size={18} />
              </a>
              <Button href="/comunidad" variant="outline">
                Ver la comunidad
              </Button>
            </div>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${collab.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-card bg-gradient-to-br from-brand to-brand-strong text-white shadow-2xl ring-1 ring-black/10 transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-video">
              <img
                src={`https://img.youtube.com/vi/${collab.id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-night/30 transition-colors group-hover:bg-night/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand">
                  <Play size={20} fill="currentColor" />
                </span>
              </div>
            </div>
            <p className="px-5 py-4 text-sm">
              <span className="font-bold">Último collab:</span>{" "}
              {collab.title}
            </p>
          </a>
        </div>
      </Container>
      <Container className="pt-16 md:pt-20">
        <SectionHeader
          title="Artistas PG"
          subtitle="Guitarristas peruanos que tienes que conocer."
          link={{ label: "Ver todos", href: "/artistas" }}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ARTISTS.slice(0, 4).map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </Container>
      <Container className="pt-16 md:pt-20">
        <a
          href="https://fighters.peruguitar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fighters-feature group flex min-h-72 flex-col justify-end rounded-3xl border border-white/10 p-8 text-on-night sm:p-10"
        >
          <Gamepad2 className="mb-6 text-accent" size={30} />
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            PG Fighters · El rock peruano anda en peligro
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Agárrate a guitarrazos.
          </h2>
          <p className="mt-3 max-w-md text-zinc-300">
            ¿Podrás ganarle a Acople? Baja a El Sótano y salva el rock a punta
            de riffs.
          </p>
          <span className="mt-7 flex items-center gap-2 text-sm font-bold text-accent">
            Entrar a pelear{" "}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </a>
      </Container>
    </>
  );
}
