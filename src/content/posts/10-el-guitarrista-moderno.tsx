import { Post, PostAuthor, PostCategory } from "../types";

export const elProblemaDelGuitarristaModerno: Post = {
  id: "el-problema-del-guitarrista-moderno",
  cover: "/content/el-problema-del-guitarrista-moderno/header.webp",
  title: "¿Mucha técnica y poca música? El problema del guitarrista moderno",
  description:
    "Un análisis sobre la evolución del aprendizaje en la guitarra, la sobreproducción y la pérdida del buen gusto musical.",
  category: PostCategory.Reflections,
  date: new Date("2026-03-01T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        Es un hecho que hoy se aprende a tocar mucho más rápido, pero eso no
        significa que el nivel musical sea mejor. Las prioridades simplemente
        cambiaron.
      </p>

      <h2>¿Cómo se aprendía antes y por qué costaba más?</h2>
      <p>
        En el pasado, aprender era un verdadero reto. Sin internet, dependías de
        un profesor presencial, de rebobinar cassettes hasta gastar la cinta, o
        de rogar que alguien te trajera un libro del extranjero.
      </p>
      <p>
        Te tocaba sacar las canciones a oído, descifrando lo que hacían tus
        ídolos, y solo un milagro te confirmaba si lo habías hecho bien (pura
        ironía porque soy ateo, jeje). Costaba sangre, pero desarrollabas un
        oído musical increíble.
      </p>

      <h2>La técnica es la base, pero el buen gusto se perdió</h2>
      <p>
        Con la llegada de Guitar Pro y YouTube, el camino se allanó. Pero para
        los que empezaron del 2015 en adelante, la guitarra mutó. Con referentes
        como Tim Henson, ser súper técnico dejó de ser un lujo para convertirse
        en la base mínima.
      </p>
      <p>
        El problema es que en esa carrera técnica, se perdió el sentido musical.
        Ya no hay fraseo, no hay bends que duelan y el vibrato es inexistente o
        está mal ejecutado. Tocan a mil por hora, pero no transmiten nada.
      </p>

      <h2>La fama mató al talento</h2>
      <p>
        Hoy el objetivo es ser viral. Gana el que hace el Reel más llamativo,
        siguiendo tendencias como fusionar reggaetón con metal solo para
        conseguir vistas.
      </p>
      <p>
        Importa más la acrobacia visual que la música. Hacen movimientos
        exagerados para la cámara que son imposibles de replicar en vivo,
        mientras tocan escalas en orden, arpegios básicos sin tensiones,
        tappings sin sentido o fraseos sin resolución (cadencia rota).
      </p>
      <p>
        Se perdió la identidad. Invierten más en sobreproducción y filtros de
        imagen para vender una perfección irreal que se cae a pedazos en un
        escenario. Depender de compresores y el gate al tope mata la
        musicalidad. Que una nota suene sucia o se desafine un poco es honesto y
        humano; no somos robots.
      </p>

      <h2>La arrogancia y la burbuja de cristal</h2>
      <p>
        Esta dinámica genera una soberbia tremenda y una desconexión total de la
        realidad. Viven en una burbuja de likes donde se acostumbran a recibir
        pura validación.
      </p>
      <p>
        Se creen mejores e innovadores, olvidando que leyendas como Greg Howe ya
        hacían técnica percusiva hace décadas. Y si alguien les comenta: tienes
        bonita técnica pero feo gusto musical, automáticamente te tildan de
        hater o envidioso.
      </p>

      <h2>Recomendaciones</h2>
      <p>
        No pretendo imponer nada, es solo mi opinión personal, pero aquí te dejo
        dos reflexiones:
      </p>
      <ol>
        <li>
          La técnica es bonita, pero debe ir en función del lenguaje musical
          para que sientas un verdadero crecimiento como músico. El problema
          surge cuando hay un desbalance.
        </li>
        <li>
          No busques rodearte de un grupo solo para recibir aceptación. De nada
          sirve publicar un video para que todos te digan que eres el mejor.
          Busca un entorno honesto que te diga la verdad y que realmente te
          empuje a mejorar.
        </li>
      </ol>
    </>
  ),
};
