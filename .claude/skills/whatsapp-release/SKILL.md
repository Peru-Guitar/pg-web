---
name: whatsapp-release
description: WhatsApp message announcing what's new on peruguitar.com to the Peru Guitar community group. Use when the user asks for "mensaje para WhatsApp", "anuncio para el grupo", "qué hay de nuevo en la web" or similar. Uses the current package.json version unless another is requested.
---

# WhatsApp community announcement

It's for the **Peru Guitar community**, in the WhatsApp group, and it's written in Spanish. It tells guitarists what they can read, watch, play or join now. Nothing technical.

## 1. Gather the information

1. Version: `"version"` in `package.json` (or the one the user asks for). It must be **published** (on `origin/main`); if not, say so.
2. Release notes: that version's entry in `src/content/changelog.ts` (and any other versions since the last announcement, if the user asks to cover them).
3. Check `git log` and `git diff` between the previous announced version and this one, so nothing is left out. Then read the content itself for the details:
   - Artists: `src/content/artists.ts` (name, tagline, where they're from).
   - Challenges: `src/content/challenges.ts` (song, artist, part, level).
   - Manga: `src/content/manga.ts` (title, volume, chapters).
   - Posts: `src/content/index.tsx` and the post files.
   - Collabs, podcast: `src/content/media.ts`. Resources: `src/content/resources.ts`.
4. Anything in the code but **not published** doesn't go in.

## 2. What goes in and what doesn't

- **Yes:** content for the community: new artists, challenges, articles, manga, collabs, podcast episodes, free resources, and new sections people can use (like a new place to apply or join).
- **No:** design, layout, mobile tweaks, URL changes, redirects, bug fixes, performance, SEO, internal changes. They don't go in even if they're in the release notes.
- If there's nothing new for the community, say so and don't write the message.

## 3. Format

WhatsApp format, not Markdown: `*bold*`, `_italics_`, lists with `- `. No `#` or bracket links. Deliver it in a code block so it can be copied as is.

- Include the version in the title line, as `v<version>` (e.g. `v1.42.3`), and nowhere else.
- Links always with full `https://` URLs to the exact page (artist, challenge, manga, post), so they're clickable.
- Notes in American notation (C, Eb, Am), never Do Re Mi.
- Warm and direct, second person, short sentences. Say why each thing is worth a look, using only facts from the content. Don't make anything up.
- Tag @peruguitar only when telling people to share something on Instagram (a challenge).
- One emoji per section at most.

## 4. Template

```
🎸 *Novedades en Peru Guitar · v<version>*

<Una o dos frases con lo más importante.>

*🔥 Reto #<N>: <Canción> — <Artista>*
<Qué parte hay que sacar y su nivel. Invita a grabarse y etiquetar a @peruguitar.>
👉 https://peruguitar.com/comunidad/retos/<slug>

*🎤 Nuevos en Artistas PG*
- *<Nombre>*: <tagline, de dónde es>. https://peruguitar.com/artistas/<slug>

*📖 <Título del manga / artículo / recurso>*
<Una o dos frases.>
👉 <https://...>

¿Tocas guitarra y quieres aparecer en Artistas PG? Postula aquí: <ARTISTS_FORM_URL>   ← only if relevant

👉 https://peruguitar.com/comunidad
```

Only include the sections that have something new. Lead with the most exciting item (usually a new challenge or manga).

After the block, say in one line what you left out (design, URLs, fixes…) so the user can confirm.
