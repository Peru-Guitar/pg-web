---
name: artista
description: Adds or edits a featured guitarist on peruguitar.com/artistas (Artistas PG). Use when the user asks for "nuevo artista", "agrega un artista", "registra a <nombre>", "sube a <nombre> a artistas", or wants to update an artist's bio, photo, music or socials.
---

# Artistas PG

Artistas PG features guitarists, mostly Peruvian, with their bio, music, videos and socials. Each artist is one entry in `ARTISTS` in `src/content/artists.ts`. The directory `/artistas`, the artist page `/artistas/<slug>`, the home page section and the sitemap all pick it up automatically. Don't edit those pages to add an artist.

## Rules

- Never make up facts: bands, albums, collaborations, dates, awards or teaching details. Use only what the user provides or what the artist's own links confirm. If something is uncertain, leave it out or ask.
- Write user-facing text in Spanish, in the third person, warm but factual. No hype ("el mejor guitarrista del Perú").
- When the user gives a bio, keep all of its original content: every fact, name, title, year and achievement. Don't add, drop or change facts. Rewrite it like a senior editor: third person, clear structure, tight sentences, consistent names and capitalization, fixed typos.
- Write notes and keys in American notation (C, Eb, Em).
- No quotation marks in bios: write album, song and band titles plainly (el EP Nihil, not el EP "Nihil").
- Links must be real, full URLs the user gave you or that you confirmed. Never guess a handle.
- `slug` must be unique in `ARTISTS`.

## 1. Ask for what's missing

Ask in a single message for anything you can't infer:

- Name (artistic name as it should appear) and location.
- Background for the bio: bands, projects, releases, teaching, collaborations.
- Styles.
- Socials: Instagram, YouTube, Spotify, TikTok, Facebook, website.
- Music to feature: Spotify artist profile and one YouTube video.
- Photo, and optional cover image.
- Optional contact CTA (classes, bookings) and its link.

You propose the slug, tagline and bio from that.

## 2. Add the entry

Add the entry anywhere in `ARTIST_LIST`. `ARTISTS` sorts it alphabetically by name automatically, and that is the directory order. Don't sort by hand.

| Field | Content |
|---|---|
| `slug` | Kebab-case name: `brandon-murga` |
| `name` | Artistic name |
| `tagline` | One line under the name: what they play and what they do. `Guitarrista de metal, darkwave y metal industrial` |
| `bio` | One string per paragraph. `bio[0]` is the intro, max 250 characters: a factual summary of who the artist is and what they do, starting with their name ("<Name> es ..."). It opens the story directly, so no poetic or quote-like lines. It is shown first on the page and used as the meta description. Every detail goes in the following paragraphs, so nothing from the original bio is lost. |
| `location` | Optional. The header shows "Perú" by default. Set it to add the city (`Lima, Perú`), and always for non-Peruvian artists (`Bogotá, Colombia`). |
| `birthDate` | Optional. `"YYYY-MM-DD"`. Shown in the header as "10 de julio de 1996". Leave it out if the user doesn't give it. |
| `styles` | 2 to 4 short tags: `["Metal", "Darkwave", "Metal industrial"]` |
| `photo` | Optional, see step 3 |
| `cover` | Optional, see step 3 |
| `socials` | Only the networks that exist, as full URLs |
| `spotifyArtistId` | Optional. Id only, from `open.spotify.com/artist/<id>`. The artist player is the only Spotify embed we use. If the user gives a track or album link, find the artist id from it and use the artist URL in `socials.spotify` too. |
| `youtubeVideo` | Optional. One video only: `{ id, title }`, id only (not the URL, also for Shorts), title as published. |
| `contact` | Optional. `{ label: "Clases de guitarra", href: "https://wa.me/..." }` |

Clean every URL the user gives you (socials, contact, videos): drop the whole query string and fragment (`?si=`, `?igsh=`, `?rpxt=`, `utm_*`, etc.), leaving a plain URL like `https://www.instagram.com/handle`. The only exception is a query that identifies the resource, like `watch?v=<id>` on YouTube; keep just that parameter.

Complete the socials from what you're given:

- From a YouTube video, get its channel (`https://www.youtube.com/oembed?url=<video url>&format=json` returns `author_url`) and use it as `socials.youtube`. Never use a video URL there.
- From a Spotify track or album, get the artist profile and use it in `socials.spotify` and `spotifyArtistId`.
- Before finishing, check that every artist with a video or Spotify embed also has that network in `socials`.

## 3. Images

- The user provides the images. Don't generate or download one unless asked.
- Photo: square, about 800×800, saved as `public/content/artistas/<slug>/photo.webp`.
- Cover: optional, 1600×900, saved as `public/content/artistas/<slug>/cover.webp`.
- If the user gives a JPG/PNG, convert it to WebP (for example `cwebp -q 85` or `sips`), cropping the photo to square if needed.
- Set `photo` / `cover` only if the file exists. Without a photo the page shows the initials.

## 4. When finished

- Run `npm run lint` and `npm run build`.
- Show the user the tagline and bio to review, and flag anything you left out because it wasn't confirmed.
- Add a line to `src/content/changelog.ts` for the new artist if the release includes one.
- A new artist is a patch version. Propose the version and wait for confirmation.
- Don't commit unless asked. **Never push**: that only happens with the `push` skill and an explicit request.
