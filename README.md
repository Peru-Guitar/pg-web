# pg-web

Main Peru Guitar website: blog and store.

## Development

```bash
npm install
npm run dev
```

## Structure

```
src/
  app/          routes (home, blog, store, legacy post redirects, sitemap)
  components/   layout (Navbar, Footer) and ui building blocks
  content/      posts and site data (navigation, apps, products, settings)
  lib/          helpers
  styles/       theme.css — design tokens
```

## Conventions

- Code, comments and docs are in English; user-facing content is in Spanish.
- The visual identity lives in `src/styles/theme.css`. Components use its tokens (`bg-brand`, `text-ink`, ...) instead of raw colors.
- Posts are TSX files in `src/content/posts/`, registered in `src/content/index.tsx`. Redesigns must not touch post content.

## Portal and reading experience

- `/` highlights Fret Quest, articles, free resources and podcasts.
- `/recursos` lists the ebook and two backing tracks with their playback and download links.
- `/recursos/no-mas-arpegios-aburridos` renders the TSX book through `BookReader`. Chapters, musical tablature and images remain React content; no MDX compiler or CMS is needed.
- Reader preferences and relative reading position use a versionable, per-book localStorage key (`peruguitar:reader:<bookId>`). Storage failures do not prevent reading.
- `/tienda` presents the digital store with product data and detail routes; checkout is not implemented.
- Fret Quest and PG Fighters are independent external apps. This portal has no dependency on their source code, backend or deployments.

## Validation and deployment

```bash
npm run lint
npm run build
```

All pages are prerendered with `output: "export"` and published to GitHub Pages when `main` is pushed. Pages has no server redirects, so legacy URLs redirect through static pages (`src/app/[slug]`, `src/app/c/[id]`).
