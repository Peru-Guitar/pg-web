import { Post, PostAuthor, PostCategory } from "../types";

export const tiposDeGuitarrista: Post = {
  id: "tipos-de-guitarristas-y-rivalidades",
  cover: "/content/tipos-de-guitarristas-y-rivalidades/header.webp",
  title: "Tipos de guitarrista y rivalidades",
  description:
    "Un análisis sincero (y quizás algo ácido) sobre los especímenes que habitamos el mundo de las seis cuerdas y las rivalidades que existen.",
  category: PostCategory.Reflections,
  date: new Date("2026-02-22T00:00:01"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        Hoy vamos a hablar de los tipos de guitarristas que he ido encontrando
        durante mi vida. Algunos son algo graciosos y seguro yo mismo encajo en
        alguno de estos, pero este es un análisis sano (o tal vez no tanto) y
        sincero de la realidad y las rivalidades tontas que existen entre
        nosotros.
      </p>

      <h3>El Shredder</h3>
      <p>
        Usualmente vienen de la escuela del Heavy Metal. Intentan impresionar
        bajo la premisa de que la técnica lo es todo. Para mí, la técnica es
        parte fundamental, pero debe crecer conforme a la musicalidad; de lo
        contrario, te quedas en un extremo donde solo hay velocidad pero falta
        mensaje.
      </p>

      <h3>El Blusero</h3>
      <p>
        Creen que la música son solo notas bonitas; si no, le falta alma. Usan
        el sentimiento como escudo para ocultar su{" "}
        <strong>flojera técnica</strong>. Tocar solo tres notas no te hace más
        profundo si lo haces porque no tienes más recursos. Tocar sucio no es
        tener feeling, es falta de práctica.
      </p>

      <h3>El Adicto al Tono (Gearhead)</h3>
      <p>
        Pasa más tiempo configurando presets que tocando. Busca el sonido
        perfecto para ocultar que no tiene nada que decir. Recuerda:
        <strong> lenguaje mata tono</strong>. Un músico con lenguaje suena bien
        hasta en una guitarra de pack; el equipo ayuda, pero no hace la música.
      </p>

      <h3>Los Bachateros</h3>
      <p>
        La onda Tim Henson y el Math Rock. Técnica impecable pero
        <strong> tan editada que deja de sentirse natural</strong>. Al tener
        acceso a tanta información, creen saberlo todo, pero a veces te pasan un
        lick o graban algo que te deja un mal sabor; se siente clínico, sin la
        mugre necesaria que hace que la guitarra se sienta viva.
      </p>

      <h3>El Eterno Estudiante</h3>
      <p>
        Nunca deja de aprender, lo cual suena bien, pero nunca aterriza. Pasa de
        curso en curso sin <strong>sentar objetivos reales</strong>. Acumula
        teoría como si fuera un manual, pero se olvida de que la música se trata
        de producir y comunicar, no solo de consumir información.
      </p>

      <h3>El Romántico de lo Barato</h3>
      <p>
        Defiende que el equipo no importa y que una guitarra barata suena igual
        o mejor que una cara. Es una verdad a medias. ¿Han visto a
        <strong> Steve Lukather</strong> tocar con un equipo menor a 30 mil
        dólares? El equipo profesional existe por una razón; lo demás es
        consuelo para no invertir en tu propio sonido.
      </p>

      <h3>El Guitarrista de Cuarto</h3>
      <p>
        Se enfoca en su propio progreso y en tocar lo que le apasiona bajo sus
        propios términos. No busca los reflectores, lo cual le da la libertad de
        no fallar frente a nadie, pero también corre el riesgo de caer en la
        soberbia de juzgar al que está en el escenario desde la
        <strong> comodidad de su silla</strong>.
      </p>
    </>
  ),
};
