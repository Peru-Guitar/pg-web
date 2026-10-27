---
name: blog-post
description: Crea o edita un artículo del blog de peruguitar.com a partir de las ideas del usuario. Úsalo cuando pida "nuevo artículo", "nuevo post", "escribe una entrada", "agrega al blog" o comparta ideas sueltas para publicar.
---

# Artículo del blog de Peru Guitar

El usuario da las ideas (a veces sueltas, en notas o audio transcrito). Tú las ordenas, completas lo que falta y las llevas al formato del blog sin cambiar su opinión ni su voz.

## 1. Antes de escribir

- Lee 1 o 2 artículos de `src/content/posts/` de la misma categoría para copiar el tono.
- Si falta algo que no puedes inventar, pregúntalo en un solo mensaje: video de YouTube (id), tablatura, audios, fecha de publicación. Lo demás (título, descripción, estructura) lo propones tú.
- No inventes datos, anécdotas, nombres ni cifras. Si una idea necesita un ejemplo, usa uno musical genérico y márcalo para que el usuario lo revise.

## 2. Archivos

1. `src/content/posts/NN-slug.tsx`: `NN` es el siguiente número libre (mira el último del directorio).
2. Registrarlo en `src/content/index.tsx`: import + agregarlo al array `POSTS` (se ordena solo por fecha).
3. Portada: `public/content/<id>/header.webp`, 1600×900. Si no existe, agrega un job a `docs/header-image-prompts.json` copiando el prefijo de estilo de los demás prompts y describe solo la escena. No generes la imagen sin que te lo pidan.

```tsx
import { Post, PostAuthor, PostCategory } from "../types";

export const nombreEnCamelCase: Post = {
  id: "slug-en-kebab-case",            // es la URL: /blog/<id>
  cover: "/content/slug-en-kebab-case/header.webp",
  title: "Título claro, como lo buscaría alguien",
  description: "Una o dos frases (~150 caracteres). Se usa en tarjetas y SEO.",
  category: PostCategory.Guitar,       // Guitar | Theory | Reflections | Production | Events
  date: new Date("AAAA-MM-DDT00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>...</p>
      <h2>...</h2>
    </>
  ),
};
```

## 3. Componentes disponibles (`src/content/components/`)

- `<YouTubePlayer id="KV6t7g96EbA" />`
- `<AudioPlayer title="..." source="/content/<id>/audio.mp3" />`
- `<ImageVisualizer src="..." alt="..." caption="..." />`
- `<TabVisualizer title="..." notes={[`...`]} />`: una línea por grupo, `cuerda:trastes` (`1:10-14-12`), con `h` hammer, `p` pull-off y `\\` slide. Ver `01-pentatonic-fusion-lick.tsx`.
- `<DownloadLinks files={[{ name, url, extension, size }]} />`

Si el texto lleva comillas o apóstrofos sin escapar, agrega `/* eslint-disable react/no-unescaped-entities */` arriba, como en el post 01.

## 4. Estilo

- Español, tuteo, directo. Habla un guitarrista a otro, no un manual.
- Párrafos cortos (2–4 líneas). Secciones con `<h2>` y, si hace falta, `<h3>`.
- `<strong>` para la idea clave de cada párrafo, no para frases enteras.
- Empieza con el problema o la idea central en el primer párrafo, sin introducciones genéricas.
- Termina con algo aplicable (qué practicar, cómo empezar), no con un resumen.
- Nada de relleno típico de IA ("en el mundo de la guitarra…", "en conclusión…", listas de 10 tips vacíos).

## 5. Al terminar

- Ejecuta `npx tsc --noEmit` y `npm run lint`.
- Entrega al usuario: título, descripción, categoría y fecha propuestos, y una lista de lo que añadiste tú (ejemplos, secciones) para que lo revise.
- No hagas commit si no te lo piden. **Nunca hagas push**: eso solo pasa con la skill `push` y un pedido explícito.
