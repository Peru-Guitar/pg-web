export interface HubApp {
  id: string;
  name: string;
  description: string;
  href: string;
  external?: boolean;
  tags: string[];
}

export const HUB_APPS: HubApp[] = [
  {
    id: "fretquest",
    name: "Fret Quest",
    description: "Tu plan para practicar guitarra y progresar cada día.",
    href: "https://app.peruguitar.com",
    external: true,
    tags: ["Rutinas", "Progreso", "Retos"],
  },
  {
    id: "pg-fighters",
    name: "PG Fighters",
    description: "El juego de la comunidad Peru Guitar.",
    href: "https://fighters.peruguitar.com",
    external: true,
    tags: ["Juego", "Ranking"],
  },
  {
    id: "tienda",
    name: "Tienda",
    description: "Material para llevar tu guitarra al siguiente nivel.",
    href: "/tienda",
    tags: ["Productos"],
  },
];
