import { Post, PostAuthor, PostCategory } from "../types";
import { ImageVisualizer } from "../components/ImageVisualizer";
import { YouTubePlayer } from "../components/YouTubePlayer";

const link = (href: string, text: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export const historiaDePeruGuitar: Post = {
  id: "historia-de-peru-guitar",
  cover: "/content/historia-de-peru-guitar/header.webp",
  title: "Peru Guitar: más de 20 años de guitarra",
  description:
    "De una página escolar en 2003 a un portal con blog, Fret Quest y PG Fighters. Foros, pausas, experimentos y lo que aprendimos en el camino.",
  category: PostCategory.Reflections,
  date: new Date("2026-11-11T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        <strong>
          Todo comenzó en 2003, con una idea escolar, una página web
          improvisada y muchas ganas de compartir la pasión por la guitarra.
        </strong>{" "}
        Más de dos décadas después, Peru Guitar sigue vigente, aunque el
        camino estuvo lleno de cambios, pausas, experimentos y aprendizajes.
      </p>

      <p>Esta es nuestra historia.</p>

      <h2>2003: el comienzo de todo</h2>

      <p>
        Peru Guitar nació como un proyecto escolar. Eduardo, su creador,
        decidió construir una página dedicada a la guitarra{" "}
        <strong>sin tener conocimientos de desarrollo web</strong> y mucho
        menos de diseño.
      </p>

      <p>
        Con Microsoft FrontPage y bastante curiosidad, apareció la primera
        versión del sitio. Una combinación de colores cuestionable, errores
        ortográficos y un diseño que hoy sería difícil de defender, pero que
        representaba perfectamente los primeros pasos de alguien que recién
        descubría Internet.
      </p>

      <ImageVisualizer
        src="/content/historia-de-peru-guitar/geocities-portada.webp"
        alt="Portada de la primera versión de Peru Guitar en GeoCities"
        caption="La portada original: ¿te gusta el metal?"
      />

      <ImageVisualizer
        src="/content/historia-de-peru-guitar/geocities-inicio.webp"
        alt="Página de inicio de la primera versión de Peru Guitar, con menú de lecciones y noticias"
        caption="Metal Rulez: lecciones, bandas, noticias y encuestas"
      />

      <p>
        Lo curioso es que aquella página todavía existe y puede visitarse en{" "}
        {link("https://www.geocities.ws/hitohacker/", "nuestro primer sitio web")}
        . Una auténtica <strong>cápsula del tiempo</strong> que preferimos
        conservar tal como quedó.
      </p>

      <p>
        De esa misma época es también nuestro primer spot, un video
        promocional de la primera versión de Peru Guitar:
      </p>

      <YouTubePlayer id="Y9W_uUWChWY" />

      <h2>2004: la etapa de MSN Groups</h2>

      <p>
        Con el crecimiento de las comunidades virtuales, Peru Guitar migró a
        MSN Groups, una plataforma muy popular en aquella época.
      </p>

      <p>
        Fue una experiencia breve y, para ser sinceros, quedan pocos recuerdos
        de lo que hacíamos allí. Sin embargo, representó nuestro{" "}
        <strong>primer intento de convertir una simple página web en un espacio
        de encuentro</strong> entre guitarristas.
      </p>

      <h2>2005–2008: la época dorada de los foros</h2>

      <p>Aquí comenzó la verdadera comunidad.</p>

      <p>
        Los foros dominaban Internet y Peru Guitar encontró su lugar. Llegaron
        nuevos integrantes, las conversaciones se multiplicaron y empezamos a
        construir un espacio donde los guitarristas{" "}
        <strong>compartían conocimientos, experiencias y material musical</strong>.
      </p>

      <p>
        También organizábamos concursos, elegíamos ganadores y conocíamos a
        personas que, incluso después de tantos años, siguen formando parte de
        nuestros recuerdos.
      </p>

      <p>
        No todo fue perfecto. Gran parte del contenido que circulaba entonces
        tenía derechos de autor y se compartía sin autorización, una práctica
        que hoy vemos con otros ojos. Fue otra época de Internet y también una
        etapa de aprendizaje.
      </p>

      <p>
        Personalmente, aquellos años marcaron mi{" "}
        <strong>primer acercamiento real al mundo de la programación</strong>,
        una experiencia que terminaría influyendo en mi futuro profesional.
      </p>

      <p>
        Durante aproximadamente tres años vivimos una de las etapas más activas
        de Peru Guitar. Pero Internet estaba cambiando: las redes sociales
        comenzaban a ganar terreno y los foros perdían protagonismo.
      </p>

      <p>Poco a poco, la actividad disminuyó y el proyecto quedó en pausa.</p>

      <h2>2009: una red social que nunca despegó</h2>

      <p>
        Con el auge de las redes sociales, surgió la idea de transformar Peru
        Guitar en una plataforma más moderna, con funciones orientadas a la
        interacción entre usuarios.
      </p>

      <p>
        Era un proyecto ambicioso, especialmente{" "}
        <strong>para una sola persona</strong>. La carga de desarrollo y
        mantenimiento terminó superando el entusiasmo inicial, y aquella
        versión nunca llegó a consolidarse.
      </p>

      <p>Fue uno de tantos experimentos que quedaron en el camino.</p>

      <h2>2020–2022: el intento de recuperar los foros</h2>

      <p>
        Después de varios años de inactividad, decidimos darle una nueva
        oportunidad a Peru Guitar.
      </p>

      <p>
        La idea era recuperar la esencia de aquella comunidad que había
        funcionado tan bien en 2005. Se desarrollaron dos versiones diferentes,
        ambas con la intención de revivir los foros.
      </p>

      <p>
        Hubo cierta participación inicial, pero pronto quedó claro que{" "}
        <strong>los hábitos de los usuarios habían cambiado</strong>. Mantener
        una comunidad activa bajo ese formato requería demasiado esfuerzo y los
        resultados no justificaban continuar.
      </p>

      <p>Finalmente, decidimos dejar atrás el modelo tradicional de foros.</p>

      <h2>2023–2025: una comunidad que seguía presente</h2>

      <p>
        Durante este periodo, Peru Guitar se mantuvo principalmente a través de
        Instagram.
      </p>

      <p>
        Sin una plataforma web activa, continuamos publicando contenido
        ocasionalmente y manteniendo el contacto con la comunidad.
      </p>

      <p>
        Aunque la actividad era limitada,{" "}
        <strong>la marca seguía presente</strong>. Solo faltaba encontrar una
        nueva dirección.
      </p>

      <h2>2026: el renacimiento de Peru Guitar</h2>

      <p>
        Después de más de dos décadas de pruebas, aciertos y errores, llegó el
        momento de replantear completamente el proyecto.
      </p>

      <p>
        En lugar de intentar recuperar fórmulas del pasado, analizamos qué había
        funcionado en cada etapa y cómo habían evolucionado las necesidades de
        los guitarristas.
      </p>

      <p>
        La conclusión fue clara:{" "}
        <strong>
          Peru Guitar ya no debía limitarse a ser un foro o un blog, sino
          convertirse en un portal que combine información, aprendizaje,
          comunidad y entretenimiento.
        </strong>
      </p>

      <p>
        Así nació la nueva versión de{" "}
        {link("https://peruguitar.com", "peruguitar.com")}, con una propuesta
        mucho más amplia.
      </p>

      <p>
        Además de artículos, recursos y contenido educativo, incorporamos
        experiencias interactivas como:
      </p>

      <ul>
        <li>
          <strong>
            {link("https://fretquest.peruguitar.com", "Fret Quest")}:
          </strong>{" "}
          un espacio pensado para motivar la práctica de guitarra, organizar
          sesiones de entrenamiento y mejorar la constancia.
        </li>
        <li>
          <strong>
            {link("https://fighters.peruguitar.com", "PG Fighters")}:
          </strong>{" "}
          un videojuego creado para divertirnos y darle un toque diferente a la
          comunidad.
        </li>
      </ul>

      <p>
        La idea es sencilla: que Peru Guitar sea un lugar al que puedas
        regresar no solo para leer un artículo, sino también para{" "}
        <strong>aprender, practicar, descubrir músicos</strong> o simplemente
        pasar un buen rato.
      </p>

      <h2>Una historia que todavía se está escribiendo</h2>

      <p>
        Peru Guitar nunca fue un proyecto de grandes presupuestos ni de equipos
        numerosos. Nació de la curiosidad de un estudiante y ha evolucionado
        junto con Internet, la tecnología y la música.
      </p>

      <p>
        Hubo años de mucha actividad, largos periodos de silencio y versiones
        que nunca llegaron a funcionar como esperábamos. Pero{" "}
        <strong>cada etapa dejó algo valioso</strong>.
      </p>

      <p>
        Hoy contamos con más experiencia, mejores herramientas y una visión
        mucho más clara de lo que queremos construir.
      </p>

      <p>
        <strong>
          Peru Guitar comenzó en 2003 como una simple página web. En 2026,
          continúa como un proyecto que busca conectar, enseñar y entretener a
          quienes compartimos la pasión por la guitarra.
        </strong>
      </p>

      <p>
        Y esta vez, no queremos quedarnos solamente con la nostalgia. Queremos
        construir lo que viene.
      </p>
    </>
  ),
};
