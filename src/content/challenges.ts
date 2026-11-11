/** 1 = principiante, 2 = intermedio, 3 = avanzado. */
export type ChallengeLevel = 1 | 2 | 3;

export const CHALLENGE_LEVELS: Record<ChallengeLevel, string> = {
  1: "Principiante",
  2: "Intermedio",
  3: "Avanzado",
};

export interface Challenge {
  slug: string;
  number: number;
  title: string;
  artist: string;
  /** The part of the song or the lick to learn. */
  section: string;
  /** Difficulty of the part to learn. */
  level: ChallengeLevel;
  description: string;
  /** WebP header image, 1600×900: /content/retos/<slug>/header.webp. Falls back to the video thumbnail. */
  cover?: string;
  /** YouTube video id of the challenge video. */
  youtubeId: string;
  /** Where the part to learn starts and ends in the video (m:ss). */
  range: { start: string; end: string };
  /** Optional Fret Quest exercise to practice the part, full production URL. */
  fretQuestUrl?: string;
  /** Short intro to the song: only well-known facts, 1 or 2 sentences. */
  about: string;
  /** Ready-to-paste Instagram caption. */
  caption: string;
}

/** Newest first. */
export const CHALLENGES: Challenge[] = [
  {
    slug: "trilogy-suite-opus-5-sweeps",
    number: 2,
    title: "Trilogy Suite Opus 5",
    artist: "Yngwie Malmsteen",
    section: "Solo la primera repetición de sweeps",
    level: 3,
    cover: "/content/retos/trilogy-suite-opus-5-sweeps/header.webp",
    description:
      "Saca la primera repetición de los sweeps de Trilogy Suite Opus 5, del 0:14 al 0:54 del video: arpegios rápidos que tienen que sonar limpios, una nota a la vez. Grábate en un reel y compártelo con la comunidad.",
    youtubeId: "Ke_mqfiTRQk",
    range: { start: "0:14", end: "0:54" },
    fretQuestUrl:
      "https://fretquest.peruguitar.com/ejercicios/estudios/trilogy-suite-op-5/ejercicio",
    about:
      "Trilogy Suite Op: 5 es el instrumental que cierra Trilogy (1986), el tercer álbum de Yngwie Malmsteen. Es una de sus piezas más representativas del metal neoclásico, con arpegios en sweep inspirados en la música clásica.",
    caption:
      "Aquí mi participación para el reto de @peruguitar: los sweeps de Trilogy Suite Opus 5 de Yngwie Malmsteen 🎸 #PGReto2",
  },
  {
    slug: "little-wing-intro",
    number: 1,
    title: "Little Wing",
    artist: "Jimi Hendrix",
    section: "Solo el intro",
    level: 2,
    cover: "/content/retos/little-wing-intro/header.webp",
    description:
      "Saca de oído el intro de Little Wing, con sus acordes adornados y su sonido limpio. Grábate en un reel y compártelo con la comunidad.",
    youtubeId: "35luFxHO5E0",
    range: { start: "0:00", end: "0:33" },
    about:
      "Little Wing es una balada de The Jimi Hendrix Experience incluida en Axis: Bold as Love (1967). Su intro, con acordes adornados con notas de paso, es una de las más estudiadas por los guitarristas.",
    caption:
      "Aquí mi participación para el reto de @peruguitar: el intro de Little Wing de Jimi Hendrix 🎸 #PGReto1",
  },
];

export const getChallengeCover = ({ cover, youtubeId }: Challenge) =>
  cover ?? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

export const getChallenge = (slug: string) =>
  CHALLENGES.find((challenge) => challenge.slug === slug);
