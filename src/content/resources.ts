export interface ResourceDownload {
  name: string;
  url: string;
  extension: string;
}

export interface Resource {
  id: string;
  name: string;
  /** Publication date (YYYY-MM-DD), used to sort newest first. */
  date: string;
  /** Who made the track, when it is not Peru Guitar's own. */
  author?: string;
  /** Custom cover image (path under /public). */
  cover?: string;
  /** YouTube video used for the thumbnail. */
  youtubeId?: string;
  downloads: ResourceDownload[];
}

export interface BookSpec {
  label: string;
  value: string;
}

export interface Book {
  id: string;
  name: string;
  description: string;
  /** Publication date (YYYY-MM-DD), used to sort newest first. */
  date: string;
  /** Cover image (path under /public). Shows a blank cover when missing. */
  cover?: string;
  specs: BookSpec[];
}

export const BOOKS: Book[] = [
  {
    id: "no-mas-arpegios-aburridos",
    name: "¡No Más Arpegios Aburridos!",
    date: "2026-10-23",
    cover: "/resources/arpegios-guitarrista.webp",
    description:
      "Guía gratuita con ejercicios de arpegios en tablatura para lograr un sonido más enriquecido.",
    specs: [
      { label: "Capítulos", value: "7" },
      { label: "Ejemplos", value: "20 tablaturas" },
      { label: "Revisión", value: "23 de octubre de 2026" },
    ],
  },
];

export const RESOURCES: Resource[] = [
  {
    id: "peru-guitar-2026-backing-track",
    name: "Peru Guitar (Versión 2026)",
    date: "2026-11-24",
    author: "Carlos Rodriguez",
    cover: "/resources/peru-guitar-navidad-2026.webp",
    downloads: [
      {
        name: "Peru Guitar (Versión 2026) - Backing Track",
        url: "https://drive.google.com/file/d/1khSJ1oPgZEFBgaUO1JIrqzdzPMo9c1I7/view",
        extension: "wav",
      },
    ],
  },
  {
    id: "two-worlds-backing-track",
    name: "Two Worlds",
    date: "2026-10-23",
    youtubeId: "xymcs9DrXk4",
    downloads: [
      {
        name: "Two Worlds - Backing Track (WAV)",
        url: "https://drive.google.com/file/d/1mHR1xBFZZFP38bJWlKyVzu0esbO46XtI/view",
        extension: "wav",
      },
    ],
  },
  {
    id: "alone-backing-track",
    name: "Alone",
    date: "2026-10-23",
    youtubeId: "PmyqZ3izalA",
    downloads: [
      {
        name: "Alone - Backing Track (WAV)",
        url: "https://drive.google.com/file/d/1GVlsqd1PR6UpkCrAW-wZOU3CcTZVkEO1/view",
        extension: "wav",
      },
    ],
  },
];

/** Ebooks and backing tracks together, newest first. */
export type ResourceItem =
  | ({ kind: "book" } & Book)
  | ({ kind: "track" } & Resource);

export const ALL_RESOURCES: ResourceItem[] = [
  ...BOOKS.map((book) => ({ kind: "book" as const, ...book })),
  ...RESOURCES.map((track) => ({ kind: "track" as const, ...track })),
].sort((a, b) => b.date.localeCompare(a.date));
