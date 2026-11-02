---
name: blog-post
description: Creates or edits a peruguitar.com blog article from the user's ideas. Use when the user asks for "nuevo artículo", "nuevo post", "escribe una entrada", "agrega al blog", or shares loose ideas to publish.
---

# Peru Guitar blog article

The user provides the ideas (sometimes loose, in notes or transcribed audio). You organize them, fill in what's missing and bring them to the blog format without changing their opinion or voice.

## 1. Before writing

- Read 1 or 2 articles in the same category from `src/content/posts/` to match the tone.
- If something is missing that you can't make up, ask for it in a single message: YouTube video (id), tab, audio, publication date. You propose the rest (title, description, structure).
- Don't make up data, anecdotes, names or figures. If an idea needs an example, use a generic musical one and mark it for the user to review.

## 2. Files

1. `src/content/posts/NN-slug.tsx`: `NN` is the next free number (check the last one in the directory).
2. Register it in `src/content/index.tsx`: import it and add it to the `POSTS` array (sorted automatically by date).
3. Cover: `public/content/<id>/header.webp`, 1600×900. If it doesn't exist, add a job to `docs/header-image-prompts.json`, copying the style prefix from the other prompts and describing only the scene. Don't generate the image unless asked.

```tsx
import { Post, PostAuthor, PostCategory } from "../types";

export const nameInCamelCase: Post = {
  id: "slug-in-kebab-case",            // this is the URL: /blog/<id>
  cover: "/content/slug-in-kebab-case/header.webp",
  title: "Clear title, the way someone would search for it",
  description: "One or two sentences (~150 characters). Used in cards and SEO.",
  category: PostCategory.Guitar,       // Guitar | Theory | Reflections | Production | Events
  date: new Date("YYYY-MM-DDT00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>...</p>
      <h2>...</h2>
    </>
  ),
};
```

## 3. Available components (`src/content/components/`)

- `<YouTubePlayer id="KV6t7g96EbA" />`
- `<AudioPlayer title="..." source="/content/<id>/audio.mp3" />`
- `<ImageVisualizer src="..." alt="..." caption="..." />`
- `<TabVisualizer title="..." notes={[`...`]} />`: one line per group, `string:frets` (`1:10-14-12`), with `h` hammer, `p` pull-off and `\\` slide. See `01-pentatonic-fusion-lick.tsx`.
- `<DownloadLinks files={[{ name, url, extension, size }]} />`

If the text has unescaped quotes or apostrophes, add `/* eslint-disable react/no-unescaped-entities */` at the top, as in post 01.

## 4. Style

The article itself is written in Spanish.

- Spanish, informal "tú", direct. One guitarist talking to another, not a manual.
- Short paragraphs (2–4 lines). Sections with `<h2>` and, if needed, `<h3>`.
- `<strong>` for the key idea of each paragraph, not for whole sentences.
- Open with the problem or central idea in the first paragraph, with no generic intro.
- End with something actionable (what to practice, how to start), not a summary.
- No typical AI filler ("en el mundo de la guitarra…", "en conclusión…", lists of 10 empty tips).

## 5. When finished

- Run `npx tsc --noEmit` and `npm run lint`.
- Give the user the proposed title, description, category and date, plus a list of what you added (examples, sections) for review.
- Don't commit unless asked. **Never push**: that only happens with the `push` skill and an explicit request.
