# wafiydev

Personal portfolio for **Wafiy** — junior software engineer, backend & microservices.

A single-page site: one scrollable view with in-page navigation, a light,
typography-led layout tuned from 320px phones up to wide desktops.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (design tokens in `src/index.css`)
- Biome (format + lint) and ESLint 9

## Development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Script             | What it does                          |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Vite dev server                       |
| `npm run build`    | Type-check, then production build     |
| `npm run preview`  | Serve the production build locally    |
| `npm run lint`     | ESLint                                |
| `npm run format`   | Biome check (add `--write` to fix)    |

## Structure

```
src/
  sections/     # Intro, Projects, Skills, Connect
  components/   # Header, Footer
  data/         # data.json — all copy and content lives here
  types/        # content types
```

All page content comes from `src/data/data.json`, so the UI can be updated
without touching components. Copy is kept to short, one-line points.

## Writing

Posts are plain markdown files in `content/posts/`. Each file starts with a
small header block (the folder is kept by a `.gitkeep` until the first post):

```markdown
---
title: My post
date: 2026-10-24
summary: One line about it.
---

Body goes here.
```

Commit the file and the site rebuilds. Routes are hash-based, so no server or
rewrite rules are needed: `/#/blog` lists every post, `/#/blog/<slug>` shows
one. There is no database and no admin panel — markdown plus git is the
whole system.
