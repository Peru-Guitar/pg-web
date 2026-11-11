import Link from "next/link";
import { Post, PostAuthor, PostCategory } from "../types";

const JURY = [
  { name: "Luis Fernando", instagram: "luis.ormachea.music" },
  { name: "Jeffrey", instagram: "jeffreebert" },
  { name: "Eduardo Rodríguez", instagram: "erpprojectofficial" },
];

const RANKING: {
  name: string;
  instagram: string;
  feedback: string;
  /** Artistas PG slug, when the participant has a profile. */
  artist?: string;
}[] = [
  {
    name: "Brandon Murga",
    instagram: "brandonmurga73",
    artist: "brandon-murga",
    feedback:
      "Fraseo original y preciso, con gran desarrollo melódico y dinámico.",
  },
  {
    name: "Luis Melendez",
    instagram: "luismelendezguitarist",
    feedback: "Fraseo seguro, buena afinación y silencios con sentido musical.",
  },
  {
    name: "Santiago Zumarán",
    instagram: "santiagozumaran",
    feedback:
      "Precisión y feeling, con slides, vibratos y bends que realzan el clímax.",
  },
  {
    name: "Dave",
    instagram: "dave.ssilva",
    feedback:
      "Buena técnica, bends y arpegios en un diálogo melódico bien construido.",
  },
  {
    name: "Ari",
    instagram: "eins.miutter",
    feedback:
      "Propuesta original, con feeling, color modal y buen control de cuerdas.",
  },
  {
    name: "Manuel Torres",
    instagram: "manueltorresmusic",
    feedback:
      "Buen control de púa y fraseo coherente, con un clímax bien desarrollado.",
  },
  {
    name: "Jordan",
    instagram: "rockshua28",
    feedback:
      "Buen timing y afinación, con cromatismos que dan color al fraseo.",
  },
  {
    name: "Diego",
    instagram: "diegolacua",
    feedback:
      "Bends expresivos y ataque con carácter, respetando el clímax musical.",
  },
  {
    name: "José Aguilar",
    instagram: "joseaguilarortega",
    feedback:
      "Técnica limpia y precisa, con fraseos ochenteros y buen manejo del tono.",
  },
  {
    name: "Sebastián Pareja",
    instagram: "sebsmusic31",
    feedback:
      "Buen sonido e ideas melódicas, con desarrollo fluido y coherente.",
  },
];

const InstagramLink = ({ handle }: { handle: string }) => (
  <a
    href={`https://www.instagram.com/${handle}/`}
    target="_blank"
    rel="noopener noreferrer"
  >
    @{handle}
  </a>
);

export const concursoIIResultados: Post = {
  id: "segundo-concurso-peru-guitar-resultados",
  cover: "/content/segundo-concurso-peru-guitar-resultados/header.webp",
  title: "Segundo Concurso de Peru Guitar: todo un éxito",
  description:
    "40 guitarristas, una pista en tonalidad menor, 3 jurados y S/ 1000 en premios. Así quedó el TOP 10 del Segundo Concurso de Peru Guitar.",
  category: PostCategory.Events,
  date: new Date("2026-11-10T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        En el Perú hay <strong>talento escondido</strong>. Guitarristas que
        estudian, practican y crean en silencio, muchas veces sin un espacio
        donde mostrar lo que hacen. Ese talento no necesita ser inventado:{" "}
        <strong>solo hay que exponerlo y apoyarlo</strong>. Para eso existen
        estos concursos.
      </p>

      <p>
        El <strong>Segundo Concurso de Peru Guitar</strong> reunió a{" "}
        <strong>40 guitarristas</strong> frente a un mismo reto: una{" "}
        <strong>pista base en tonalidad menor</strong> que cada participante
        debía resolver con su propio criterio. Sin una melodía que seguir ni un
        estilo impuesto, cada solo terminó siendo un retrato de quien lo tocaba.
      </p>

      <p>
        Esa libertad hizo que la competencia fuera especialmente reñida. Sobre
        la misma base aparecieron enfoques muy distintos, desde propuestas
        centradas en la melodía hasta otras apoyadas en la técnica o en el color
        modal, y con un nivel tan parejo entre tantos participantes,{" "}
        <strong>definir el ranking fue una tarea exigente</strong>.
      </p>

      <p>
        Y ahí está lo más valioso del concurso: cada guitarrista{" "}
        <strong>manejó su propio lenguaje</strong>. No todos sonaron igual, y
        eso es justamente lo que lo hizo más rico. Detrás de cada solo había
        influencias, decisiones y una forma particular de frasear; en otras
        palabras, <strong>había identidad</strong>.
      </p>

      <h2>El jurado</h2>

      <p>
        La evaluación estuvo a cargo de tres jurados, que escucharon y
        calificaron cada una de las 40 participaciones hasta llegar al resultado
        final:
      </p>

      <ul>
        {JURY.map(({ name, instagram }) => (
          <li key={name}>
            {name} (<InstagramLink handle={instagram} />)
          </li>
        ))}
      </ul>

      <h2>Premios</h2>

      <p>
        El concurso entregó <strong>S/ 1000 en premios</strong> a los tres
        primeros lugares. Las participaciones se recibieron hasta el{" "}
        <strong>20 de octubre de 2026</strong>.
      </p>

      <ul>
        <li>
          <strong>Primer lugar:</strong> S/ 500
        </li>
        <li>
          <strong>Segundo lugar:</strong> S/ 350
        </li>
        <li>
          <strong>Tercer lugar:</strong> S/ 150
        </li>
      </ul>

      <h2>Criterios de calificación</h2>

      <p>
        Cada solo se evaluó con los mismos cuatro criterios, cada uno con un
        peso definido en la nota final:
      </p>

      <ul>
        <li>
          <strong>Técnica (30%):</strong> precisión, afinación y limpieza.
        </li>
        <li>
          <strong>Lenguaje (30%):</strong> fraseo y originalidad de la
          composición.
        </li>
        <li>
          <strong>Desarrollo (25%):</strong> coherencia durante el inicio,
          clímax y cierre.
        </li>
        <li>
          <strong>Sonido (15%):</strong> claridad y balance dentro de la mezcla.
        </li>
      </ul>

      <h2>TOP 10</h2>

      <p>
        Este es el ranking final, acompañado del comentario del jurado sobre
        cada participación:
      </p>

      <ol>
        {RANKING.map(({ name, instagram, feedback, artist }) => (
          <li key={name}>
            <strong>
              {artist ? <Link href={`/artistas/${artist}`}>{name}</Link> : name}
            </strong>{" "}
            (<InstagramLink handle={instagram} />)
            <br />
            <em>{feedback}</em>
          </li>
        ))}
      </ol>

      <p>
        El primer lugar fue para <strong>Brandon Murga</strong>, cuya música
        puedes conocer en su perfil de{" "}
        <Link href="/artistas/brandon-murga">Artistas PG</Link>.
      </p>

      <h2>Lo que deja este concurso</h2>

      <p>
        Cuarenta lecturas distintas de una misma pista confirman algo que se
        repite en los comentarios del jurado: lo que distingue a un buen solo no
        es solo la técnica, sino{" "}
        <strong>
          un fraseo con intención, un desarrollo que construye hacia el clímax y
          un sonido cuidado
        </strong>
        . Si participaste, vale la pena volver a escuchar tu grabación con esos
        tres puntos en mente.
      </p>

      <p>
        Gracias a cada guitarrista que se animó a participar y al jurado por su
        tiempo y dedicación.
      </p>

      <p>
        <strong>Nos vemos en una próxima edición.</strong>
      </p>
    </>
  ),
};
