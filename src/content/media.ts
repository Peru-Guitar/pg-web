export interface Video {
  /** YouTube video id. */
  id: string;
  title: string;
  description: string;
}

export interface PodcastEpisode {
  /** Spotify episode id. */
  id: string;
  title: string;
}

/** Community collabs on YouTube, newest first. */
export const VIDEOS: Video[] = [
  {
    id: "pFijQ76xhXw",
    title: "Hard Rock Collab",
    description:
      "Un collab hecho entre los miembros de la comunidad con invitados especiales.",
  },
  {
    id: "whZg0VYSybE",
    title: "Fusion Collab 2025",
    description:
      "Nueva edición 2025 invitando a personas de otros países también.",
  },
  {
    id: "ZbXxdUDcsjY",
    title: "Georgy Porgy Collab",
    description: "Una colaboración entre Luis Ormachea y ERP Project.",
  },
  {
    id: "KRHpWVrCUC8",
    title: "Jam Fusion Vol III",
    description: "Collab con los antiguos miembros de la comunidad.",
  },
  {
    id: "dCQkrIjc0OA",
    title: "Jam Fusion Vol II",
    description:
      "Collab bastante técnico con los antiguos miembros de la comunidad sobre una base fusion.",
  },
  {
    id: "KcQsUm037b4",
    title: "Jam Fusion Vol I",
    description:
      "Primer collab post cuarentena entre los miembros iniciales de la comunidad.",
  },
];

/** Podcast episodes on Spotify, in release order. */
export const PODCAST_EPISODES: PodcastEpisode[] = [
  { id: "1x0X3tu7Pq1wYY5m9JWFtn", title: "Escuela antigua vs moderna" },
  { id: "4UB8iubyTCziEy2Ay0m9Rl", title: "¿Qué es tocar bien?" },
  {
    id: "0ZrgLDPns5ldtfV99lpuDq",
    title: "Redes sociales + música instrumental",
  },
  { id: "0ssmBFrLYcrixnfhbxm2MP", title: "Experiencia en el mundo chivero" },
  { id: "1Vk6TEA1PkrpsO2skTrZBL", title: "Entre riffs y la vida laboral" },
  { id: "4lrCn61s3oZgUJ52wKU0fT", title: "Emigrar para estudiar música" },
  { id: "4YenYCgWTkuivsF5KK3vPU", title: "El shred no tiene género" },
];
