# Norihelys — Minimal portfolio

-   Minimal, pastel theme using Astro 5
-   Multilingual (es/en) with i18n routing
-   Sections: Intro, Work, Testimonials, Now

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

-   `src/layouts/Layout.astro`: Base layout and palette
-   `src/components/Nav.astro`: Compact header + language switch
-   `src/pages/`: `index.astro`, `work.astro`, `testimonials.astro`, `now.astro`
-   `src/pages/en/*` and `src/pages/es/*`: localized routes


