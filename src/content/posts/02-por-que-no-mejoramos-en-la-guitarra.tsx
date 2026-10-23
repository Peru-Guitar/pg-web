/* eslint-disable react/no-unescaped-entities */
import { Post, PostAuthor, PostCategory } from "../types";

export const porQueNoMejoramos: Post = {
  id: "por-que-no-mejoramos-en-la-guitarra",
  cover: "/content/por-que-no-mejoramos-en-la-guitarra/header.webp",
  title: "¿Por qué no mejoramos en la guitarra?",
  description:
    "Un análisis crudo sobre los bloqueos y el estancamiento que frenan nuestro progreso.",
  category: PostCategory.Reflections,
  date: new Date("2026-02-22T00:00:00"),
  author: PostAuthor.ErpProject,

  content: () => (
    <>
      <p>
        Este es mi análisis de las veces que me he sentido estancado.{" "}
        <strong>Es normal que suceda</strong> y es parte del aprendizaje, pero
        quedarse ahí es una elección.
      </p>

      <h2>1. Tocar no es practicar</h2>
      <p>
        Repetir lo que ya te sale es cómodo, pero no es mejorar.{" "}
        <strong>La mejora real está en lo que NO te sale</strong>. Si evitas lo
        difícil, tú mismo construyes tu propio techo.
      </p>

      <h2>2. Falta de un plan táctico</h2>
      <p>
        No necesitas 8 horas, necesitas{" "}
        <strong>objetivos claros y fechas límite</strong>. Si quieres mejorar
        algo, dale foco exclusivo por una semana o más. Disciplina sin dirección
        es perder el tiempo.
      </p>

      <h2>3. La trampa de la comparación</h2>
      <p>
        Frustrarse por no tocar como tu ídolo es inútil.{" "}
        <strong>Compárate con tu "yo" de hace meses</strong>. Ese es el único
        progreso real que puedes controlar.
      </p>

      <h2>4. No grabarse</h2>
      <p>
        Tu mente te engaña mientras tocas; <strong>grabarse no</strong>. Es el
        espejo más honesto para detectar suciedad técnica o falta de{" "}
        <strong>timing</strong>. Si no te grabas, tocas a ciegas.
      </p>

      <h2>5. Miedo a la crítica</h2>
      <p>
        Pide a un guitarrista de mayor nivel que analice tus errores.{" "}
        <strong>Usa ese feedback para mejorar</strong>. Tu ego no te deja ver
        tus puntos ciegos; alguien con más experiencia sí.
      </p>

      <h2>6. No transcribir (Sacar de oído)</h2>
      <p>
        Transcribir de oído es la única forma de ganar vocabulario real e
        interiorizar el instrumento. Haz esta analogía:
        <strong>
          {" "}
          todos podemos hablar, pero no todos tienen un buen léxico
        </strong>
        . En la música es igual; si no sacas música de oído, tu lenguaje siempre
        será limitado y nunca lograrás esa riqueza que tienen los grandes.
      </p>

      <h2>7. Ignorar la teoría</h2>
      <p>
        Puedes tener buen nivel técnico, pero sin teoría no sabrás cómo componer
        ni hacia dónde dirigir tus ideas musicales.{" "}
        <strong>No necesitas ser un experto</strong>, pero ignorar la teoría es
        la vía rápida a la frustración constante.
      </p>

      <h2>8. El peligro del ego inflado</h2>
      <p>
        <strong>Un lick bonito no te hace músico</strong>. Dominar una escala no
        te da el nivel que crees si fallas en lo básico. La maestría real nace
        cuando sales de tu zona cómoda y admites que aún te falta mucho.
      </p>
    </>
  ),
};
