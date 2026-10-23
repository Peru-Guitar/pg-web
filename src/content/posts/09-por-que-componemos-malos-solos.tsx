import { AudioPlayer } from "../components/AudioPlayer";
import { Post, PostAuthor, PostCategory } from "../types";

export const porqQueComponemosMalosSolos: Post = {
  id: "por-que-componemos-malos-solos",
  cover: "/content/por-que-componemos-malos-solos/header.webp",
  title: "¿Por qué componemos malos solos de guitarra?",
  description:
    "Un análisis personal sobre los errores de estructura y criterio que encontré al componer mis solos.",
  category: PostCategory.Reflections,
  date: new Date("2026-02-26T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        ¿Te pasa que grabas o compones un solo y sientes que no suena bien? Aquí
        te comparto mi experiencia personal con algunos errores que detecté al
        analizar mi propio toque.
      </p>

      <p>
        A veces perdemos la objetividad y creemos que nuestra ejecución está
        bien cuando no es así. Por eso, en mi caso, suelo pedir{" "}
        <strong>feedback</strong> a músicos con más nivel para conocer su
        opinión y detectar fallas que yo mismo ya no noto.
      </p>

      <h2>1. Desafinación</h2>
      <p>
        Es el error más destructivo. Un solo desafinado es como un{" "}
        <strong>arroz chaufa</strong> con un pedazo de uña; no importa qué tan
        bueno sea el resto, ese detalle arruina toda la experiencia.
      </p>

      <h3>Bends</h3>
      <p>
        Si te quedas corto o te pasas de la nota, la tensión suena mal. También
        cuido el <strong>punto cero</strong>: a veces soltamos el bend y la
        cuerda no regresa a su lugar original, dejando la siguiente nota
        ligeramente fuera de tono.
      </p>

      <h3>Vibrato</h3>
      <p>
        Antes vibraba por pura inercia y terminaba sonando nervioso. Ahora
        intento que la cuerda <strong>oscile con el pulso</strong> de la
        canción. Un vibrato controlado y rítmico marca la diferencia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <AudioPlayer
          title="Ejecución Incorrecta"
          source="/content/09-por-que-componemos-malos-solos/1-bend-bad.mp3"
        />
        <AudioPlayer
          title="Ejecución Correcta"
          source="/content/09-por-que-componemos-malos-solos/1-bend-ok.mp3"
        />
      </div>

      <h2>2. El pulso y la técnica</h2>
      <p>
        Muchos creen que tocan fuera de tiempo por falta de ritmo, pero
        usualmente es <strong>falta de técnica</strong>. Si una frase te cuesta
        trabajo físicamente, tus manos se van a <strong>tropezar</strong> y vas
        a arrastrar o corretear el tiempo. Hay que practicar con metrónomo a
        velocidades lentas hasta que el movimiento sea natural.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <AudioPlayer
          title="Ejecución Incorrecta"
          source="/content/09-por-que-componemos-malos-solos/2-pulso-bad.mp3"
        />
        <AudioPlayer
          title="Ejecución Correcta"
          source="/content/09-por-que-componemos-malos-solos/2-pulso-ok.mp3"
        />
      </div>

      <h2>3. Falta de criterio</h2>
      <p>
        Me pasaba que solo repetía licks de memoria sin un sentido real. Un buen
        solo debe <strong>resolver</strong>. Trato de no quedarme encerrado en
        la misma caja de siempre y busco trasladar mis ideas a otras posiciones
        del mástil.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <AudioPlayer
          title="Primera posición de la pentatónica"
          source="/content/09-por-que-componemos-malos-solos/3-criterio-bad.mp3"
        />
        <AudioPlayer
          title="Segunda posición de la pentatónica"
          source="/content/09-por-que-componemos-malos-solos/3-criterio-ok.mp3"
        />
      </div>

      <p className="text-sm text-amber-100/80 italic">
        Aquí no es que una opción sea mejor que la otra, pero al trasladar el
        primer lick a la segunda posición la idea se siente más fresca y deja de
        ser tan predecible, ¿no te parece?
      </p>

      <h2>4. Cadencia rota</h2>
      <p>
        Esto ocurre cuando no aterrizas en los <strong>tiempos fuertes</strong>{" "}
        o terminas en una nota que choca con el acorde de fondo. El resultado es
        una frase que suena <strong>mal cerrada</strong>, como un discurso que
        se queda a medias.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <AudioPlayer
          title="Resolución incorrecta"
          source="/content/09-por-que-componemos-malos-solos/4-cadencia-bad.mp3"
        />
        <AudioPlayer
          title="Resolución correcta"
          source="/content/09-por-que-componemos-malos-solos/4-cadencia-ok.mp3"
        />
      </div>

      <h2>5. No dejar respirar</h2>
      <p>
        Tocar ráfagas de notas sin parar es monótono. El{" "}
        <strong>silencio</strong> es una herramienta musical poderosa; da
        respiro al oyente y hace que la frase que viene después tenga mucho más
        impacto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <AudioPlayer
          title="Malisimo"
          source="/content/09-por-que-componemos-malos-solos/5-respirar-bad.mp3"
        />
        <AudioPlayer
          title="Más interesante y musical"
          source="/content/09-por-que-componemos-malos-solos/5-respirar-ok.mp3"
        />
      </div>

      <h2>6. Abuso de la tónica</h2>
      <p>
        Caer siempre en la tónica hace que todo suene muy obvio. En un{" "}
        <strong>Dm7</strong>, por ejemplo, intento buscar el{" "}
        <strong>Fa (su tercera)</strong> o usar colores del{" "}
        <strong>Am (Frigio)</strong> para darle un matiz más oscuro.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <AudioPlayer
          title="Partiendo del Dm"
          source="/content/09-por-que-componemos-malos-solos/6-tonica-bad.mp3"
        />
        <AudioPlayer
          title="Partiendo de la tercera menor (F)"
          source="/content/09-por-que-componemos-malos-solos/6-tonica-ok.mp3"
        />
      </div>

      <h2>7. Linealidad (Lenguaje Musical)</h2>
      <p>
        Tocar la escala de arriba abajo suena a ejercicio de calentamiento. Uso{" "}
        <strong>intervalos amplios</strong> para romper esa estructura. Esto es
        el <strong>lenguaje musical</strong>: dejar de recitar el abecedario
        (1-2-3-4) y empezar a formar frases (1-3-2-4-6-5-7).
      </p>
      <p>
        Lo mismo pasa con los arpegios; tocarlos de forma lineal, tal como nos
        enseñan en los libros, suena muy básico.{" "}
        <strong>Agregar otras tensiones</strong> fuera de las notas del acorde
        le da un sabor mucho más interesante y menos académico a la melodía.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <AudioPlayer
          title="Dm7 (figura basica)"
          source="/content/09-por-que-componemos-malos-solos/7-lineal-bad.mp3"
        />
        <AudioPlayer
          title="Intervalos Amplios"
          source="/content/09-por-que-componemos-malos-solos/7-lineal-ok.mp3"
        />
      </div>

      <h2>8. Storytelling</h2>
      <p>
        Un buen solo debe sentirse como una unidad de inicio a fin. Si lo que
        escuchas son solo ideas buenas pero pegadas por bloques, algo anda mal.
        La clave es que cada frase sea la consecuencia de la anterior para que
        el oyente no pierda el hilo de la historia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <AudioPlayer
          title="Pensado por bloques"
          source="/content/09-por-que-componemos-malos-solos/8-story-bad.mp3"
        />
        <AudioPlayer
          title="Pensando de inicio a fin"
          source="/content/09-por-que-componemos-malos-solos/8-story-ok.mp3"
        />
      </div>

      <h2>¿Esto aplica para improvisar?</h2>
      <p>
        Claro que sí, pero improvisar es resolver <strong>in situ</strong>.
        Tener estos puntos claros ayuda a mejorar la expresión, pero a la hora
        de improvisar necesitas otra rutina de práctica sobre backing tracks,
        porque al final la improvisación no es crear de la nada, sino reutilizar
        lo que ya sabemos en el momento preciso.
      </p>
    </>
  ),
};
