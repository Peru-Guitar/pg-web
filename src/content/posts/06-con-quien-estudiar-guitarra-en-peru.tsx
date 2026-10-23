import { Post, PostAuthor, PostCategory } from "../types";

export const conQuienEstudiarGuitarraEnPeru: Post = {
  id: "con-quien-estudiar-guitarra-en-peru",
  cover: "/content/con-quien-estudiar-guitarra-en-peru/header.webp",
  title: "¿Con quién estudiar guitarra eléctrica en Perú?",
  description:
    "Mi experiencia honesta con distintos profesores de la escena local y consejos clave para no perder el tiempo en el proceso.",
  category: PostCategory.Reflections,
  date: new Date("2026-02-22T00:00:02"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        He pasado por varios métodos y mentores. En esta entrada, te comparto mi
        experiencia real con cada uno para ayudarte a elegir al profesor
        indicado según tus objetivos actuales.
      </p>

      <h2>Profesores</h2>

      <h3>Victor Hugo Glenny</h3>
      <p>
        Para mí, el que mejor plan de estudios tiene en el país. Su trayectoria
        respalda un conocimiento teórico y práctico profundo, pero esto conlleva
        a una inversión fuerte y toma tiempo en{" "}
        <strong>ver los resultados</strong>.
      </p>

      <p>
        Por otro lado, el tocar como un guitarrista especifico, adquirir
        lenguaje, va a depender completamente de tí. Él te da las herramientas,
        pero como usarlas es tu camino a seguir.
      </p>

      <h3>Koko Rengifo</h3>
      <p>
        Es mucho más flexible. Tiene un plan estructurado, pero se adapta a lo
        que busques en el momento. Si necesitas clases específicas para dominar
        algo rápido o ampliar tu repertorio, Koko es el indicado; le pides un
        tema y a la semana ya lo tiene listo para enseñártelo. Más que un
        profesor, funciona como un excelente <strong>coach personal</strong>.
      </p>

      <h3>Erick J. García</h3>
      <p>
        Referente total si buscas mejorar tu improvisación. Su método equilibra
        muy bien la teoría aplicada con la práctica.
      </p>
      <p>
        Un error que cometí con él (y que te sirve de lección) fue intentar
        tomar dos clases por semana para <strong>acelerar</strong>. En la
        guitarra no hay atajos: una sesión semanal es suficiente si quieres
        procesar y analizar bien toda la información que te entrega.
      </p>

      <h3>Elías Checco</h3>
      <p>
        Un guitarrista increíble con un lenguaje envidiable. Maneja mucho
        material de estudio que comparte semanalmente vía Drive. Su fuerte es el
        lenguaje musical y la <strong>fusión</strong>; gran parte de mi
        vocabulario actual se lo debo a su escuela.
      </p>

      <h3>Wilmer Pachas</h3>
      <p>
        Su formación académica te da un enfoque a ser más músico que
        guitarrista. Aunque solo tomé 2 clases con él, perdi el enfoque porque
        estaba más obsesionado en tocar licks que en entender la música.
      </p>

      <h2>Mi opinión personal</h2>

      <p>
        Opciones hay de sobra y seguro faltan nombres excelentes en esta lista.
        Pero la verdad es simple: ni el mejor profesor ni la clase más cara
        servirán de nada si no tienes <strong>disciplina y persistencia</strong>
        .
      </p>

      <p>
        No pierdas el tiempo como yo, que recién a los 31 años me puse serio con
        el instrumento. Si vas a pagar por clases, <strong>estudia</strong>,{" "}
        <strong>practica</strong> y <strong>deja la soberbia a un lado</strong>.
        No me arrepiento de mi proceso, pero soy consciente de que si hubiera
        tenido este enfoque desde el inicio,{" "}
        <strong>hoy mi nivel sería muy superior</strong>.
      </p>

      <h3>Ojo con esto...</h3>

      <p>
        Ignora a quienes basan su carrera solo en métricas de{" "}
        <strong>TikTok</strong> o <strong>Instagram</strong>. Ser un buen{" "}
        <i>performer</i> en videos de 30 segundos no te hace un buen profesor.
        Busca a alguien con un <strong>método sólido</strong> y no solo con
        muchos <em>likes</em>.
      </p>
    </>
  ),
};
