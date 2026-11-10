export type ArtistSocial =
  | "instagram"
  | "youtube"
  | "spotify"
  | "tiktok"
  | "facebook"
  | "website";

export const ARTISTS_HERO = "/content/artistas/hero.webp";

export interface Artist {
  slug: string;
  name: string;
  /** One line under the name in the hero. */
  tagline: string;
  /** Short bio, one string per paragraph. */
  bio: string[];
  /** City, shown in the header. All artists are Peruvian, so it defaults to "Perú". */
  location?: string;
  styles: string[];
  /** Square portrait (~800×800): /content/artistas/<slug>/photo.webp. Falls back to initials. */
  photo?: string;
  /** Wide hero image (1600×900): /content/artistas/<slug>/cover.webp. */
  cover?: string;
  socials: Partial<Record<ArtistSocial, string>>;
  /** Spotify artist id: shows the artist player. */
  spotifyArtistId?: string;
  /** Spotify album, track or playlist embeds, as "album/<id>", "track/<id>" or "playlist/<id>". */
  spotifyEmbeds?: string[];
  /** YouTube video ids, featured first. */
  youtubeVideos?: { id: string; title: string }[];
  /** Optional contact CTA (classes, bookings). */
  contact?: { label: string; href: string };
}

const ARTIST_LIST: Artist[] = [
  {
    slug: "brandon-murga",
    name: "Brandon Murga",
    tagline: "Guitarrista de metal, darkwave y metal industrial",
    bio: [
      "Brandon Murga es un guitarrista autodidacta que empezó en el black metal a los 13 años. Hoy desarrolla una propuesta propia entre el darkwave y el metal industrial, con cuatro producciones de estudio y destacados puestos en concursos internacionales.",
      "Empezó a tocar a los 13 años en el black metal, con agrupaciones locales y una disciplina que en sus primeros años lo llevó a practicar entre 6 y 10 horas diarias. Luego integró la banda de thrash metal Desidia y fundó por un breve tiempo el proyecto de metal alternativo Antiser.",
      "Con los años ha construido una identidad musical propia, orientada al darkwave y al metal industrial, que se plasma en sus producciones de estudio: \"Aquí Descanso\" (2013), \"Mental Suicide\" (2016), \"Plastic Lives\" (2021) y el EP \"Nihil\" (2023).",
      "Ha competido en concursos internacionales como el Kiesel Contest y el JTC Jam of the Month, donde alcanzó el tercer puesto a nivel mundial en noviembre de 2024. En 2026 ganó el primer lugar en el concurso de solos de Peru Guitar.",
      "Entre sus principales influencias están John Petrucci, Marty Friedman, Per Nilsson, John 5, Robin Finck y Buckethead. También disfruta reinterpretar música de videojuegos íntegramente en la guitarra.",
      "Su competitividad también lo llevó a los videojuegos: entre 2016 y 2022 fue jugador profesional de Street Fighter V bajo el seudónimo BlackLava, con destacadas posiciones en torneos como la Liga Pro Gaming de Movistar, Collision 2017 y Lima Salty 4.",
    ],
    styles: ["Metal", "Darkwave", "Metal industrial"],
    photo: "/content/artistas/brandon-murga/photo.webp",
    socials: {
      instagram: "https://www.instagram.com/brandonmurga73/",
      youtube: "https://www.youtube.com/@BrandonMurga",
    },
    youtubeVideos: [
      { id: "DjwPu1w_zqw", title: "Neuromancers (Scar Symmetry Cover Solo)" },
    ],
  },
  {
    slug: "erp-project",
    name: "ERP Project",
    tagline: "El proyecto del guitarrista Eduardo Rodríguez",
    bio: [
      "ERP Project es el proyecto personal del guitarrista Eduardo Rodríguez, un espacio donde comparte ideas musicales y colaboraciones con otros artistas.",
      "Aunque su profesión principal no está ligada a la música, le dedica tiempo y disciplina para crear contenido de calidad. Esa misma constancia lo llevó a fundar Peru Guitar, la comunidad de la que luego nacieron Fret Quest y PG Fighters.",
      "Su sonido se mueve entre la fusión, el rock instrumental y la música de videojuegos: en Spotify tiene sus versiones de los temas finales de Resident Evil 2 y 3, del tema Terran de StarCraft y de \"ゆずれない願い\", junto a Ingrid Castro.",
      "Entre sus temas destacan \"Two Worlds\", que hoy también es un backing track gratuito para la comunidad, y \"Repression\", con guitarras de Koko Rengifo.",
      "Actualmente trabaja en composiciones propias, con la intención de presentarlas en vivo en un futuro.",
    ],
    location: "Perú",
    styles: ["Fusión", "Rock instrumental", "Videojuegos"],
    photo: "/content/artistas/erp-project/photo.webp",
    socials: {
      instagram: "https://www.instagram.com/erpprojectofficial/",
      spotify: "https://open.spotify.com/artist/6xR1HRj6SzReee9R2EkOUo",
    },
    spotifyArtistId: "6xR1HRj6SzReee9R2EkOUo",
    youtubeVideos: [{ id: "xymcs9DrXk4", title: "Two Worlds (Definitive Edition)" }],
  },
  {
    slug: "koko-rengifo",
    name: "Koko Rengifo",
    tagline: "Guitarrista de rock, metal y fusión, y profesor de guitarra eléctrica",
    bio: [
      "Koko Rengifo es guitarrista eléctrico y profesor con base en Lima, con una trayectoria que va del metal en banda a la enseñanza personalizada de la guitarra.",
      "Enseña guitarra eléctrica a alumnos de todas las edades, con foco en técnicas contemporáneas y lenguaje musical. Tiene un plan estructurado, pero se adapta a lo que cada alumno busca en el momento: si le pides un tema, a la semana ya lo tiene listo para enseñártelo. Más que un profesor, funciona como un coach personal.",
      "Fue guitarrista de la banda de metal Estigma (2014–2016) y participó en \"Leading to Nowhere\" de Ancestral Dawn, junto a Fabio Lione y Nathalie Markoch. También ha hecho mezcla y guitarras para proyectos de rock y metal como \"Repression\" de ERP Project.",
    ],
    location: "Lima, Perú",
    styles: ["Rock", "Metal", "Fusión"],
    photo: "/content/artistas/koko-rengifo/photo.webp",
    socials: {
      youtube: "https://www.youtube.com/watch?v=bgttYMrqR68",
      spotify: "https://open.spotify.com/track/6kZcojf7bYazjl0Gs218BS",
    },
    spotifyEmbeds: ["track/6kZcojf7bYazjl0Gs218BS"],
    youtubeVideos: [{ id: "bgttYMrqR68", title: "Boogie Songs" }],
  },
];

/** Peruvian guitarists featured on Peru Guitar, sorted alphabetically by name. Order = directory order. */
export const ARTISTS = [...ARTIST_LIST].sort((a, b) =>
  a.name.localeCompare(b.name, "es", { sensitivity: "base" }),
);

export const getArtist = (slug: string) =>
  ARTISTS.find((artist) => artist.slug === slug);

export const artistInitials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
