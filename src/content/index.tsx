import { Post } from "./types";

import { pentatonicFusionLick01 } from "./posts/01-pentatonic-fusion-lick";
import { porQueNoMejoramos } from "./posts/02-por-que-no-mejoramos-en-la-guitarra";
import { tiposDeGuitarrista } from "./posts/05-tipos-de-guitarrista";
import { conQuienEstudiarGuitarraEnPeru } from "./posts/06-con-quien-estudiar-guitarra-en-peru";
import { recomendacionParaGrabarGuitarras } from "./posts/07-recomendacion-para-grabar-guitarras";
import { hazEstoCuandoNoSepasQuePracticar } from "./posts/08-haz-esto-cuando-no-sepas-que-practicar";
import { porqQueComponemosMalosSolos } from "./posts/09-por-que-componemos-malos-solos";
import { elProblemaDelGuitarristaModerno } from "./posts/10-el-guitarrista-moderno";
import { porQuePeruNoTieneGuitarristasQueDenLaTallaMundial } from "./posts/11-por-que-peru-no-tiene-guitarristas-que-den-la-talla-mundial";
import { comoTocarFraseosOutsideYQueSuenenBien } from "./posts/12-como-tocar-fraseos-outside";
import { comoComponerUsandoIA } from "./posts/13-como-componer-con-usando-ia";
import { concursoIResultados } from "./posts/14-concurso-i-resultados";
import { fretQuest } from "./posts/15-fret-quest";
import { losEjerciciosAburridosTeHacenCrecer } from "./posts/16-los-ejercicios-aburridos-te-hacen-crecer";
import { pentatonicasModales } from "./posts/17-pentatonicas-modales";

export const POSTS: Post[] = [
  pentatonicFusionLick01,
  porQueNoMejoramos,
  tiposDeGuitarrista,
  conQuienEstudiarGuitarraEnPeru,
  recomendacionParaGrabarGuitarras,
  hazEstoCuandoNoSepasQuePracticar,
  porqQueComponemosMalosSolos,
  elProblemaDelGuitarristaModerno,
  porQuePeruNoTieneGuitarristasQueDenLaTallaMundial,
  comoTocarFraseosOutsideYQueSuenenBien,
  comoComponerUsandoIA,
  concursoIResultados,
  fretQuest,
  losEjerciciosAburridosTeHacenCrecer,
  pentatonicasModales,
].sort((a, b) => b.date.getTime() - a.date.getTime());
