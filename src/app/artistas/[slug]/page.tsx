/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Globe,
  Instagram,
  LucideIcon,
  MapPin,
  MessageCircle,
  Music,
  Play,
  Youtube,
} from "lucide-react";
import { ARTISTS, ARTISTS_HERO, ArtistSocial, getArtist } from "@/content/artists";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArtistAvatar } from "@/components/ui/ArtistAvatar";
import { ArtistRow } from "@/components/ui/ArtistRow";
import { WHATSAPP_URL } from "@/content/community";
import { pageMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () =>
  ARTISTS.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: PageProps) {
  const artist = getArtist((await params).slug);
  if (!artist) return {};
  return pageMetadata({
    title: `${artist.name} · Artistas PG`,
    description: `${artist.tagline}. ${artist.bio[0]}`,
    path: `/artistas/${artist.slug}`,
    ...(artist.cover ?? artist.photo ? { image: artist.cover ?? artist.photo } : {}),
  });
}

const SOCIALS: Record<ArtistSocial, { label: string; icon: LucideIcon }> = {
  instagram: { label: "Instagram", icon: Instagram },
  youtube: { label: "YouTube", icon: Youtube },
  spotify: { label: "Spotify", icon: Music },
  tiktok: { label: "TikTok", icon: Music },
  facebook: { label: "Facebook", icon: Facebook },
  website: { label: "Web", icon: Globe },
};

const Heading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-8">
    <p className="mb-2 text-xs font-bold uppercase tracking-[.23em] text-accent">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
      {title}
    </h2>
  </div>
);

const SPOTIFY_ALLOW =
  "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";

export default async function ArtistPage({ params }: PageProps) {
  const artist = getArtist((await params).slug);
  if (!artist) notFound();

  const socials = Object.entries(artist.socials) as [ArtistSocial, string][];
  const [featured, ...videos] = artist.youtubeVideos ?? [];
  const spotifyEmbeds = [
    ...(artist.spotifyArtistId ? [`artist/${artist.spotifyArtistId}`] : []),
    ...(artist.spotifyEmbeds ?? []),
  ];
  const listen = artist.socials.spotify;
  const others = ARTISTS.filter((other) => other.slug !== artist.slug);
  const [lead, ...rest] = artist.bio;
  // Without Spotify, the featured video fills the right column next to the bio.
  const sideVideo = spotifyEmbeds.length ? undefined : featured;
  // The big player below only shows when the featured video isn't already beside the bio.
  const mainVideo = sideVideo ? undefined : featured;
  const gridVideos = videos;
  const hasSide = spotifyEmbeds.length > 0 || Boolean(sideVideo);

  return (
    <article className="-mb-10 overflow-x-clip bg-night pb-10 text-on-night">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={artist.cover ?? ARTISTS_HERO}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[65%_center] md:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-night/95 via-night/75 to-night/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-night to-transparent"
        />
        <Container className="grid gap-12 pb-10 pt-28 md:pb-12 md:pt-36 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <Link
              href="/artistas"
              className="mb-8 inline-flex items-center gap-1 text-sm text-on-night-muted hover:text-on-night"
            >
              <ArrowLeft size={16} /> Artistas PG
            </Link>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.23em] text-accent">
              Artista PG
              <span className="ml-3 inline-flex items-center gap-1 text-on-night-muted">
                <MapPin size={12} /> {artist.location ?? "Perú"}
              </span>
            </p>
            <h1 className="text-6xl font-extrabold leading-[.95] tracking-[-.055em] sm:text-8xl">
              {artist.name}
            </h1>
            <p className="mt-5 max-w-lg text-xl text-zinc-300">
              {artist.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {artist.styles.map((style) => (
                <span
                  key={style}
                  className="rounded-pill border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-on-night-muted"
                >
                  {style}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {artist.contact ? (
                <Button href={artist.contact.href} external>
                  {artist.contact.label} <ArrowRight size={18} />
                </Button>
              ) : (
                listen && (
                  <Button href={listen} external>
                    <Play size={16} fill="currentColor" /> Escuchar ahora
                  </Button>
                )
              )}
              {socials.map(([network, url]) => {
                const { label, icon: Icon } = SOCIALS[network];
                return (
                  <a
                    key={network}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${artist.name} en ${label}`}
                    title={label}
                    className="flex size-12 items-center justify-center rounded-full border border-white/15 text-on-night transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2 lg:ml-auto lg:mr-0">
            <ArtistAvatar
              artist={artist}
              className="w-full rounded-3xl text-8xl shadow-2xl"
            />
          </div>
        </Container>
      </section>

      {/* Bio + listen */}
      <Container className="pb-16 pt-6 md:pb-24 md:pt-8">
        <div
          className={`grid gap-12 ${hasSide ? "lg:grid-cols-[1.1fr_1fr]" : "max-w-3xl"}`}
        >
          <div>
            <Heading eyebrow="Sobre el artista" title="Su historia" />
            <p className="text-xl leading-relaxed text-on-night">
              {lead}
            </p>
            <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-on-night-muted">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          {spotifyEmbeds.length > 0 && (
            <div>
              <Heading eyebrow="Spotify" title="Escúchalo" />
              <div className="flex flex-col gap-4">
                {spotifyEmbeds.map((embed) => (
                  <iframe
                    key={embed}
                    src={`https://open.spotify.com/embed/${embed}?theme=0`}
                    title={`${artist.name} en Spotify`}
                    height={embed.startsWith("track/") ? 152 : 380}
                    loading="lazy"
                    allow={SPOTIFY_ALLOW}
                    className="w-full rounded-card border-0"
                  />
                ))}
              </div>
            </div>
          )}
          {sideVideo && (
            <div>
              <Heading eyebrow="YouTube" title="Míralo en video" />
              <div className="aspect-video overflow-hidden rounded-card border border-night-line bg-night-surface shadow-2xl">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${sideVideo.id}`}
                  title={sideVideo.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <p className="mt-3 font-semibold">{sideVideo.title}</p>
            </div>
          )}
        </div>
      </Container>

      {/* Video */}
      {(mainVideo || gridVideos.length > 0) && (
        <Container className="pb-16 md:pb-24">
          <Heading
            eyebrow="YouTube"
            title={mainVideo ? "Míralo en video" : "Más videos"}
          />
          {mainVideo && (
            <div className="aspect-video overflow-hidden rounded-3xl border border-night-line bg-night-surface shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${mainVideo.id}`}
                title={mainVideo.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          )}
          {gridVideos.length > 0 && (
            <div
              className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${mainVideo ? "mt-8" : ""}`}
            >
              {gridVideos.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-card border border-night-line bg-night-surface"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                  <p className="p-4 font-semibold group-hover:text-accent">
                    {video.title}
                  </p>
                </a>
              ))}
            </div>
          )}
        </Container>
      )}

      {/* Join */}
      <Container className="pb-16 md:pb-24">
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <span className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-accent sm:flex">
              <Music size={18} />
            </span>
            <div>
              <p className="font-bold text-on-night">
                ¿Eres guitarrista peruano? Queremos conocerte.
              </p>
              <p className="text-sm text-on-night-muted">
                Escríbenos en el grupo de la comunidad y comparte tu música.
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-on-night transition-colors hover:border-accent hover:text-accent"
          >
            <MessageCircle size={16} /> Entrar al grupo
          </a>
        </div>
      </Container>

      {/* More */}
      {others.length > 0 && (
        <Container className="pb-12">
          <div className="flex items-end justify-between gap-4">
            <Heading eyebrow="Sigue descubriendo" title="Más artistas PG" />
            <Link
              href="/artistas"
              className="mb-8 flex shrink-0 items-center gap-1 text-sm font-semibold text-accent"
            >
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 6).map((other) => (
              <ArtistRow key={other.slug} artist={other} />
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
