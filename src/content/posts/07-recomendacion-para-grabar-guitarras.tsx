/* eslint-disable react/no-unescaped-entities */
import { Post, PostAuthor, PostCategory } from "../types";

export const recomendacionParaGrabarGuitarras: Post = {
  id: "recomendacion-para-grabar-guitarras",
  cover: "/content/recomendacion-para-grabar-guitarras/header.webp",
  title: "Recomendación para grabar guitarras",
  description:
    "Lo que he aprendido grabando mis propios temas: tips reales para obtener mejores muestras que ayuden al proceso de producción.",
  category: PostCategory.Production,
  date: new Date("2026-02-23T00:00:02"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        Mi experiencia grabando siempre ha sido en el mundo digital. Después de
        varios temas grabados —donde cada uno ha sido un aprendizaje nuevo— te
        comparto los tips que realmente me han ayudado a mejorar la calidad de
        mis muestras siguiendo mi propio flujo de trabajo:
      </p>

      <h2>1. Señal pura: Olvida los efectos espaciales</h2>
      <p>
        Lo primero que hago al armar mi preset es enfocarme solo en el binomio
        Guitarra + Amplificador. Es válido usar un overdrive o compresor si son
        parte esencial del ataque, pero <strong>reverb, delay o chorus</strong>,
        hazlo siempre desde el DAW. Si grabas con estos efectos puestos, pierdes
        el control sobre el espacio y te quedas sin margen de maniobra al
        momento de mezclar.
      </p>

      <h2>2. El tono: Menos es más (Gain)</h2>
      <p>
        Mientras busco el sonido, evito el error común de saturar la señal
        pensando que sonará más pesada. Como regla de oro, intento no pasar del
        5 si el rango es del 1 al 10. Al hacer capas de guitarras, la distorsión
        se suma; si te pasas, perderás definición y dinámica. El carácter real
        se logra con una ejecución sólida y post-procesos en la mezcla.
      </p>

      <h2>3. Limpiemos la señal, pero no tanto</h2>
      <p>
        Antes de dar por cerrado el tono, aplico filtros preventivos: un{" "}
        <strong>High Pass Filter (HPF)</strong> entre 80Hz - 100Hz para eliminar
        ruidos graves, y un <strong>Low Pass Filter (LPF)</strong> sobre los
        10kHz - 12kHz para domar el "hiss". Si nos falta limpieza, lo corregimos
        luego en el DAW, pero si te pasas cortando ahora, ya no hay forma de
        recuperar el peso o el brillo natural.
      </p>

      <h2>4. Contexto: La relación con la batería</h2>
      <p>
        Nunca diseño mi tono de guitarra en solitario. Hago una prueba rápida
        del preset sobre una pista de batería similar a la que quiero usar. La
        batería es lo primero que se ataca en la mezcla y todo lo demás se
        construye en base a eso. Si guitarra y batería se integran bien desde
        esta fase de prueba, la mezcla final fluirá mucho mejor.
      </p>

      <h2>5. Graba todo dos veces (Double Tracking)</h2>
      <p>
        Ya con el sonido listo, grabo cada sección dos veces en canales mono
        independientes. Mando una toma a la izquierda y la otra a la derecha
        (entre el 85% y 100%). Esa diferencia microscópica en el timing de las
        manos genera una profundidad estéreo real que un plugin no puede
        replicar.
      </p>

      <p>
        <strong>Nota sobre los Leads</strong>: A diferencia de las rítmicas, las
        guitarras solistas o arreglos suelen grabarse en una sola toma. En este
        caso no queremos duplicar, sino buscar su espacio con efectos desde el
        DAW.
      </p>

      <h2>6. Preparación y ejecución final</h2>
      <p>
        Finalmente, antes de la toma definitiva, practico hasta que la ejecución
        sea fluida; eso ahorra más tiempo que cualquier edición. También uso un{" "}
        <strong>fret-wrap</strong> o una simple cinta en la cejuela. No es un
        tema de ego; es ingeniería sonora para evitar capturar armónicos no
        deseados y limpiar la señal mecánicamente mientras grabo.
      </p>

      <h2>Conclusión</h2>
      <p>
        Seguir este orden me ha garantizado llegar a la etapa de mezcla con
        archivos mucho más limpios y fáciles de trabajar. No soy un profesional,
        pero cada tema que termino me deja una lección nueva, y estos son los
        aprendizajes que hoy me sirven para que mis proyectos suenen como
        quiero. ¡Espero que te sean de utilidad!
      </p>
    </>
  ),
};
