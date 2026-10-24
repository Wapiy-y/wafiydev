# wafiydev

Personal portfolio for **Wafiy** — junior software engineer, backend & microservices.

A single-page site: one scrollable view with in-page navigation, a light,
typography-led layout tuned from 320px phones up to wide desktops.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (design tokens in `src/index.css`)
- Motion for scroll reveals, Lucide / Simple Icons for iconography
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
  sections/     # Hero (intro), Projects, Skills, Contact
  components/   # Header, Footer, Section, Reveal
  hooks/        # scroll spy
  data/         # data.json — all copy and content lives here
  types/        # content types
```

All page content comes from `src/data/data.json`, so the UI can be updated
without touching components. Copy is kept to short, one-line points.
