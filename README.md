# CloudDesk

> A SaaS landing page with pricing tiers.

<!-- Add a screenshot at docs/screenshot.png and uncomment the line below:
![Screenshot of the home screen](docs/screenshot.png)
-->

## What this is

A single-page CloudDesk site built with React and TypeScript, finished to a standard you can
show a client and structured so the real build can grow out of it.

## Features

- Product screenshot built entirely in CSS — ticket rows, SLA tags and a chart
- Pricing with a monthly/annual toggle that re-prices every tier
- Six feature cards, customer quotes and a logo strip
- Highlighted middle tier and a closing call-to-action band
- Typed `Plan`, `Feature` and `Quote` models

## Tech stack

- **React 19** + **TypeScript** (strict mode) built with **Vite 7**
- **Plain CSS** — no Tailwind, no UI kit, no runtime dependencies beyond React
- Theme: Sky blue, defined as CSS custom properties with a dark-mode palette
- No external images or fonts: every visual is CSS, inline SVG or an emoji, so the page works offline

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run typecheck  # tsc --noEmit
npm run build      # typecheck, then a production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```
index.html              Page shell, title and meta description
src/
  main.tsx              React entry point
  App.tsx               The whole page, composed from the components below
  data.ts               Typed interfaces and the sample content
  base.css              Shared foundation: reset, layout primitives, buttons, nav, footer
  styles.css            This site's palette and its own sections
  components/           Nav, Footer and the sections with their own state
```

`base.css` is deliberately identical across the portfolio and contains only structure — every
colour, font and radius comes from a token that `styles.css` defines, so each site keeps its own
identity without duplicating the plumbing.

## Status

**Home-page UI prototype.** All content lives in `src/data.ts` as typed sample data. Forms
validate and give feedback in the page but submit nowhere, and there is no backend, database or
payment provider behind any of it.

### Next steps

- Connect sign-up and billing (Stripe) with a real trial flow
- Add product tour pages, docs and a changelog
- Live demo or interactive sandbox
- Customer case studies with measurable results

## License

MIT
