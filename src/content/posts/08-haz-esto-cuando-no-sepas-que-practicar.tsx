import { TabVisualizer } from "../components/TabVisualizer/TabVisualizer";
import { YouTubePlayer } from "../components/YouTubePlayer";
import { Post, PostAuthor, PostCategory } from "../types";

export const hazEstoCuandoNoSepasQuePracticar: Post = {
  id: "haz-esto-cuando-no-sepas-que-practicar",
  cover: "/content/haz-esto-cuando-no-sepas-que-practicar/header.webp",
  title: "Haz esto cuando no sepas qué practicar: Rutina de técnica y mapeo",
  description:
    "Optimiza tu sesión de práctica combinando el control técnico y la visualización del mástil en un solo ejercicio aditivo.",
  category: PostCategory.Guitar,
  date: new Date("2026-02-24T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        Esta rutina busca maximizar sesiones cortas trabajando dos pilares en
        simultáneo:
      </p>

      <ul>
        <li>
          <strong>Técnica:</strong> Coordinación, velocidad y control de púa.
        </li>
        <li>
          <strong>Mapeo:</strong> Visualización de escalas a lo largo de todo el
          diapasón.
        </li>
      </ul>

      <p>
        <strong>Nota:</strong> Trabajaremos con patrones de{" "}
        <strong>3 notas por cuerda</strong>, ajustando a 2 notas cuando la
        escala lo requiera.
      </p>

      <h2>El Sistema Aditivo</h2>

      <p>
        La clave es avanzar una cuerda nueva y{" "}
        <strong>regresar siempre a la tónica original</strong>. Esto obliga al
        cerebro a memorizar trayectos dinámicos y no solo dibujos estáticos.
      </p>

      <p>
        <strong>Usa metrónomo siempre:</strong> No toques a lo loco. Empieza
        despacio, donde todo suene limpio. Solo cuando sientas que el ejercicio
        ya se te hace <strong>muy fácil</strong>, súbele un poco a la velocidad
        (de 5 en 5 BPM). La precisión es más importante que la rapidez.
      </p>

      <p>
        Esta rutina es versátil: puedes rotar la técnica cada semana (
        <strong>alternate picking</strong>, <strong>economy picking</strong> o{" "}
        <strong>legato</strong>).
      </p>

      <TabVisualizer
        maxNotesPerBar={12}
        maxVisibleLines={3}
        title="F# Menor Natural - Secuencia Aditiva"
        notes={[
          `
    6:2-4-5
    5:2-4-5-4-2
    6:5-4

    6:2-4-5
    5:2-4-5
    4:2-4-6-4-2
    5:5-4-2
    6:5-4

    6:2-4-5
    5:2-4-5
    4:2-4-6
    3:2-4-2
    4:6-4-2
    5:5-4-2
    6:5-4

    6:2-4-5
    5:2-4-5
    4:2-4-6
    3:2-4
    2:2-3-5-3-2
    3:4-2
    4:6-4-2
    5:5-4-2
    6:5-4

    6:2-4-5
    5:2-4-5
    4:2-4-6
    3:2-4
    2:2-3-5
    1:2-4-5-4-2
    2:5-3-2
    3:4-2
    4:6-4-2
    5:5-4-2
    6:5-4-2
    `,
        ]}
      />

      <YouTubePlayer id="Jv1RSOg58JQ" />

      <h3>Cómo avanzar (Sin complicaciones)</h3>

      <p>Si ver los 7 modos de golpe te marea, hazlo por niveles:</p>

      <ol>
        <li>
          <strong>Nivel 1:</strong> Domina el patrón solo en{" "}
          <strong>F# menor</strong> (el de la tabla de arriba).
        </li>
        <li>
          <strong>Nivel 2:</strong> Cuando lo tengas, agrega el{" "}
          <strong>G# Locrio</strong>. Toca el patrón de F#m y, acto seguido, el
          de G# Locrio.
        </li>
        <li>
          <strong>Nivel 3:</strong> Suma el siguiente modo y repite.
        </li>
      </ol>

      <p>
        La idea es ir <strong>interiorizando</strong> los modos conforme los
        domines hasta que puedas recorrer todo el mástil. No pongo la tablatura
        de todos porque el post sería infinito; queda de tarea.
      </p>

      <h2>Hábito y Memoria Muscular</h2>

      <p>
        La <strong>persistencia</strong> es lo más importante. Con{" "}
        <strong>30 minutos diarios</strong> notarás resultados reales.
      </p>

      <p>
        Te sugiero definir un horario fijo —en mi caso, a las 11:00 p. m.— para{" "}
        <strong>fortalecer la memoria muscular</strong>. El cuerpo se habitúa a
        mecanizar los movimientos en un bloque de tiempo predecible.
      </p>

      <h2>Variaciones</h2>

      <p>
        Si ya dominas una técnica, <strong>cámbiala por otra</strong>: economy,
        hybrid picking o legato.
      </p>

      <p>
        Lo mismo con las escalas: si ya dominas la{" "}
        <strong>escala mayor y sus siete modos</strong> (donde se incluye la
        menor natural), muévete a la <strong>menor melódica</strong> o{" "}
        <strong>armónica</strong> y sus respectivos modos. Prioriza escalas que
        te permitan mantener el flujo de <strong>3 notas por cuerda</strong>{" "}
        para no perder la inercia del ejercicio.
      </p>
    </>
  ),
};
