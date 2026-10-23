import { YouTubePlayer } from "../components/YouTubePlayer";
import { Post, PostAuthor, PostCategory } from "../types";

export const comoTocarFraseosOutsideYQueSuenenBien: Post = {
  id: "como-tocar-fraseos-outside-y-que-suenen-bien",
  cover: "/content/como-tocar-fraseos-outside-y-que-suenen-bien/header.webp",
  title: "Cómo tocar fraseos outside y que suenen bien",
  description:
    "La teoría del outside es simple, pero el secreto para que no suene a nota falsa está en el ritmo.",
  category: PostCategory.Guitar,
  date: new Date("2026-03-03T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        El concepto de <strong>outside</strong> es tocar fuera del bloque.
        Consiste en usar por un momento una escala prestada, generalmente un
        semitono hacia arriba o hacia abajo, y luego volver. Es un recurso
        característico del fusion.
      </p>

      <p>
        Por ejemplo: si <strong>Dm</strong> es la fundamental, la pentatónica de
        Dm es la opción segura, pero para estar outside podríamos usar{" "}
        <strong>D#m</strong> o <strong>C#m</strong>.
      </p>

      <h2>El problema en la práctica</h2>
      <p>
        La teoría es simple, pero al practicar sobre un backing track suele
        sonar mal. Sientes que las notas chocan de forma desagradable porque no
        estás respetando la acentuación rítmica.
      </p>

      <h2>El truco: No tocar en el pulso 1</h2>
      <p>
        En un compás de 4/4, el <strong>pulso 1</strong> es el tiempo fuerte
        donde reposa la tónica. Si atacas el fraseo outside justo ahí, el oído
        lo percibe como un error técnico porque espera estabilidad.
      </p>

      <p>
        La clave es el <strong>desplazamiento rítmico</strong>. Entra en el{" "}
        <strong>pulso 2</strong> o en tiempos débiles. Al dejar que el pulso 1
        reafirme la armonía base, el movimiento outside se percibe como una
        intención musical sofisticada.
      </p>

      <p>
        Al comienzo vas a tener que contar y prácticar, pero luego con la
        práctica se interioriza.
      </p>

      <h2>¿Cómo volver a la escala?</h2>
      <p>
        Resolver la tensión es tan importante como generarla. Recomiendo que la
        última nota de tu patrón outside siempre a un semitono o un tono máximo
        de distancia de tu escala destino (Dm).
      </p>
      <p>
        En el video uso el arpegio de <strong>Dm7</strong> para volver. Como
        terminé el patrón de la pentatónica de D#m en una zona cercana, el
        arpegio de Dm7 me sirvió para unir ambos bloques y resolver de forma
        fluida.
      </p>

      <YouTubePlayer id="KV6t7g96EbA" />
    </>
  ),
};
