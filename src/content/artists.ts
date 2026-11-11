export type ArtistSocial =
  | "instagram"
  | "youtube"
  | "spotify"
  | "tiktok"
  | "facebook"
  | "website";

/** Google Form to apply to Artistas PG. */
export const ARTISTS_FORM_URL = "https://forms.gle/jndRQNKtH4mt61ZM7";

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
  /** Optional birth date, "YYYY-MM-DD". Shown in the header when present. */
  birthDate?: string;
  styles: string[];
  /** Square portrait (~800×800): /content/artistas/<slug>/photo.webp. Falls back to initials. */
  photo?: string;
  /** Wide hero image (1600×900): /content/artistas/<slug>/cover.webp. */
  cover?: string;
  socials: Partial<Record<ArtistSocial, string>>;
  /** Spotify artist id: the only Spotify embed we use (artist player). */
  spotifyArtistId?: string;
  /** One featured YouTube video. */
  youtubeVideo?: { id: string; title: string };
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
    birthDate: "1996-07-10",
    styles: ["Metal", "Darkwave", "Metal industrial"],
    photo: "/content/artistas/brandon-murga/photo.webp",
    socials: {
      instagram: "https://www.instagram.com/brandonmurga73/",
      youtube: "https://www.youtube.com/@BrandonMurga",
    },
    youtubeVideo: { id: "DjwPu1w_zqw", title: "Neuromancers (Scar Symmetry Cover Solo)" },
  },
  {
    slug: "erp-project",
    name: "ERP Project",
    tagline: "El proyecto del guitarrista Eduardo Rodríguez",
    bio: [
      "ERP Project es el proyecto personal del guitarrista Eduardo Rodríguez, un espacio donde comparte sus ideas musicales.",
      "Aunque su profesión principal no está ligada a la música, le dedica tiempo y disciplina para crear contenido de calidad. Esa misma constancia lo llevó a fundar Peru Guitar, la comunidad de la que luego nacieron Fret Quest y PG Fighters.",
      "Su sonido se mueve entre la fusión, el rock instrumental y la música de videojuegos: en Spotify tiene sus versiones de los temas finales de Resident Evil 2 y 3, del tema Terran de StarCraft y de \"ゆずれない願い\".",
      "Entre sus temas instrumentales destacan \"Two Worlds\", \"Alone\" y \"Nothing Is Left\", además de \"Repression\". \"Two Worlds\" y \"Alone\" también están disponibles como backing tracks gratuitos, para que la comunidad pueda tocar sobre ellos.",
      "Actualmente trabaja en composiciones propias, con la intención de presentarlas en vivo en un futuro.",
    ],
    location: "Perú",
    birthDate: "1989-02-11",
    styles: ["Fusión", "Rock instrumental", "Videojuegos"],
    photo: "/content/artistas/erp-project/photo.webp",
    socials: {
      instagram: "https://www.instagram.com/erpprojectofficial/",
      youtube: "https://www.youtube.com/@ERPProject",
      tiktok: "https://www.tiktok.com/@erpprojectofficial",
      spotify: "https://open.spotify.com/artist/6xR1HRj6SzReee9R2EkOUo",
    },
    spotifyArtistId: "6xR1HRj6SzReee9R2EkOUo",
    youtubeVideo: { id: "xymcs9DrXk4", title: "Two Worlds (Definitive Edition)" },
  },
  {
    slug: "luis-fernando",
    name: "Luis Fernando",
    tagline: "Guitarrista y compositor de fusión",
    bio: [
      "Luis Fernando es un guitarrista y compositor de fusión que pasó por la música clásica, el rock, el blues y el metal antes de encontrar su sonido. Combina la guitarra con su carrera como ingeniero de sistemas.",
      "Empezó a tocar a los 13 años con una guitarra Falcón que era de su padre. Arrancó con la música clásica; a los 17 lo atraparon el rock y el blues, y en sus 20 se fue a lo pesado con el metal y el hard rock.",
      "En paralelo se formó como ingeniero de sistemas y terminó especializándose en bases de datos, relacionales y no relacionales. Últimamente explora la automatización con IA.",
      "Ya en sus 30, sus gustos evolucionaron de forma natural hacia la fusión, el género que hoy escucha y compone, donde caben un poco de todas las etapas por las que pasó. Su banda favorita es T-Square, de Japón.",
      "Entre sus logros, culminó su formación instrumental, es partner de Moises App y quedó en el top 10 del primer concurso de Peru Guitar.",
    ],
    birthDate: "1990-05-26",
    styles: ["Fusión", "Rock", "Blues", "Metal"],
    photo: "/content/artistas/luis-fernando/photo.webp",
    socials: {
      instagram: "https://www.instagram.com/luis.ormachea.music",
      youtube: "https://www.youtube.com/@fernando9026",
    },
    youtubeVideo: { id: "E-A6GGdTjSQ", title: "City pop improv solo" },
  },
  {
    slug: "carlos-caz",
    name: "Carlos Caz",
    tagline: "Guitarrista de rock y jazz",
    bio: [
      "Carlos Caz es un guitarrista peruano de rock y jazz, músico de profesión con estudios de posgrado en Producción y Composición Musical. Pasó por el heavy metal con la banda Clérigo y hoy desarrolla una carrera solista entre el rock y el jazz.",
      "Su relación con la música comenzó desde niño, primero con el piano y luego con la guitarra eléctrica.",
      "A lo largo de su trayectoria ha participado en diversos proyectos musicales. Destaca su paso por Clérigo, banda de heavy metal del sur peruano, con la que grabó los EP \"Volarás\" (2006) y \"Bajo las sombras\" (2023), además de algunos sencillos junto a Pacho Brea y Christian Bertoncelli.",
      "Su discografía solista incluye el EP \"Guerreros del Metal\" (2010), el álbum \"Proyecto Lucaz\" (2015) y el álbum instrumental \"Entropía\" (2026), además de sencillos orientados al jazz.",
      "Entre sus principales influencias están Walter Giardino, Felipe Staiti, Yngwie Malmsteen, Steve Vai, Joe Satriani, Luis Salinas y George Benson.",
      "Para Carlos, la música representa su voz, su camino y su vida.",
    ],
    birthDate: "1983-07-23",
    styles: ["Rock", "Jazz", "Heavy metal"],
    photo: "/content/artistas/carlos-caz/photo.webp",
    socials: {
      instagram: "https://www.instagram.com/carloscazmusic",
      youtube: "https://www.youtube.com/@CarlosCazMusic",
      spotify: "https://open.spotify.com/artist/0AtaM8UxhVEjw8UTgktYPN",
    },
    spotifyArtistId: "0AtaM8UxhVEjw8UTgktYPN",
    youtubeVideo: {
      id: "nt3CPCLlh5A",
      title: "Carlos Caz - Morning Star (Vinnie Moore) Guitar Performance",
    },
  },
];

/** Peruvian guitarists featured on Peru Guitar, sorted alphabetically by name. Order = directory order. */
export const ARTISTS = [...ARTIST_LIST].sort((a, b) =>
  a.name.localeCompare(b.name, "es", { sensitivity: "base" }),
);

/** Birth date in Spanish: "10 de julio de 1996". */
export const formatBirthDate = (date: string) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const getArtist = (slug: string) =>
  ARTISTS.find((artist) => artist.slug === slug);

export const artistInitials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
