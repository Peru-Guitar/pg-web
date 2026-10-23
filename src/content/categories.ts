import { PostCategory } from "@/content/types";

export const POST_CATEGORIES: Record<
  PostCategory,
  { name: string; description: string }
> = {
  guitar: {
    name: "Guitarra",
    description: "Técnicas, ejercicios y guías para dominar las seis cuerdas.",
  },
  theory: {
    name: "Teoría Musical",
    description:
      "Conceptos fundamentales, armonía y análisis para entender la música.",
  },
  reflections: {
    name: "Reflexiones",
    description:
      "Pensamientos, mentalidad y experiencias personales sobre el camino de la guitarra eléctrica.",
  },
  production: {
    name: "Producción",
    description:
      "Tips de mezcla, mastering y herramientas de software musical.",
  },
  events: {
    name: "Eventos",
    description:
      "Concursos, encuentros y actividades de la comunidad Peru Guitar.",
  },
};
