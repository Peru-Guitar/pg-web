import { Post, PostAuthor, PostCategory } from "../types";

export const fretQuest: Post = {
  id: "fret-quest-el-duolingo-de-la-guitarra",
  cover: "/content/fret-quest-el-duolingo-de-la-guitarra/header.webp",
  title: "Fret Quest: por qué creamos un Duolingo para la guitarra",
  description:
    "Te sientas con la guitarra y no sabes qué practicar. Así nació Fret Quest, cómo usarlo y por qué la constancia vale más que la sesión perfecta.",
  category: PostCategory.Events,
  date: new Date("2026-10-23T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        Todo empieza igual: agarras la guitarra, te sientas y{" "}
        <strong>no sabes qué practicar</strong>. Tocas el mismo lick de
        siempre, repasas una canción a medias, abres un video y a los veinte
        minutos la guitarra vuelve a su soporte.
      </p>

      <p>
        No es falta de ganas. Es falta de <strong>un plan que ya esté
        listo</strong> cuando tienes tiempo para tocar.
      </p>

      <h2>La idea vino de Duolingo</h2>

      <p>
        Mientras usaba Duolingo me di cuenta de algo: no aprendes un idioma
        porque la app sea mágica, sino porque <strong>te quita la decisión de
        qué hacer hoy</strong>. Abres, haces tu lección corta, sumas puntos y
        cuidas tu racha.
      </p>

      <p>
        Lecciones cortas, progreso visible y un motivo para volver mañana. Pensé:{" "}
        <strong>esto se puede llevar a la guitarra</strong>. Así nace Fret
        Quest.
      </p>

      <h2>Qué es Fret Quest</h2>

      <p>
        Fret Quest es un <strong>gimnasio técnico</strong> para guitarristas
        que ya saben lo básico. No te enseña tus primeros acordes: te da
        ejercicios mecánicos ordenados para que mejores control, limpieza y
        comodidad en el mástil.
      </p>

      <ul>
        <li>
          <strong>Módulos por técnica:</strong> patrones agrupados por tema,
          desde lo más simple hasta lo más complejo.
        </li>
        <li>
          <strong>Tablatura y metrónomo:</strong> cada ejercicio trae su tab,
          su tempo y la dirección de púa.
        </li>
        <li>
          <strong>Niveles, XP y misiones:</strong> el progreso se ve, como en
          un juego.
        </li>
      </ul>

      <p>
        Está en desarrollo y lo puedes seguir en{" "}
        <a
          href="https://fretquest.peruguitar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          fretquest.peruguitar.com
        </a>
        .
      </p>

      <h2>Cómo usarlo</h2>

      <p>Cuando abras Fret Quest, elige según el día que tengas:</p>

      <ul>
        <li>
          <strong>Calentar:</strong> unos minutos antes de ensayar, grabar o
          tocar en vivo.
        </li>
        <li>
          <strong>Mantenerme en forma:</strong> una sesión corta para no
          perder lo que ya tienes en los dedos.
        </li>
        <li>
          <strong>Mejorar una técnica:</strong> eliges un módulo y lo trabajas
          a fondo.
        </li>
      </ul>

      <p>
        La regla es la misma que en cualquier rutina seria: empieza{" "}
        <strong>a un tempo donde todo suene limpio</strong> y solo súbelo
        cuando el ejercicio se sienta fácil. En Fret Quest el progreso no es
        solo más BPM: también cuenta tocar más limpio y más relajado.
      </p>

      <h2>Por qué importa</h2>

      <p>
        La técnica no se construye con una sesión de tres horas al mes. Se
        construye con <strong>quince minutos todos los días</strong>. El
        problema nunca fue el tiempo, fue llegar a la guitarra sin saber qué
        hacer y gastar la energía decidiendo.
      </p>

      <p>
        Por eso la racha y los puntos no son un adorno: son la excusa para
        volver mañana. Y volver mañana es lo que, al final, te hace mejorar.
      </p>

      <h2>Empieza hoy</h2>

      <p>
        Esta semana ponte una meta pequeña: <strong>una sesión corta al
        día, siete días seguidos</strong>. Elige un solo módulo, anota el
        tempo en el que suena limpio y compara el domingo. Si la racha se
        rompe, no pasa nada: la retomas al día siguiente.
      </p>
    </>
  ),
};
