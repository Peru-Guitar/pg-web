export interface Challenge {
  slug: string;
  number: number;
  title: string;
  artist: string;
  /** The part of the song or the lick to learn. */
  section: string;
  description: string;
  /** WebP header image, 1600×900: /content/retos/<slug>/header.webp. Falls back to the video thumbnail. */
  cover?: string;
  /** YouTube video id of the challenge video. */
  youtubeId: string;
  /** Where the part to learn starts and ends in the video (m:ss). */
  range: { start: string; end: string };
  tips: string[];
  /** Ready-to-paste Instagram caption. */
  caption: string;
}

/** Newest first. */
export const CHALLENGES: Challenge[] = [
  {
    slug: "little-wing-intro",
    number: 1,
    title: "Little Wing",
    artist: "Jimi Hendrix",
    section: "Solo el intro",
    cover: "/content/retos/little-wing-intro/header.webp",
    description:
      "Saca de oído el intro de Little Wing, con sus acordes adornados y su sonido limpio. Grábate en un reel y compártelo con la comunidad.",
    youtubeId: "35luFxHO5E0",
    range: { start: "0:00", end: "0:33" },
    tips: [
      "Escucha el intro varias veces antes de agarrar la guitarra.",
      "Divídelo en frases cortas y trabaja una a la vez.",
      "Baja la velocidad hasta que cada frase salga limpia y luego vuelve a subirla.",
    ],
    caption:
      "Aquí mi participación para el reto #1 de @peruguitar: el intro de Little Wing de Jimi Hendrix 🎸 #RetoPeruGuitar",
  },
];

export const getChallengeCover = ({ cover, youtubeId }: Challenge) =>
  cover ?? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

export const getChallenge = (slug: string) =>
  CHALLENGES.find((challenge) => challenge.slug === slug);
