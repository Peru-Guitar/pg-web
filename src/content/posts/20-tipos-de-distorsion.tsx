/* eslint-disable react/no-unescaped-entities */
import { Post, PostAuthor, PostCategory } from "../types";

export const tiposDeDistorsion: Post = {
  id: "tipos-de-distorsion-en-guitarra",
  cover: "/content/tipos-de-distorsion-en-guitarra/header.webp",
  title: "Tipos de distorsión en guitarra y cómo suena cada uno",
  description:
    "Boost, overdrive, distorsión, fuzz y high gain: aprende a distinguir su sonido y a elegir según lo que necesita tu guitarra.",
  category: PostCategory.Guitar,
  date: new Date("2026-11-24T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        Subir la ganancia no siempre te acerca al sonido que buscas. Un riff
        puede necesitar más definición, un solo más sustain y una base una
        textura más salvaje. Aunque solemos llamar "distorsión" a todo lo que
        ensucia la señal, <strong>un overdrive y un fuzz se sienten muy
        distintos al tocar</strong>.
      </p>
      <p>
        Cuando la señal supera lo que un circuito puede reproducir limpiamente,
        sus picos se recortan: eso se llama <em>clipping</em>. La forma de ese
        recorte, la ecualización y la compresión influyen en el carácter del
        sonido. Estas categorías te sirven como guía, pero sus límites se
        cruzan: <strong>no todos los pedales de una misma familia suenan
        igual</strong>.
      </p>

      <h2>1. Clean boost: empuja la señal</h2>
      <p>
        Un clean boost busca <strong>subir el nivel sin añadir saturación
        propia</strong>. No es una distorsión en sí, pero importa porque puede
        hacer saturar lo que viene después. Si el amplificador tiene margen
        limpio, ganarás volumen; si ya está al límite, conseguirás más
        saturación y compresión, sin un aumento de volumen tan marcado.
      </p>
      <p>
        <strong>Qué escuchar:</strong> cuánto sube el volumen y cuánto cambia
        la suciedad. Puede ayudarte a destacar un solo o a empujar un ampli,
        pero el resultado depende de dónde lo coloques en la cadena y de cómo
        esté ajustado el equipo.
      </p>

      <h2>2. Overdrive: del limpio al crunch</h2>
      <p>
        El overdrive suele buscar la sensación de un amplificador que empieza
        a saturar. En muchos diseños el recorte es gradual, lo que se conoce
        como <em>soft clipping</em>. A ganancias moderadas puede{" "}
        <strong>responder mucho a tu ataque</strong>: tocas suave y el sonido
        se limpia; atacas fuerte y aparece el crunch.
      </p>
      <p>
        <strong>Qué escuchar:</strong> cuánto conserva los matices de tu mano
        y cómo cambia el cuerpo de la guitarra. Algunos resaltan los medios;
        otros colorean menos. Es habitual en blues y rock clásico, pero también
        se usa delante de un ampli saturado, con poca ganancia y más nivel,
        para recortar graves antes de la saturación y definir los riffs.
      </p>

      <h2>3. Distorsión: más saturación y sustain</h2>
      <p>
        Un pedal de distorsión suele ofrecer un sonido más saturado y
        comprimido que un overdrive moderado. Muchos usan un recorte más
        brusco, o <em>hard clipping</em>, aunque el nombre del efecto no basta
        para saber cómo está construido. Al subir la ganancia, las diferencias
        entre tocar suave y fuerte suelen reducirse y las notas se sostienen
        más: eso es el <strong>sustain</strong>.
      </p>
      <p>
        <strong>Qué escuchar:</strong> la textura de los acordes, la duración
        de las notas y la claridad del ataque. Puede funcionar para riffs de
        hard rock, punk o metal, pero más ganancia no siempre significa más
        pegada: si todo queda demasiado comprimido, el riff pierde definición.
      </p>

      <h2>4. Fuzz: una textura que se hace notar</h2>
      <p>
        El fuzz lleva el recorte de la señal a un terreno más extremo. Puede
        producir una forma de onda cercana a la cuadrada, pero su sonido varía
        mucho según el circuito. Lo reconoces por una textura{" "}
        <strong>gruesa, áspera y cargada de armónicos</strong>; a veces parece
        que la guitarra se convierte en un sintetizador.
      </p>
      <p>
        <strong>Qué escuchar:</strong> cómo se mezclan las notas de un acorde
        y qué pasa al bajar el volumen de la guitarra. Algunos fuzz se limpian
        muchísimo con esa perilla; otros mantienen un carácter denso y
        comprimido. Es una textura habitual en rock de los 60, stoner y doom,
        aunque puedes usarla donde el tema pida ese carácter.
      </p>

      <h2>5. High gain: mucha ganancia, con control</h2>
      <p>
        High gain describe un sonido o diseño de <strong>alta ganancia</strong>,
        no un efecto exclusivo de los amplificadores. Puedes encontrarlo en
        amplis, pedales y simulaciones. En muchos amplificadores se consigue
        combinando varias etapas de ganancia en el previo, junto con una
        ecualización que da forma a la saturación.
      </p>
      <p>
        <strong>Qué escuchar:</strong> si los palm mutes tienen un ataque
        claro y si las notas rápidas se distinguen. Es habitual en metal moderno
        y shred, pero la definición depende también de la ecualización, las
        pastillas y tu ejecución. Prueba bajar un poco el gain antes de subirlo:
        quizá el riff gane fuerza al recuperar claridad.
      </p>

      <h2>Elige por lo que necesita el tema</h2>
      <p>
        Si buscas empujar tu sonido actual, empieza por un boost. Para pasar
        del limpio al crunch con la mano, prueba un overdrive. Si necesitas
        más saturación y sustain, explora una distorsión o un sonido high gain.
        Si buscas una textura áspera y muy marcada, prueba un fuzz. Son puntos
        de partida: <strong>lo que manda es cómo encaja la guitarra en la
        música</strong>.
      </p>
      <p>
        Haz esta prueba con los pedales o modelos que tengas: toca el mismo
        riff con cada uno y ajusta el volumen de salida para que se escuchen a
        un nivel parecido. Así será más fácil comparar el carácter sin que el
        más fuerte te parezca automáticamente mejor.
      </p>
      <p>
        Primero toca suave, luego fuerte y después baja el volumen de la
        guitarra. Escucha qué ocurre con el ataque, el sustain y la claridad de
        los acordes. Quédate con el ajuste que te permita expresar mejor el
        riff, aunque tenga menos ganancia de la que esperabas.
      </p>
    </>
  ),
};
