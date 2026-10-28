import { Post, PostAuthor, PostCategory } from "../types";
import { TabVisualizer } from "../components/TabVisualizer/TabVisualizer";

const FRET_QUEST_MODALES = "https://fretquest.peruguitar.com/ejercicios/pentatonica#modales";

export const pentatonicasModales: Post = {
  id: "pentatonicas-modales",
  cover: "/content/pentatonicas-modales/header.webp",
  title: "Pentatónicas modales: el color de cada modo en solo cinco notas",
  description:
    "Cambia una sola nota de la pentatónica por la nota de color de cada modo y suena a dórico, frigio o lidio. Siete pentatónicas para salir del sonido de siempre.",
  category: PostCategory.Guitar,
  date: new Date("2026-10-28T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        La pentatónica es lo primero que aprendemos para improvisar y, muchas
        veces, lo único que usamos. Funciona, pero después de un tiempo{" "}
        <strong>todo empieza a sonar igual</strong>.
      </p>

      <p>
        Aquí veremos una forma de darle otro color sin tirar lo que ya sabes:{" "}
        <strong>
          tomar la nota que hace distinto a cada modo y meterla en la
          pentatónica
        </strong>
        .
      </p>

      <h2>No tienes que aprenderte todo</h2>

      <p>
        Antes de seguir, algo importante: esto no es una lista para memorizar.{" "}
        <strong>Lo valioso es saber que estas opciones existen.</strong>
      </p>

      <p>
        Cuando quieras probar algo nuevo en un solo, o un tema te pida otro
        color, vuelves aquí, tomas una y la agregas a tu forma de tocar. Así se
        usa y así se aprende en realidad: de a poco, cuando la música lo pide.
      </p>

      <h2>La idea: una nota de color</h2>

      <p>
        Cada modo tiene una nota que lo hace sonar distinto. El dórico es menor,
        pero con una sexta mayor que le da luz. El frigio tiene una segunda
        menor que lo vuelve oscuro y español. El lidio tiene una cuarta
        aumentada que lo hace flotar.
      </p>

      <p>
        La pentatónica modal es simple:{" "}
        <strong>
          partes de la pentatónica mayor o menor (según la tercera del modo) y
          cambias una nota por la nota de color
        </strong>
        . Siguen siendo cinco notas, pero ya no suenan a la pentatónica de
        siempre.
      </p>

      <h2>Las siete, en C menor</h2>

      <p>
        Tomamos los modos de C menor (C eólico), cada uno desde su propia
        tónica. La nota de color va en negrita:
      </p>

      <ul>
        <li>
          <strong>Eólica de C</strong> (C Eb F G <strong>Ab</strong>): la menor
          de siempre, pero con la b6. Más dramática y melancólica.
        </li>
        <li>
          <strong>Locria de D</strong> (D F G <strong>Ab</strong> C): menor con
          la b5. Inestable, pura tensión.
        </li>
        <li>
          <strong>Jónica de Eb</strong> (Eb G Ab Bb <strong>D</strong>): mayor
          con la 7 mayor. Brillante y abierta.
        </li>
        <li>
          <strong>Dórica de F</strong> (F Ab Bb C <strong>D</strong>): menor con
          la 6 mayor. El color de Santana y del funk.
        </li>
        <li>
          <strong>Frigia de G</strong> (G <strong>Ab</strong> C D F): menor con
          la b2. Oscura, suena española y metalera.
        </li>
        <li>
          <strong>Lidia de Ab</strong> (Ab C <strong>D</strong> Eb G): mayor con
          la #4. Flotante, de banda sonora.
        </li>
        <li>
          <strong>Mixolidia de Bb</strong> (Bb C D F <strong>Ab</strong>): mayor
          con la b7. La pentatónica dominante del blues y el rock.
        </li>
      </ul>

      <h2>Un ejemplo: la dórica de D</h2>

      <p>
        La dórica de D (D F G A <strong>B</strong>) es la pentatónica menor de
        D con la B en lugar de la C. Se toca en una sola caja, sin mover la
        mano: arranca en D, traste 5 de la quinta cuerda, sube hasta la primera
        y vuelve. Cada vez que pases por la B,{" "}
        <strong>escúchala</strong>: esa es la nota que le da el color dórico.
      </p>

      <TabVisualizer
        title="Pentatónica dórica de D"
        bpm={80}
        notesPerBeat={2}
        notes={[
          `
    5:5-8
    4:5-7
    3:4-7
    2:6-8
    1:5-7
    1:5
    2:8-6
    3:7-4
    4:7-5
    5:8-5
`,
        ]}
      />

      <h2>Cómo empezar</h2>

      <p>
        Elige <strong>una sola</strong>, la que más te llame la atención, y
        tócala unos días hasta que el oído reconozca su nota de color. Después
        úsala en un solo, aunque sea en una frase. Cuando ya te salga sin
        pensar, recién pasa a la siguiente.
      </p>

      <p>
        Las siete están en{" "}
        <a href={FRET_QUEST_MODALES} target="_blank" rel="noopener noreferrer">
          <strong>Fret Quest</strong>
        </a>
        , en el módulo de pentatónica, con su caja, su tablatura y el
        metrónomo para practicarlas de ida y vuelta.
      </p>

      <p>
        <a href={FRET_QUEST_MODALES} target="_blank" rel="noopener noreferrer">
          Practica las pentatónicas modales en Fret Quest
        </a>
      </p>
    </>
  ),
};
