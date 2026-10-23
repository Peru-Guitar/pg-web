import { AudioPlayer } from "../components/AudioPlayer";
import { ImageVisualizer } from "../components/ImageVisualizer";
import { Post, PostAuthor, PostCategory } from "../types";

export const comoComponerUsandoIA: Post = {
  id: "como-mejorar-composiciones-con-ia",
  cover: "/content/como-mejorar-composiciones-con-ia/header.webp",
  title: "¿Cómo mejorar composiciones usando Inteligencia Artificial?",
  description:
    "Usa la IA como productor musical para potenciar tus ideas y estructurar tús temas de guitarra eléctrica.",
  category: PostCategory.Production,
  date: new Date("2026-03-15T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        Nos enfocaremos en crear un{" "}
        <strong>tema instrumental de guitarra eléctrica</strong>. Aprenderás a
        usar la IA como un productor para elevar tus borradores al siguiente
        nivel.
      </p>

      <h2>La IA no reemplaza tu creatividad</h2>

      <p>
        Define tu camino: música mejorada por IA o creada 100% por ella. Si
        delegas todo, este tutorial sobra. Aquí buscamos{" "}
        <strong>potenciar tu criterio técnico</strong>, no sustituirlo.
      </p>

      <h2>La clave: El borrador</h2>

      <p>
        Graba una idea inicial. Comienza siempre por la <strong>melodía</strong>
        ; es lo que da identidad al tema.
      </p>

      <p>
        En esta etapa <strong>la perfección no importa</strong>. Yo grabo con
        errores y desafinaciones. El objetivo real es estructurar la idea de
        principio a fin.
      </p>

      <p>
        Basta con <strong>guitarra y batería</strong>. No pierdas tiempo
        programando bajos o sintetizadores; eso lo delegaremos.
      </p>

      <p>
        Usa una <strong>batería simple</strong>. Puedes hacer copy-paste para
        mantener el pulso. Con marcar el <strong>kick y el snare</strong> es
        suficiente para definir la acentuación. La IA completará los hi-hats,
        platos y el groove después.
      </p>

      <p>
        Lo fundamental es tener el <strong>esqueleto sólido</strong>: bloques,
        armonías base y estructura macro.
      </p>

      <h2>Proceso en SUNO</h2>

      <p>
        Hoy por hoy, SUNO es la mejor herramienta. Exporta tu borrador, ve a{" "}
        <strong>Create</strong> y selecciona <strong>Upload Audio</strong>.
      </p>

      <ImageVisualizer
        src="/content/13-como-mejorar-nuestras-composiciones-con-ia/01-suno-upload.png"
        alt="Suno interface"
        caption="Carga tu archivo de audio directamente"
      />

      <p>
        Tras subirlo, activa la opción <strong>COVER</strong>. Es vital para que
        la IA trabaje sobre tu base rítmica y melódica.
      </p>

      <p>
        En <strong>More Options</strong> ajusta el{" "}
        <strong>Audio Influence</strong> por encima del <strong>70%</strong>.
        Esto garantiza que se respete tu idea original sin que la IA invente
        demasiado.
      </p>

      <ImageVisualizer
        src="/content/13-como-mejorar-nuestras-composiciones-con-ia/02-suno-audio-influence.png"
        alt="Audio influence settings"
        caption="Configura entre 70% y 90% para proteger tu estructura"
      />

      <h3>El Prompt de Estilo</h3>

      <p>
        Escribe un prompt descriptivo en <strong>Style</strong>. Si buscas algo
        Modern Metal, usa este ejemplo:
      </p>

      <blockquote className="my-6">
        Modern metal, 145 BPM, B minor. Powerful punchy drum production with
        dynamic groove and fills, subtle atmospheric ambient pads, seamless
        polished transitions. Tight distorted guitars, heavy production,
        maintaining original composition and melodic structure. High fidelity.
      </blockquote>

      <p>
        Genera varias versiones y quédate con la que mejor capture la intención
        de tu tema.
      </p>

      <h2>¿Qué sigue ahora?</h2>

      <p>
        Usa el resultado como <strong>referencia de producción</strong>. Llévalo
        a tu DAW y <strong>reescribe todo</strong>. Aunque puedes separar stems
        con herramientas como Moises, la calidad suele ser baja o robótica. Lo
        ideal es regrabar tus instrumentos usando la guía de la IA para mejorar
        arreglos y texturas.
      </p>

      <h2>Conclusión</h2>

      <p>
        Producir un tema completo requiere tiempo y mucha prueba y error. Usar
        IA agiliza el proceso: lo que antes tomaba meses, ahora se resuelve en
        la mitad de tiempo.
      </p>

      <p>
        Seamos realistas: esto es solo <strong>pre-producción</strong>. Lograr
        un sonido <strong>profesional</strong> depende totalmente de la calidad
        de tus tomas, la mezcla, mastering y tu criterio técnico. El trabajo
        duro empieza ahora.
      </p>

      <h2>Comparativa de Audio</h2>

      <p>
        Escucha la diferencia. Mi borrador tiene errores y una batería plana,
        pero sirvió como base para la versión final producida.
      </p>

      <div className="flex flex-col md:flex-row w-full gap-4 my-8">
        <div className="flex-1">
          <AudioPlayer
            title="Borrador Original (con errores)"
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
    </>
  ),
};
