export interface MangaChapter {
  number: number;
  /** Spanish title as printed on the page. */
  title: string;
}

export interface Manga {
  /** Route segment: `<title>_<volume>`, e.g. `mayinblues_1` → /manga/mayinblues_1. */
  slug: string;
  title: string;
  volume: number;
  description: string;
  chapters: MangaChapter[];
}

const MANGA_LIST: Manga[] = [
  {
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
];

export const MANGAS = MANGA_LIST;

export const getManga = (slug: string) => MANGAS.find((m) => m.slug === slug);

/** Images live in /content/manga/<slug>/: cover, capitulo-N, plus -thumb variants and og.jpg. */
export const mangaImage = (slug: string, name: string, thumb = false) =>
  `/content/manga/${slug}/${name}${thumb ? "-thumb" : ""}.webp`;

export const mangaOg = (slug: string) => `/content/manga/${slug}/og.jpg`;
