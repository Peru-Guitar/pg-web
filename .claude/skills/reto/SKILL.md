---
name: reto
description: Creates or edits a Peru Guitar community challenge on peruguitar.com/retos. Use when the user asks for "nuevo reto", "agrega un reto", "el reto de esta semana", or names a lick or song fragment for the community to learn.
---

# Peru Guitar challenge

A challenge asks the community to learn a lick or a short part of a song, record it and share it. It is a healthy way to practice and improve together.

## Rules

- There are no winners, prizes, rankings or judging.
- Challenges have no dates or deadlines. Don't add any to a challenge.
- Every challenge page already shows these notes through `src/components/ui/ChallengeNotes.tsx`. Edit them there, not per challenge.
- People take part by recording a reel, posting it on Instagram and tagging @peruguitar. They can also share it in the WhatsApp group for feedback. The page template already covers this.
- Don't add tabs or the original song's audio unless the user provides them. Don't transcribe a song from memory.
- Don't make up facts about the song. If a musical detail is uncertain, leave it out or ask.
- Write notes and keys in American notation (C, Eb, Em).

## 1. Ask for what's missing

Ask in a single message for anything you can't infer:

- The song or lick and the exact part.
- The YouTube video of the challenge (id).
- Where the part starts and ends in that video.
- The header image, if there is one.

You propose the rest.

## 2. Add the entry

Add it at the **start** of `CHALLENGES` in `src/content/challenges.ts`. The list is newest first. `/retos`, the challenge page and the sitemap pick it up automatically.

| Field | Content |
|---|---|
| `slug` | Kebab-case song or lick plus the part: `little-wing-intro` |
| `number` | Previous highest number + 1 |
| `title` | Song or lick name only |
| `artist` | Artist name |
| `section` | The part to learn: `Solo el intro` |
| `description` | Specific, 1 or 2 sentences: what to learn, what defines it, and that they should share it. It appears on the card and the hero, so never leave it vague. |
| `cover` | Optional, see step 3 |
| `youtubeId` | Video id only, not the full URL |
| `range` | Where the part starts and ends in the video, shown below it: `{ start: "0:00", end: "0:33" }`. Never guess it. |
| `tips` | 2 or 3 practical tips on how to work it out |
| `caption` | The Instagram text, in the format below |

Caption format:

```
Aquí mi participación para el reto de @peruguitar: el intro de <Canción> de <Artista> 🎸 #PGRetoN
```

Never write `#N` loose (like "reto #1"): Instagram reads it as a hashtag. The only number goes in the `#PGRetoN` hashtag (for example `#PGReto1`).

## 3. Header image

- The user creates the images. Don't generate one unless asked.
- Save it as `public/content/retos/<slug>/header.webp`, 1600×900.
- Set `cover: "/content/retos/<slug>/header.webp"` only if the file exists. Without `cover`, the page uses the video thumbnail.

## 4. When finished

- Run `npm run lint` and `npm run build`.
- Show the user the description, tips and caption to review.
- A new challenge is a patch version. Propose the version and wait for confirmation.
- Don't commit unless asked. **Never push**: that only happens with the `push` skill and an explicit request.
