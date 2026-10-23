export interface ResourceDownload {
  name: string;
  url: string;
  extension: string;
  size?: string;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  key: string;
  bpm: number;
  youtubeId: string;
  /** What to practice over the track. */
  practice: { title: string; text: string }[];
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
  /** Cover image (path under /public). Shows a blank cover when missing. */
  cover?: string;
  specs: BookSpec[];
}

export const BOOKS: Book[] = [
  {
    id: "no-mas-arpegios-aburridos",
    name: "¡No Más Arpegios Aburridos!",
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
    id: "two-worlds-backing-track",
    name: "Two Worlds",
    description:
      "Versión definitiva de mi primer tema instrumental. Metal moderno para practicar fraseos técnicos, shred o líneas melódicas.",
    key: "Bm (Si menor)",
    bpm: 134,
    youtubeId: "xymcs9DrXk4",
    practice: [
      {
        title: "Fraseo y técnica",
        text: "Control de bends en pasajes melódicos o ráfagas de alternate picking y legato sobre una base rítmica quirúrgica.",
      },
      {
        title: "Dinámicas",
        text: "Transiciones entre frases pausadas y licks de alta velocidad según la intensidad del track.",
      },
    ],
    downloads: [
      {
        name: "Two Worlds - Backing Track (WAV)",
        url: "https://drive.google.com/file/d/1mHR1xBFZZFP38bJWlKyVzu0esbO46XtI/view?usp=sharing",
        extension: "wav",
        size: "73MB",
      },
    ],
  },
  {
    id: "alone-backing-track",
    name: "Alone",
    description:
      "Track melancólico de armonía rica. Combina pasajes introspectivos con un cierre de alta exigencia técnica.",
    key: "Bm (Si menor)",
    bpm: 156,
    youtubeId: "PmyqZ3izalA",
    practice: [
      {
        title: "Armonía y resolución",
        text: "Elección de notas sobre cambios de acordes complejos y pasajes expresivos.",
      },
      {
        title: "Técnica final",
        text: "Licks rápidos y precisos en el clímax del track.",
      },
    ],
    downloads: [
      {
        name: "Alone - Backing Track (WAV)",
        url: "https://drive.google.com/file/d/1GVlsqd1PR6UpkCrAW-wZOU3CcTZVkEO1/view?usp=sharing",
        extension: "wav",
        size: "74MB",
      },
    ],
  },
];
