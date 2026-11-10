import Image from "next/image";
import { ARTISTS, ARTISTS_HERO } from "@/content/artists";
import { Container } from "@/components/layout/Container";
import { ArtistCard } from "@/components/ui/ArtistCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Artistas PG",
  description:
    "Guitarristas peruanos que tienes que conocer: su música, sus videos y dónde seguirlos.",
  path: "/artistas",
  image: ARTISTS_HERO,
});

export default function ArtistsPage() {
  return (
    <div className="-mb-10 bg-night pb-10 text-on-night">
      <section className="relative isolate overflow-hidden">
        <Image
          src={ARTISTS_HERO}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[65%_center] md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/95 via-night/70 to-night/20" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-night to-transparent" />
      <Container className="pb-20 pt-32 md:pb-28 md:pt-40">
        <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-accent">
          Artistas PG
        </p>
        <h1 className="mb-2 text-4xl font-extrabold">Guitarristas peruanos</h1>
        <p className="mt-4 max-w-xl text-lg text-on-night-muted">
          Músicos que mueven la escena de la guitarra en Perú. Escucha su
          música, mira sus videos y síguelos.
        </p>
      </Container>
      </section>
      <Container className="py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ARTISTS.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} />
          ))}
        </div>
      </Container>
    </div>
  );
}
