export interface MangaChapter {
  number: number;
  /** Spanish title as printed on the page. */
  title: string;
}

/** A manga series; each volume points to it through `series`. */
export interface MangaSeries {
  id: string;
  name: string;
  description: string;
}

export const MANGA_SERIES: MangaSeries[] = [
  {
    id: "mayinblues",
    name: "MayinBlues",
    description:
      "La saga del guitarrista comediante que inventó el Comedy Picking. Léela en orden, desde el Vol. 1.",
  },
];

export interface Manga {
  /** `MangaSeries.id` this volume belongs to. */
  series: string;
  /** Route segment: `<title>_<volume>`, e.g. `mayinblues_1` → /manga/mayinblues_1. */
  slug: string;
  title: string;
  volume: number;
  description: string;
  chapters: MangaChapter[];
  /** Pixel size of the cover and chapter pages. Defaults to 1122x1402. */
  pageSize?: { width: number; height: number };
}

export const DEFAULT_PAGE_SIZE = { width: 1122, height: 1402 };

/** Oldest first (ASC). The home page features the last one. */
const MANGA_LIST: Manga[] = [
  {
    series: "mayinblues",
    slug: "mayinblues_1",
    title: "La historia de MAYINBLUES",
    volume: 1,
    description:
      "El manga de MayinBlues, el guitarrista comediante que desafía al destino. Cinco capítulos sobre el nacimiento del Comedy Picking.",
    chapters: [
      { number: 1, title: "El niño de las cinco cuerdas" },
      { number: 2, title: "El ingeniero del misterio" },
      { number: 3, title: "ERP entra en escena" },
      { number: 4, title: "La guitarra de la traición" },
      { number: 5, title: "El emperador del Comedy Picking" },
    ],
  },
  {
    series: "mayinblues",
    slug: "mayinblues_2",
    title: "La leyenda de MAYINBLUES",
    volume: 2,
    description:
      "El origen de la escuela del Comedy Picking. Lima, comienzos de los 2000: videos bajados por Ares y eMule, licks que no salían y una gran idea.",
    chapters: [
      { number: 1, title: "El conocimiento prohibido" },
      { number: 2, title: "El demonio de los parques" },
      { number: 3, title: "El guerrero de los mil dojos" },
      { number: 4, title: "El maestro que nunca existió" },
      { number: 5, title: "Los últimos duelos" },
      { number: 6, title: "La revelación espiritual" },
    ],
    pageSize: { width: 941, height: 1672 },
  },
  {
    series: "mayinblues",
    slug: "mayinblues_3",
    title: "Los alumnos a los que les desgració la vida",
    volume: 3,
    description:
      "Un periodista de PG TV investiga qué fue de los antiguos alumnos de MayinBlues. Cuatro historias que explican por qué su nombre genera tanto temor.",
    chapters: [
      { number: 1, title: "La entrevista" },
      { number: 2, title: "El primer alumno" },
      { number: 3, title: "Sacrificios necesarios" },
      { number: 4, title: "El gran legado" },
    ],
    pageSize: { width: 941, height: 1672 },
  },
  {
    series: "mayinblues",
    slug: "mayinblues_4",
    title: "ERP cae redondito",
    volume: 4,
    description:
      "ERP ve en MayinBlues una mina de oro y lo invita a una noche en el Perú Guitar Bar. Chelas, un banquete, un préstamo y un puchito que nadie olvidará.",
    chapters: [
      { number: 1, title: "La mina de oro" },
      { number: 2, title: "El banquete del miserable" },
      { number: 3, title: "El amor prohibido" },
      { number: 4, title: "El préstamo millonario" },
      { number: 5, title: "El puchito de la traición" },
    ],
    pageSize: { width: 1024, height: 1536 },
  },
];

/** Newest first (DESC), like every other catalog on the site. */
export const MANGAS = [...MANGA_LIST].reverse();

/** Each series with its volumes, newest first. */
export const mangaSeriesWithVolumes = () =>
  MANGA_SERIES.map((series) => ({
    ...series,
    volumes: MANGAS.filter((m) => m.series === series.id).sort((a, b) => b.volume - a.volume),
  })).filter(({ volumes }) => volumes.length > 0);

/** The most recently added volume. */
export const LATEST_MANGA = MANGAS[0];

export const getManga = (slug: string) => MANGAS.find((m) => m.slug === slug);

/** Images live in /content/manga/<slug>/: cover, capitulo-N, plus -thumb variants and og.jpg. */
export const mangaImage = (slug: string, name: string, thumb = false) =>
  `/content/manga/${slug}/${name}${thumb ? "-thumb" : ""}.webp`;

export const mangaOg = (slug: string) => `/content/manga/${slug}/og.jpg`;
