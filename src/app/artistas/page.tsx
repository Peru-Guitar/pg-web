import Image from "next/image";
import { ARTISTS, ARTISTS_HERO } from "@/content/artists";
import { Container } from "@/components/layout/Container";
import { ArtistRow } from "@/components/ui/ArtistRow";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Artistas PG",
  description:
    "Guitarristas peruanos que tienes que conocer: su música, sus videos y dónde seguirlos.",
  path: "/artistas",
  image: ARTISTS_HERO,
});

const LETTERS = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

/** First letter without accents, so "Álvaro" goes under A. Digits and symbols go under #. */
const letterOf = (name: string) => {
  const first = name.trim().charAt(0).toUpperCase();
  if (first === "Ñ") return first;
  const plain = first.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return LETTERS.includes(plain) ? plain : "#";
};

export default function ArtistsPage() {
  // ARTISTS is already sorted alphabetically, so groups keep that order.
  const groups = new Map<string, typeof ARTISTS>();
  for (const artist of ARTISTS) {
    const letter = letterOf(artist.name);
    groups.set(letter, [...(groups.get(letter) ?? []), artist]);
  }
  const index = groups.has("#") ? [...LETTERS, "#"] : LETTERS;

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
      <nav
        aria-label="Índice alfabético"
        className="border-y border-night-line"
      >
        <Container>
          <ul className="flex gap-1 overflow-x-auto py-3 text-sm font-bold">
            {index.map((letter) => (
              <li key={letter}>
                {groups.has(letter) ? (
                  <a
                    href={`#letra-${letter}`}
                    className="flex size-8 items-center justify-center rounded-md text-on-night transition-colors hover:bg-brand hover:text-white"
                  >
                    {letter}
                  </a>
                ) : (
                  <span className="flex size-8 items-center justify-center text-on-night-muted/40">
                    {letter}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </nav>
      <Container className="flex flex-col gap-12 py-12 md:py-16">
        {index
          .filter((letter) => groups.has(letter))
          .map((letter) => (
            <section
              key={letter}
              id={`letra-${letter}`}
              aria-labelledby={`titulo-letra-${letter}`}
             
            >
              <h2
                id={`titulo-letra-${letter}`}
                className="mb-5 border-b border-night-line pb-2 text-3xl font-extrabold text-accent"
              >
                {letter}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {groups.get(letter)!.map((artist) => (
                  <ArtistRow key={artist.slug} artist={artist} />
                ))}
              </div>
            </section>
          ))}
      </Container>
    </div>
  );
}
