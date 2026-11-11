import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cake,
  Globe,
  LucideIcon,
  MapPin,
  Play,
} from "lucide-react";
import {
  ARTISTS,
  ARTISTS_HERO,
  ArtistSocial,
  formatBirthDate,
  getArtist,
} from "@/content/artists";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArtistAvatar } from "@/components/ui/ArtistAvatar";
import {
  FacebookIcon,
  InstagramIcon,
  SpotifyIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/ui/BrandIcons";
import { ArtistRow } from "@/components/ui/ArtistRow";
import { ArtistJoin } from "@/components/ui/ArtistJoin";
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

const SOCIALS: Record<
  ArtistSocial,
  { label: string; icon: LucideIcon | typeof SpotifyIcon }
> = {
  instagram: { label: "Instagram", icon: InstagramIcon },
  youtube: { label: "YouTube", icon: YoutubeIcon },
  spotify: { label: "Spotify", icon: SpotifyIcon },
  tiktok: { label: "TikTok", icon: TikTokIcon },
  facebook: { label: "Facebook", icon: FacebookIcon },
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
  const featured = artist.youtubeVideo;
  const spotifyArtist = artist.spotifyArtistId;
  const listen = artist.socials.spotify;
  const others = ARTISTS.filter((other) => other.slug !== artist.slug);
  const [lead, ...rest] = artist.bio;

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
              {artist.birthDate && (
                <span className="ml-3 inline-flex items-center gap-1 text-on-night-muted">
                  <Cake size={12} /> {formatBirthDate(artist.birthDate)}
                </span>
              )}
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

      {/* Bio */}
      <Container className="pb-16 pt-6 md:pb-24 md:pt-8">
        <div>
          <Heading eyebrow="Sobre el artista" title="Su historia" />
          <p className="text-xl leading-relaxed text-on-night">{lead}</p>
          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-on-night-muted">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>

      {/* YouTube + Spotify: two columns when both exist, full width otherwise */}
      {(spotifyArtist || featured) && (
        <Container className="pb-16 md:pb-24">
          <div
            className={`grid gap-12 ${spotifyArtist && featured ? "lg:grid-cols-2" : ""}`}
          >
            {featured && (
              <div>
                <Heading eyebrow="YouTube" title="Míralo en video" />
                <div
                  className="aspect-video overflow-hidden rounded-3xl border border-night-line bg-night-surface shadow-2xl"
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${featured.id}`}
                    title={featured.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              </div>
            )}
            {spotifyArtist && (
              <div>
                <Heading eyebrow="Spotify" title="Escúchalo" />
                <iframe
                  src={`https://open.spotify.com/embed/artist/${spotifyArtist}?theme=0`}
                  title={`${artist.name} en Spotify`}
                  height={352}
                  loading="lazy"
                  allow={SPOTIFY_ALLOW}
                  className="w-full rounded-card border-0"
                />
              </div>
            )}
          </div>
        </Container>
      )}

      {/* Join */}
      <div className="pb-10 md:pb-16">
        <ArtistJoin />
      </div>

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
