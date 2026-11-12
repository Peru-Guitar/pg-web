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
  /** "City, Country", shown in the header. Defaults to "Perú". */
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
    slug: "santiago-zumaran",
    name: "Santiago Zumarán",
    tagline: "Guitarrista de blues, estudiante de ejecución y sesionista",
    bio: [
      "Santiago Zumarán es un guitarrista de blues que estudia música con especialidad en ejecución en la UPC. Trabaja como sesionista y ganó el concurso de la tienda MakeMusic, cuyo premio fue una Gibson SG Standard 61.",
      "Empezó a tocar a los 9 años con la guitarra acústica. Desde el inicio sacó arreglos en fingerstyle, deslumbrado por guitarristas asiáticos que tocaban a la vez la armonía y la melodía de la voz. Eso fue lo que hizo principalmente hasta los 15 años.",
      "A esa edad le compraron su primera guitarra eléctrica. Hasta entonces no la disfrutaba mucho, porque la asociaba con distorsiones y géneros pesados. Todo cambió cuando, por casualidad, llegó a un video de John Mayer y descubrió una forma de tocarla completamente distinta a la que había imaginado.",
      "Al escuchar distintas versiones en vivo de una misma canción, notó que Mayer nunca tocaba el mismo solo: así descubrió la improvisación. También gracias a él llegó al blues y a guitarristas como B.B. King y Stevie Ray Vaughan, un género donde la guitarra suena visceral y humana. Ahí empezó de verdad su camino en la música.",
      "Años después empezó la carrera de música en la UPC y entró a la especialidad de ejecución, porque tocar la guitarra es lo que más lo mueve. La guitarra lo ha llevado a tocar en escenarios y a trabajar como sesionista en distintos proyectos.",
      "En 2025 participó en el concurso de la tienda MakeMusic, con alrededor de 250 participantes. Fue uno de los 10 finalistas que tocaron en vivo en la tienda y, para su sorpresa, ganó el gran premio: una Gibson SG Standard 61. En 2026 obtuvo el tercer puesto en el Segundo Concurso de Peru Guitar, donde 40 guitarristas crearon un solo sobre el mismo backing track.",
      "Lo que más destaca de su forma de tocar, según le han dicho siempre, es el feeling. No se considera un guitarrista virtuoso ni de gran velocidad, algo que admira en otros y que siempre le ha costado. Por eso, y por la música que escucha, en su mayoría blues, lo que más ha desarrollado es hablar a través de la guitarra.",
      "Hoy sigue buscando su camino en la música, abierto a los lugares y personas a los que la guitarra lo lleve. A todo el que toque guitarra le pide que la disfrute y que se sienta afortunado, porque probablemente es lo más cercano que tenemos a un superpoder.",
    ],
    birthDate: "2004-09-06",
    styles: ["Blues", "Improvisación", "Fingerstyle"],
    photo: "/content/artistas/santiago-zumaran/photo.webp",
    socials: {
      instagram: "https://www.instagram.com/santiagozumaran",
    },
  },
  {
    slug: "brandon-murga",
    name: "Brandon Murga",
    tagline: "Guitarrista de metal, darkwave y metal industrial",
    bio: [
      "Brandon Murga es un guitarrista autodidacta que empezó en el black metal a los 13 años. Hoy desarrolla una propuesta propia entre el darkwave y el metal industrial, con cuatro producciones de estudio y destacados puestos en concursos internacionales.",
      "Empezó a tocar a los 13 años en el black metal, con agrupaciones locales y una disciplina que en sus primeros años lo llevó a practicar entre 6 y 10 horas diarias. Luego integró la banda de thrash metal Desidia y fundó por un breve tiempo el proyecto de metal alternativo Antiser.",
      "Con los años ha construido una identidad musical propia, orientada al darkwave y al metal industrial, que se plasma en sus producciones de estudio: Aquí Descanso (2013), Mental Suicide (2016), Plastic Lives (2021) y el EP Nihil (2023).",
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
      "Su sonido se mueve entre la fusión, el rock instrumental y la música de videojuegos: en Spotify tiene sus versiones de los temas finales de Resident Evil 2 y 3, del tema Terran de StarCraft y de ゆずれない願い.",
      "Entre sus temas instrumentales destacan Two Worlds, Alone y Nothing Is Left, además de Repression. Two Worlds y Alone también están disponibles como backing tracks gratuitos, para que la comunidad pueda tocar sobre ellos.",
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
      "A lo largo de su trayectoria ha participado en diversos proyectos musicales. Destaca su paso por Clérigo, banda de heavy metal del sur peruano, con la que grabó los EP Volarás (2006) y Bajo las sombras (2023), además de algunos sencillos junto a Pacho Brea y Christian Bertoncelli.",
      "Su discografía solista incluye el EP Guerreros del Metal (2010), el álbum Proyecto Lucaz (2015) y el álbum instrumental Entropía (2026), además de sencillos orientados al jazz.",
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
  {
    slug: "camilo-tellez",
    name: "Camilo Tellez",
    tagline: "Guitarrista y compositor de metal progresivo",
    bio: [
      "Camilo Tellez es un guitarrista y compositor de Bogotá, Colombia. Ganó el concurso Guitar Universe 2026, ha publicado tres álbumes y forma parte de la escena del metal progresivo colombiano.",
      "Su nombre completo es Hernán Camilo Téllez González. Empezó en la música en Crea de Idartes, tras replantearse su futuro cuando aún estaba en el colegio.",
      "Sus influencias van desde Pink Floyd, Scorpions, Creedence Clearwater Revival y Eric Clapton hasta artistas más actuales como Jakub Zytecki, David Maxim Micic y Plini.",
      "Ganó el concurso Guitar Universe 2026 y ha publicado tres álbumes. Junto a otros artistas colombianos, ha empezado a trazar un camino en el metal progresivo de su país.",
    ],
    location: "Bogotá, Colombia",
    photo: "/content/artistas/camilo-tellez/photo.webp",
    birthDate: "2006-09-01",
    styles: ["Metal progresivo", "Rock"],
    socials: {
      instagram: "https://www.instagram.com/camilotellez_gtr",
      youtube: "https://www.youtube.com/@CamiloTellez_GTR",
      spotify: "https://open.spotify.com/artist/6PBfDI9TAtp8eKJ7RigS9q",
    },
    spotifyArtistId: "6PBfDI9TAtp8eKJ7RigS9q",
    youtubeVideo: { id: "GJw0eBSx0ho", title: "Camilo Tellez - Fácil De Olvidar (Official Video)" },
  },
  {
    slug: "mario-quintana",
    name: "Mario Quintana",
    tagline: "Guitarrista de metal y música instrumental",
    bio: [
      "Mario Quintana es un guitarrista peruano, exintegrante de la banda italiana de thrash metal Expired. Desde 2020 desarrolla una carrera solista de música instrumental.",
      "Su nombre completo es Mario Bruno Quintana Vidal. Con Expired grabó dos discos entre 2009 y 2012.",
      "Tras un receso musical, regresó en 2020 como solista de música instrumental, publicando sencillos y creando contenido musical en TikTok.",
      "En 2024 lanzó su EP Naivety Ignorance and Nostalgia.",
    ],
    birthDate: "1988-03-17",
    styles: ["Thrash metal", "Instrumental"],
    photo: "/content/artistas/mario-quintana/photo.webp",
    socials: {
      instagram: "https://www.instagram.com/marioquintanav/",
      youtube: "https://www.youtube.com/@MarioQuintanaGuitar",
      spotify: "https://open.spotify.com/artist/2vUyks44jKINvtKpcD0zQk",
      tiktok: "https://www.tiktok.com/@marioquintanaguitar",
    },
    spotifyArtistId: "2vUyks44jKINvtKpcD0zQk",
    youtubeVideo: { id: "csVijm20YV0", title: "Mario Quintana - Party of Ignorance [Video Oficial]" },
  },
];

/** Guitarists featured on Peru Guitar, sorted alphabetically by name. Order = directory order. */
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
