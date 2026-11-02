# pg-web

Main Peru Guitar site: blog, resources and store. Next.js static export on GitHub Pages. See `README.md` for structure.

## Verify

```bash
npm run lint
npm run build
```

There is no test suite. Deploy CI runs the same two commands.

## Pushing and versions

- Pushing to `main` publishes the site. Never push unless the current message explicitly asks for it, and follow the workspace push skill (`../.claude/skills/push/SKILL.md`).
- New posts are always a patch, but propose the version and wait for confirmation.

## Language

Code, comments and docs are in English. User-facing content is in Spanish.

## Conventions

- Use `.claude/skills/blog-post/SKILL.md` when adding or editing posts. Posts are TSX files in `src/content/posts/`, registered in `src/content/index.tsx`.
- Write notes and keys in American notation (C, Eb, Em), never Do, Re, Mi. Spanish words like "mayor" and "armónica" stay.
- Redesigns must not change post content.
- Use the design tokens from `src/styles/theme.css` (`bg-brand`, `text-ink`) instead of raw colors.
- `next.config.ts` uses `output: "export"`, and GitHub Pages has no server redirects. Legacy URLs redirect through static pages (`src/app/[slug]`, `src/app/c/[id]`).
- Fret Quest and PG Fighters are separate apps. Don't depend on their source, backend or deployments.
