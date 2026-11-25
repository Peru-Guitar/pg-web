import { AudioPlayer } from "../components/lazy";
import { ImageVisualizer } from "../components/ImageVisualizer";
import { Post, PostAuthor, PostCategory } from "../types";

export const comoComponerUsandoIA: Post = {
  id: "como-mejorar-composiciones-con-ia",
  cover: "/content/como-mejorar-composiciones-con-ia/header.webp",
  title: "Cómo mejorar tus composiciones de guitarra con IA",
  description:
    "Usa la IA como apoyo en la preproducción para explorar arreglos y desarrollar tus propias ideas de guitarra eléctrica.",
  category: PostCategory.Production,
  date: new Date("2026-03-15T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        ¿Tienes una idea de guitarra, pero te cuesta imaginar cómo sonaría con
        una producción completa? Vamos a trabajar un{" "}
        <strong>tema instrumental de guitarra eléctrica</strong> y usar la IA
        como apoyo para explorar arreglos, acompañamientos y transiciones a
        partir de un borrador propio.
      </p>

      <h2>Del borrador a la referencia</h2>

      <p>
        Escucha la diferencia. Mi borrador tiene errores y una batería plana,
        pero sirvió como base para generar una referencia con IA. Escucha qué cambia
        en la batería, los acompañamientos y las transiciones.
      </p>

      <div className="flex flex-col md:flex-row w-full gap-4 my-8">
        <div className="flex-1">
          <AudioPlayer
            title="Borrador original (con errores)"
            source="/content/13-como-mejorar-nuestras-composiciones-con-ia/demo.mp3"
          />
        </div>
        <div className="flex-1">
          <AudioPlayer
            title="Referencia IA"
            source="/content/13-como-mejorar-nuestras-composiciones-con-ia/suno-ref.mp3"
          />
        </div>
      </div>

      <h2>La IA no reemplaza tu creatividad</h2>

      <p>
        Aquí partimos de una composición tuya. La melodía, la intención y las
        decisiones principales siguen en tus manos. La IA te ayudará a probar
        posibilidades, pero eres tú quien decide qué aporta al tema. La idea es{" "}
        <strong>potenciar tu criterio musical</strong>.
      </p>

      <h2>La clave: el borrador</h2>

      <p>
        Graba una idea inicial. Para este ejercicio, empieza por la{" "}
        <strong>melodía</strong>: será el punto de partida y lo que dará
        identidad al tema.
      </p>

      <p>
        En esta etapa <strong>la perfección no importa</strong>. Yo grabo con
        errores y desafinaciones. El objetivo real es estructurar la idea de
        principio a fin.
      </p>

      <p>
        Basta con <strong>guitarra y batería</strong>. Por ahora, no necesitas
        programar bajos ni sintetizadores; puedes explorar esos acompañamientos
        con ayuda de la IA.
      </p>

      <p>
        Usa una <strong>batería simple</strong>. Puedes copiar y pegar un patrón para
        mantener el pulso. Con marcar el <strong>bombo y la caja</strong> es
        suficiente para definir la acentuación. Después podrás usar la IA para probar hi-hats,
        platos, redobles y variaciones de groove.
      </p>

      <p>
        Lo fundamental es tener un <strong>esqueleto sólido</strong>: las secciones
        del tema, la armonía base y el orden en que se desarrolla la idea.
      </p>

      <h2>Trabaja el borrador en Suno</h2>

      <p>
        Para este proceso usaremos <strong>Suno</strong>. Exporta tu borrador, ve a{" "}
        <strong>Create</strong> y selecciona <strong>Upload Audio</strong>.
      </p>

      <ImageVisualizer
        src="/content/13-como-mejorar-nuestras-composiciones-con-ia/01-suno-upload.png"
        alt="Opción para subir un archivo de audio en Suno"
        caption="Carga tu archivo de audio directamente"
      />

      <p>
        Tras subirlo, activa la opción <strong>Cover</strong> para generar
        una versión que tome tu audio como referencia rítmica y melódica.
      </p>

      <p>
        En <strong>More Options</strong> ajusta el{" "}
        <strong>Audio Influence</strong> entre <strong>70% y 90%</strong> como punto
        de partida. Un valor alto busca dar más peso al audio original, aunque
        tendrás que escuchar el resultado y ajustar si se aleja de tu idea.
      </p>

      <ImageVisualizer
        src="/content/13-como-mejorar-nuestras-composiciones-con-ia/02-suno-audio-influence.png"
        alt="Ajuste de Audio Influence en Suno"
        caption="Prueba entre 70% y 90% y escucha cuánto conserva de tu borrador"
      />

      <h3>Describe el estilo que buscas</h3>

      <p>
        Escribe un prompt descriptivo en <strong>Style</strong>. Si buscas algo
        de metal moderno, puedes partir de este ejemplo y adaptar el tempo y la
        tonalidad a tu composición:
      </p>

      <blockquote className="my-6">
        Modern metal, 145 BPM, B minor. Powerful punchy drum production with
        dynamic groove and fills, subtle atmospheric ambient pads, seamless
        polished transitions. Tight distorted guitars, heavy production,
        maintaining original composition and melodic structure. High fidelity.
      </blockquote>

      <p>
        Genera varias versiones y quédate con la que mejor capture la intención
        de tu tema. Fíjate en si conserva la melodía, si la batería acompaña las
        frases y si las transiciones conectan bien las secciones. No necesitas
        quedarte con todo: una versión puede darte una buena idea de batería y
        otra, un acompañamiento que valga la pena desarrollar.
      </p>

      <h2>Lleva la referencia a tu DAW</h2>

      <p>
        Usa el resultado como <strong>referencia de producción</strong>.
        Llévalo a tu DAW (tu programa de grabación), elige los arreglos que
        funcionan y vuelve a grabar los instrumentos. No hace falta copiar cada
        detalle: adapta las ideas a tu forma de tocar y a lo que quieres
        transmitir.
      </p>

      <p>
        También puedes separar las pistas, o <strong>stems</strong>, con
        herramientas como Moises. Escúchalas con atención: pueden aparecer
        artefactos o sonidos poco naturales. Para este proceso, lo ideal es
        usarlas como guía para trabajar tus propios arreglos y texturas.
      </p>

      <h2>La producción sigue en tus manos</h2>

      <p>
        Producir un tema completo requiere tiempo y mucha prueba y error. La
        IA puede agilizar la búsqueda de arreglos y ayudarte a escuchar
        posibilidades que todavía no habías desarrollado.
      </p>

      <p>
        Seamos realistas: esto sigue siendo <strong>preproducción</strong>.
        Para lograr un sonido profesional tendrás que cuidar tus tomas, la
        mezcla y la masterización. Tu oído y tu criterio siguen siendo parte
        central del trabajo.
      </p>

      <p>
        Empieza con un borrador sencillo de guitarra y batería. Genera algunas
        versiones, elige una idea que mejore el tema y llévala a tu propia
        grabación. Ahí es donde la referencia se convierte en algo tuyo.
      </p>
    </>
  ),
};
