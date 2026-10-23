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

- `/` highlights Fret Quest, existing articles, free resources and podcasts.
- `/recursos` lists the existing ebook and two backing tracks, keeping their original playback and download links.
- `/recursos/no-mas-arpegios-aburridos` renders the original TSX book through `BookReader`. Chapters, musical tablature and images remain React content; no MDX compiler or CMS is needed.
- Reader preferences and relative reading position use a versionable, per-book localStorage key (`peruguitar:reader:<bookId>`). Storage failures do not prevent reading.
- `/tienda` presents the future digital store. The existing product data and detail route remain available; checkout is not implemented.
- Fret Quest and PG Fighters remain independent external apps. This portal has no dependency on their source code, backend or deployments. Contest sites are untouched.

## Validation and deployment

```bash
npm run lint
npm run build
```

All content pages are prerendered by Next.js. The current deployment uses Next.js redirects (including legacy article URLs); it is not configured as a raw `output: "export"` deployment. A future static-file host must supply equivalent redirects before enabling export.

Known source-data issue: both backing tracks currently reference the same Google Drive download URL. Confirm the intended files before replacing these links.
