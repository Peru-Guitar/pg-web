/* eslint-disable react/no-unescaped-entities */
import { Post, PostAuthor, PostCategory } from "../types";
import { TabVisualizer } from "../components/TabVisualizer/TabVisualizer";
import { YouTubePlayer } from "../components/YouTubePlayer";

export const pentatonicFusionLick01: Post = {
  id: "pentatonic-fusion-lick-01",
  cover: "/content/pentatonic-fusion-lick-01/header.webp",
  title: "Pentatonic Fusion Lick 01",
  description:
    "Mezcla de pentatónica menor y escala mayor. Enfocado en desarrollar fraseo y lenguaje.",
  category: PostCategory.Guitar,
  date: new Date("2026-02-19T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        En esta nueva entrada veremos que las escalas que ya tenemos bajo los
        dedos son más que suficientes para{" "}
        <strong>desarrollar nuestro vocabulario</strong> y darle una nueva vida
        a <strong>nuestros fraseos</strong>.
      </p>

      <p>
        Antes de pasar a la teoría, escucha y revisa el lick que vamos a
        trabajar hoy. Presta atención al fraseo y a cómo las notas conectan con
        la armonía:
      </p>

      <YouTubePlayer id="heCTwquq5SA" />

      <TabVisualizer
        title="Pentatonic Bm Fusion Lick #1"
        notes={[
          `
    1:10-14-12-10-9-12-10-9-7-10-9-7
    2:10
    1:9-7
    2:10-7
    3:10\\9-7
    4:9p7
    3:7
    4:7h9
    3:7\\6
    4:9p7
    5:9\\7h5
    6:5
          `,
        ]}
      />

      <h2>¿Cuál es el secreto detrás de este lick?</h2>

      <p>
        La idea no es simplemente subir y bajar patrones{" "}
        <strong>de forma lineal como nos enseñaron al principio</strong>, sino
        darles un enfoque mucho más musical. La gran clave está en saber{" "}
        <strong>cuándo y cómo alternar</strong> entre diferentes escalas para
        crear colores nuevos.
      </p>

      <ol>
        <li>
          Primero debemos <strong>visualizar y analizar</strong> qué otras notas
          o escalas tenemos disponibles dentro de la misma "caja" o posición de
          la pentatónica en la que nos encontramos. Siempre hay que tener clara{" "}
          <strong>la dirección hacia la que queremos resolver el lick</strong>.
        </li>

        <li>
          No basta con automatizar el patrón; hay que{" "}
          <strong>hacerlo sonar sobre acordes reales</strong>. Te sugiero
          aterrizar este lick y practicarlo sobre el siguiente backing track:{" "}
          <a
            href="https://www.youtube.com/watch?v=w4x05O_4myE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Modern Jazz Fusion Guitar Backing Track in Bm
          </a>
          .
        </li>
      </ol>

      <h2>Problemas comunes al practicar</h2>

      <ul>
        <li>
          <strong>
            Estás tocando fuera del <em>pocket</em>:
          </strong>{" "}
          Te enfocas tanto en la técnica que no sientes el groove o el pulso
          real del backing track.
        </li>
        <li>
          <strong>Dudas en el mástil:</strong> No tienes interiorizada al 100%
          la digitación de la escala o los intervalos que quieres tocar.
        </li>
        <li>
          <strong>Problemas de métrica:</strong> Tu fraseo no resuelve a tiempo
          en el compás; sientes que te sobran o te faltan notas para caer en el
          tiempo fuerte.
        </li>
      </ul>

      <h2>¿Qué te puedo recomendar?</h2>

      <p>
        <strong>Analiza a fondo</strong> este patrón y ponte el resto de
        resolverlo utilizando la <strong>segunda posición</strong> (o "caja") de
        la pentatónica de Bm. El concepto rítmico y armónico es exactamente el
        mismo, simplemente <strong>trasladas el bloque visualmente</strong> a lo
        largo del mástil y adaptas la digitación.
      </p>
    </>
  ),
};
