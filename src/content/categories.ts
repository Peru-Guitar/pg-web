import { PostCategory } from "@/content/types";

export const POST_CATEGORIES: Record<
  PostCategory,
  { name: string; description: string }
> = {
  guitar: {
    name: "Licks y Técnica",
    description:
      "Licks, rutinas y escalas para tocar hoy mismo. Teoría solo la necesaria, directo al diapasón.",
  },
  reflections: {
    name: "Mentalidad",
    description:
      "Hábitos, motivación y la realidad de ser guitarrista. Lo que nadie te dice del camino.",
  },
  production: {
    name: "Producción",
    description: "Graba, mezcla y suena profesional desde casa.",
  },
  events: {
    name: "Comunidad",
    description: "Concursos, proyectos y novedades de Peru Guitar.",
  },
};
