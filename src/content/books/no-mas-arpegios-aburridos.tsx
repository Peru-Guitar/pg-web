import { TabVisualizer } from "../components/TabVisualizer/TabVisualizer";
import { TABS } from "./no-mas-arpegios-aburridos-tabs";

export const CHAPTERS = [
  { id: "introduccion", title: "Introducción" },
  { id: "conceptos-basicos", title: "Conceptos básicos" },
  { id: "arpegios-de-septima", title: "Arpegios de séptima" },
  { id: "arpegios-de-oncena", title: "Arpegios de oncena" },
  { id: "arpegios-modales", title: "Arpegios modales" },
  { id: "recomendaciones", title: "Recomendaciones" },
  { id: "palabras-finales", title: "Palabras finales" },
];

/** One tab example: two bars of eighth notes per line. */
const Example = ({ chord, tab }: { chord: string; tab: string }) => (
  <div className="not-prose">
    <TabVisualizer
      title={chord}
      notes={[tab]}
      maxNotesPerLine={16}
      maxNotesPerBar={8}
      bpm={160}
      notesPerBeat={2}
    />
  </div>
);

export const NoMasArpegiosAburridos = () => (
  <>
    <h2 id="introduccion">Introducción</h2>

    <p>
      El objetivo de esta guía es cambiar tu perspectiva sobre los arpegios,
      enseñándote a inyectar tensiones para enriquecer tu fraseo más allá de las
      típicas tríadas. Esto te ayudará a lograr un sonido más fresco y moderno.
    </p>

    <p>
      Para asimilar el material fácilmente, es fundamental que domines la
      construcción de acordes básicos (mayores, menores, disminuidos) y el
      funcionamiento de los intervalos. Con esta base teórica clara, el resto
      del contenido será sencillo y aplicable.
    </p>

    <h3>A tener en cuenta</h3>

    <p>
      Todos los ejemplos están escritos en tablatura, en corcheas y en compás de
      4/4.
    </p>

    <p>
      No vamos a mapear todos los arpegios a lo largo del fretboard. El objetivo
      no es memorizar posiciones de forma mecánica o simplemente copiar, sino
      desarrollar tu capacidad para pensar y deducir como músico. Lo fundamental
      es interiorizar las fórmulas para que tú mismo encuentres nuevas
      variaciones de estos arpegios. Cabe mencionar que la mayoría de los
      ejemplos partirán desde la quinta cuerda, al ser la posición estándar para
      visualizarlos y mapearlos.
    </p>

    <h3>Acerca del autor</h3>

    <p>
      Mi nombre es Eduardo Rodríguez. En mi día a día soy un developer a
      distancia y, en mis horas libres, un guitarrista que solo toca en su
      cuarto.
    </p>

    <p>
      ERP Project es mi proyecto personal donde comparto ideas musicales y
      colaboraciones con otros artistas. La guitarra es mi forma de
      desconectarme de la vida laboral, pero la abordo con mucha disciplina.
    </p>

    <h2 id="conceptos-basicos">Conceptos básicos</h2>

    <p>
      Antes de entrar de lleno a los arpegios, hagamos un repaso rápido para
      hablar el mismo idioma. El objetivo es entender la mecánica de las notas
      sin ahogarnos en teoría musical.
    </p>

    <p>
      Los conceptos a ver están relacionados a intervalos y armonización. Si te
      resultan muy nuevos, te recomiendo reforzarlos con material adicional para
      exprimir al máximo el resto de la guía.
    </p>

    <h3>Intervalos</h3>

    <p>
      Un intervalo es simplemente la distancia de altura o frecuencia que existe
      entre dos notas musicales. En la guitarra, esta distancia la medimos
      visualmente en trastes (semitonos y tonos).
    </p>

    <p>
      ¿Por qué necesitas saber esto? Porque los intervalos son el ADN de los
      acordes y arpegios. Entenderlos te permite dejar de memorizar posiciones
      geométricas a ciegas. Si conoces estas distancias, comprendes la fórmula
      de cada arpegio, lo que te da el control total para construirlos,
      modificarlos a tu antojo y saber exactamente qué nota usar para lograr la
      sonoridad y la intención que buscas.
    </p>

    <p>
      Y sobre todo porque es el lenguaje universal entre músicos: muchas de las
      explicaciones que veas hablarán de segunda menor, tercera mayor, etc.
    </p>

    <table>
      <caption>Intervalos: escala mayor de C</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["1", "Tónica", "C"],
          ["b2", "Segunda menor", "Db"],
          ["2", "Segunda mayor", "D"],
          ["b3", "Tercera menor", "Eb"],
          ["3", "Tercera mayor", "E"],
          ["4", "Cuarta justa", "F"],
          ["b5 / #4", "Quinta disminuida / Tritono", "Gb / F#"],
          ["5", "Quinta justa", "G"],
          ["b6 / #5", "Sexta menor / Quinta aumentada", "Ab / G#"],
          ["6", "Sexta mayor", "A"],
          ["b7", "Séptima menor", "Bb"],
          ["7", "Séptima mayor", "B"],
          ["8", "Octava", "C"],
        ].map(([degree, name, note]) => (
          <tr key={degree}>
            <td>{degree}</td>
            <td>{name}</td>
            <td>{note}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3>Armonización</h3>

    <p>
      La armonización consiste en construir los acordes sobre los grados que le
      corresponden a una escala. En nuestros ejemplos vamos a trabajar siempre
      sobre la escala mayor de Do (C), por lo que es fundamental tener claro
      este concepto.
    </p>

    <p>
      ¿Por qué necesitas saber esto? Porque esta regla te dice exactamente qué
      arpegio tocar sobre cada nota o grado de la escala que estamos usando; con
      esto podemos definir si es mayor, menor o disminuido.
    </p>

    <table>
      <caption>Armonización: escala mayor de C</caption>
      <thead>
        <tr>
          <th>Grado</th>
          <th>Tríada</th>
          <th>Cuatriada</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["I", "C mayor (1 - 3 - 5)", "CMaj7 (1 - 3 - 5 - 7)"],
          ["II", "D menor (1 - b3 - 5)", "Dm7 (1 - b3 - 5 - b7)"],
          ["III", "E menor (1 - b3 - 5)", "Em7 (1 - b3 - 5 - b7)"],
          ["IV", "F mayor (1 - 3 - 5)", "FMaj7 (1 - 3 - 5 - 7)"],
          ["V", "G mayor (1 - 3 - 5)", "G7 (1 - 3 - 5 - b7)"],
          ["VI", "A menor (1 - b3 - 5)", "Am7 (1 - b3 - 5 - b7)"],
          ["VII", "B disminuido (1 - b3 - b5)", "Bm7b5 (1 - b3 - b5 - b7)"],
        ].map(([degree, triad, seventh]) => (
          <tr key={degree}>
            <td>{degree}</td>
            <td>{triad}</td>
            <td>{seventh}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h2 id="arpegios-de-septima">Arpegios de séptima</h2>

    <p>
      Dejando atrás las tríadas, nuestro nuevo estándar serán los arpegios de
      cuatro notas: las cuatriadas o arpegios de séptima. Es muy probable que ya
      los toques por instinto, pero es momento de analizarlos conscientemente y
      adoptarlos como tu estructura base.
    </p>

    <p>
      Al sumar un cuarto intervalo (la séptima) a los acordes de tres notas,
      rompemos la sonoridad tradicional para revelar el verdadero color, tensión
      y profundidad armónica.
    </p>

    <p>
      Al armonizar la escala mayor, encontramos cuatro tipos fundamentales de
      cuatriadas:
    </p>

    <ul>
      <li>
        <strong>Maj7:</strong> séptima mayor
      </li>
      <li>
        <strong>m7:</strong> menor séptima
      </li>
      <li>
        <strong>7:</strong> dominante o séptima
      </li>
      <li>
        <strong>m7b5:</strong> semidisminuido (menor séptima con quinta bemol)
      </li>
    </ul>

    <h3>Arpegio Maj7</h3>

    <p>
      Al armonizar la escala mayor, obtenemos 2 acordes Maj7 en el primer y
      cuarto grado: CMaj7 y FMaj7. La característica principal de ambos arpegios
      es incluir la séptima mayor en su estructura.
    </p>

    <p>
      Fórmula: <strong>1 - 3 - 5 - 7</strong>
    </p>

    <p>
      Como consejo, para los arpegios Maj7 el recorrido de los dedos va a ser
      exactamente el mismo tanto para CMaj7 como para FMaj7.
    </p>

    <Example chord="CMaj7" tab={TABS.cmaj7} />
    <Example chord="FMaj7" tab={TABS.fmaj7} />

    <p>
      Como habrán notado, resolvemos en la tercera mayor y no en la tónica. El
      motivo es que, de no agregar una nota adicional, quedaría un silencio en
      el compás. Además, al ser parte del acorde Maj7, esta nota suena muy
      natural.
    </p>

    <h3>Arpegio m7</h3>

    <p>
      Al armonizar la escala mayor, obtenemos 3 acordes m7 en el segundo, tercer
      y sexto grado: Dm7, Em7 y Am7. La característica principal de estos
      arpegios es incluir la tercera menor y la séptima menor en su estructura.
    </p>

    <p>
      Fórmula: <strong>1 - b3 - 5 - b7</strong>
    </p>

    <p>
      Ten en cuenta que para los arpegios m7 el recorrido de los dedos va a ser
      exactamente el mismo para los 3 arpegios; solo varía la posición del
      traste.
    </p>

    <Example chord="Dm7" tab={TABS.dm7} />
    <Example chord="Em7" tab={TABS.em7} />
    <Example chord="Am7" tab={TABS.am7} />

    <p>
      Para los 3 casos volvemos a resolver en la tercera, pero esta vez en la
      tercera menor en vez de la tónica. El motivo es el mismo: no dejar un
      silencio en el compás. Además, al ser parte del acorde m7, esta nota suena
      muy natural.
    </p>

    <h3>Arpegio 7 o dominante</h3>

    <p>
      Al armonizar la escala mayor, obtenemos un único acorde de séptima de
      dominante (7) en el quinto grado: G7.
    </p>

    <p>
      La característica principal de este arpegio es la combinación de una
      tercera mayor con una séptima menor, estructura que genera la tensión del
      tritono necesaria para resolver al primer grado.
    </p>

    <p>
      Fórmula: <strong>1 - 3 - 5 - b7</strong>
    </p>

    <Example chord="G7" tab={TABS.g7} />
    <Example chord="G7 (variación)" tab={TABS.g7ii} />

    <p>
      En este caso hice una variación del G7 para ver otra forma de tocarlo.
      Como me faltaban notas para completar el compás, repetí las últimas 3
      notas.
    </p>

    <h3>Arpegio m7b5 o semidisminuido</h3>

    <p>
      Al armonizar la escala mayor, obtenemos un único acorde m7b5 en el séptimo
      grado: Bm7b5. La característica principal de este arpegio, también
      conocido como semidisminuido, es incluir la tercera menor, la quinta
      disminuida y la séptima menor en su estructura.
    </p>

    <p>
      Fórmula: <strong>1 - b3 - b5 - b7</strong>
    </p>

    <Example chord="Bm7b5" tab={TABS.bm7b5} />
    <Example chord="Bm7b5/D (primera inversión)" tab={TABS.bm7b5d} />

    <p>
      Como solo hay un acorde m7b5 en esta tonalidad, agregué una inversión para
      ampliar tu perspectiva en el mástil. Úsala como punto de partida y te reto
      a encontrar las inversiones restantes desde la quinta o la séptima menor.
    </p>

    <h2 id="arpegios-de-oncena">Arpegios de oncena</h2>

    <p>
      En esta sección utilizaremos los arpegios ya estudiados, pero anidando la
      cuarta (una octava arriba) para darle un color completamente diferente a
      la sonoridad. Al sumarse a nuestra estructura base con séptima, el arpegio
      se convierte en una oncena.
    </p>

    <p>
      Eso sí, debemos ser cuidadosos, ya que el tipo de oncena varía según el
      grado donde nos paremos.
    </p>

    <table>
      <thead>
        <tr>
          <th>Grado</th>
          <th>Acorde</th>
          <th>Fórmula</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["I", "CMaj11", "1 - 3 - 5 - 7 - 11"],
          ["II", "Dm11", "1 - b3 - 5 - b7 - 11"],
          ["III", "Em11", "1 - b3 - 5 - b7 - 11"],
          ["IV", "FMaj7(#11)", "1 - 3 - 5 - 7 - #11"],
          ["V", "G11 (dominante 11)", "1 - 3 - 5 - b7 - 11"],
          ["VI", "Am11", "1 - b3 - 5 - b7 - 11"],
          ["VII", "Bm11(b5)", "1 - b3 - b5 - b7 - 11"],
        ].map(([degree, chord, formula]) => (
          <tr key={degree}>
            <td>{degree}</td>
            <td>{chord}</td>
            <td>{formula}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <Example chord="CMaj11" tab={TABS.cmaj11} />
    <Example chord="Dm11" tab={TABS.dm11} />
    <Example chord="Em11" tab={TABS.em11} />
    <Example chord="FMaj7(#11)" tab={TABS.fmaj7s11} />
    <Example chord="G11" tab={TABS.g11} />
    <Example chord="Am11" tab={TABS.am11} />
    <Example chord="Bm11(b5)" tab={TABS.bm11b5} />

    <h2 id="arpegios-modales">Arpegios modales</h2>

    <p>
      Si armonizamos la escala mayor, cada grado corresponde a un modo
      específico con una sonoridad única. Al rescatar el intervalo
      característico de cada uno de ellos y sumarlo a su cuatriada base, podemos
      construir arpegios modales que reflejan el color exacto de su respectivo
      modo.
    </p>

    <table>
      <thead>
        <tr>
          <th>Grado</th>
          <th>Modo</th>
          <th>Fórmula del arpegio modal</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["I", "Jónico", "1 - 3 - 5 - 7"],
          ["II", "Dórico", "1 - b3 - 5 - b7 - 13"],
          ["III", "Frigio", "1 - b3 - 5 - b7 - b9"],
          ["IV", "Lidio", "1 - 3 - 5 - 7 - #11"],
          ["V", "Mixolidio", "1 - 3 - 5 - b7"],
          ["VI", "Eólico", "1 - b3 - 5 - b7"],
          ["VII", "Locrio", "1 - b3 - b5 - b7"],
        ].map(([degree, mode, formula]) => (
          <tr key={degree}>
            <td>{degree}</td>
            <td>{mode}</td>
            <td>{formula}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <h3>Jónico</h3>
    <p>
      El modo jónico no tiene ninguna tensión específica, así que usaremos el
      mismo arpegio Maj7.
    </p>
    <Example chord="CMaj7" tab={TABS.cmaj7} />

    <h3>Dórico</h3>
    <p>
      Este modo se caracteriza por tener la sexta, la cual convertiremos en una
      trecena, obteniendo así un acorde menor 13.
    </p>
    <Example chord="Dm13" tab={TABS.dm13} />

    <h3>Frigio</h3>
    <p>
      Este modo se caracteriza por tener la segunda menor, la cual agregaremos
      como tensión para obtener un b9.
    </p>
    <Example chord="Em7(b9)" tab={TABS.em7b9} />

    <h3>Lidio</h3>
    <p>
      Este modo se caracteriza por tener la cuarta aumentada, la cual vamos a
      agregar como tensión para obtener un acorde #11.
    </p>
    <Example chord="FMaj7(#11)" tab={TABS.fmaj7s11} />

    <h3>Mixolidio</h3>
    <p>
      Al igual que el jónico, este es un arpegio que ya hemos visto. Su
      característica es que es mayor y tiene la séptima menor.
    </p>
    <Example chord="G7" tab={TABS.g7} />

    <h3>Eólico</h3>
    <p>
      Es la relativa menor del primer grado: simplemente un arpegio menor 7 sin
      ninguna alteración o tensión adicional.
    </p>
    <Example chord="Am7" tab={TABS.am7} />

    <h3>Locrio</h3>
    <p>
      El séptimo grado es un arpegio que también hemos resuelto en los ejemplos
      previos. Su tensión característica es la quinta disminuida.
    </p>
    <Example chord="Bm7b5" tab={TABS.bm7b5} />

    <h2 id="recomendaciones">Recomendaciones</h2>

    <h3>Piensa como músico, no como guitarrista</h3>

    <p>
      Aprender arpegios memorizando decenas de posiciones fijas es una trampa:
      te vuelve esclavo de los dibujos en la madera y te congela si te cambian
      la tonalidad o el acorde.
    </p>

    <p>
      Cuando entiendes los intervalos y la armonización, solo necesitas aprender
      la fórmula lógica del acorde (1, b3, 5, b7, etc.). Al saber ubicar esas
      distancias desde cualquier raíz, puedes construir el arpegio en tiempo
      real en cualquier zona del mástil.
    </p>

    <p>
      Por ejemplo, mientras hacía esta guía yo no me sabía todos los arpegios,
      pero por fórmula pude transcribirlos para poder enseñarlos.
    </p>

    <p>
      Es la diferencia entre memorizar posiciones como un robot o automatizar la
      teoría para pensar como un músico. ¿Qué es más fácil: aprenderte una
      fórmula o memorizar 100 posiciones mecánicas?
    </p>

    <h3>¿Cómo poner en práctica la guía?</h3>

    <p>
      La teoría sin práctica no sirve para nada. La clave aquí es el uso
      estricto del metrónomo: repite los arpegios de forma limpia, uno por uno,
      hasta dominarlos por completo.
    </p>

    <p>
      Comienza con la práctica de los arpegios de séptima uno por uno, porque
      todo lo demás nace de esos arpegios.
    </p>

    <h3>¿Cómo dejar de sonar a ejercicio?</h3>

    <ul>
      <li>
        <strong>Usa backing tracks:</strong> olvídate del metrónomo por un
        momento y pon una base armónica de fondo. Necesitas escuchar cómo
        reacciona cada intervalo del arpegio contra el acorde que está sonando
        detrás.
      </li>
      <li>
        <strong>Rompe la dirección:</strong> si tocas el arpegio de arriba a
        abajo en orden lineal, vas a sonar a ejercicio técnico, no a música.
        Úsalo como un esqueleto: toca la mitad, cambia de dirección, salta
        cuerdas o conecta el final del arpegio con una frase de la escala de la
        que proviene o con la pentatónica que le toca a ese bloque.
      </li>
      <li>
        <strong>No pienses en tocar el arpegio, piensa en sus notas:</strong> no
        estás obligado a recorrer toda la estructura de forma continua. Puedes
        usar notas individuales del arpegio para acentuar los tiempos fuertes o
        utilizarlas como puntos de llegada en tus fraseos. Centrarte en las
        notas clave es lo que define el color modal.
      </li>
    </ul>

    <h3>Agrupa bloques de secuencias</h3>

    <p>
      No tienes que tocar el arpegio en orden lineal. Rómpelo dividiéndolo en
      bloques pequeños y crea secuencias.
    </p>

    <p>
      Por ejemplo: toca las primeras 5 notas, retrocede a la 4.ª nota para
      arrancar el segundo bloque, y repite el patrón para armar un tercer
      bloque. Dividir el arpegio en 2 o 3 bloques entrelazados transforma un
      ejercicio aburrido en una frase con sentido musical.
    </p>

    <Example chord="Dm7 (bloques)" tab={TABS.dm7groups} />

    <p>
      A manera de práctica, siempre trata de completar el compás: no dejes
      silencios ni te pases del compás. No es una regla, pero vamos a quitar esa
      sensación de que falta algo.
    </p>

    <h2 id="palabras-finales">Palabras finales</h2>

    <p>
      Gracias por darte el tiempo de leer este contenido. Si bien todo el
      material es gratis, no me quejaría si como contribución me ayudas a llegar
      a más personas.
    </p>

    <p>
      Te invito a seguirme en Instagram, donde estaré publicando videos sobre
      cómo poner en contexto musical lo aprendido: la primera parte es dominar
      los ejercicios, la segunda es musicalizarlos. Si quieres compartir tu
      progreso, hacer preguntas o enterarte de próximos lanzamientos, sígueme en{" "}
      <a
        href="https://www.instagram.com/erpprojectofficial/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @erpprojectofficial
      </a>{" "}
      o escríbeme a{" "}
      <a href="mailto:erodriguezp105@gmail.com">erodriguezp105@gmail.com</a>.
    </p>

    <p>
      Éxitos en la práctica.
      <br />
      <strong>Eduardo Rodríguez</strong>
    </p>
  </>
);
