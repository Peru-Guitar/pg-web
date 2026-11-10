/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { CHALLENGES, getChallengeCover } from "@/content/challenges";
import { PODCAST_EPISODES, VIDEOS } from "@/content/media";
import { youtubeUrl } from "@/content/settings.json";
import { WHATSAPP_URL } from "@/content/community";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = pageMetadata({
  title: "Comunidad",
  description:
    "Retos, collabs, podcast y el grupo de Peru Guitar: la comunidad guitarrística peruana.",
  path: "/comunidad",
});


const SECTIONS = [
  { id: "retos", label: "Retos" },
  { id: "grupo", label: "Grupo" },
  { id: "collabs", label: "Collabs" },
  { id: "podcast", label: "Podcast" },
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
          link={{ label: "Todos los retos", href: "/retos" }}
        />
      </div>
      <div className="mb-16 grid gap-6 lg:grid-cols-2">
        {CHALLENGES.slice(0, 2).map((challenge) => (
          <Link
            key={challenge.slug}
            href={`/retos/${challenge.slug}`}
            className="group flex flex-col overflow-hidden rounded-card border border-night-line bg-night text-on-night transition-colors hover:border-brand sm:flex-row"
          >
            <img
              src={getChallengeCover(challenge)}
              alt=""
              width={1600}
              height={900}
              loading="lazy"
              className="aspect-video w-full object-cover sm:aspect-auto sm:w-2/5 sm:shrink-0"
            />
            <div className="flex flex-1 flex-col gap-1 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Reto #{challenge.number}
              </p>
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

      <div
        id="grupo"
        className="mb-16 scroll-mt-24 flex flex-col items-start gap-5 rounded-3xl bg-night p-8 text-on-night sm:flex-row sm:items-center sm:justify-between sm:p-10"
      >
        <div>
          <MessageCircle className="mb-4 text-accent" size={28} />
          <h2 className="text-2xl font-extrabold">Únete al grupo de Peru Guitar</h2>
          <p className="mt-2 max-w-md text-on-night-muted">
            El grupo de WhatsApp de la comunidad: retos, dudas, música y
            novedades.
          </p>
        </div>
        <Button href={WHATSAPP_URL} external>
          Entrar al grupo <ArrowRight size={18} />
        </Button>
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

    </Container>
  );
}
