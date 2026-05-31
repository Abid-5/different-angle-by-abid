# Different Angle by </AS>

A cinematic photography portfolio for Abid Shahriar. The site is built as a personal visual journal for street photography, nature, macro work, reflections, moody edits, post-rain mornings, sunsets, human stories, and experiments.

## Features

- React + Vite + TypeScript
- Tailwind CSS dark cinematic design system
- Framer Motion page and component transitions
- GSAP ScrollTrigger for selected scroll reveals and parallax
- React Router with `HashRouter` for GitHub Pages reliability
- Data-driven gallery and photo essays
- Responsive masonry gallery with filters
- Accessible lightbox with Esc, previous, and next keyboard controls
- Contact form UI with local success state
- Experiments page with before/after slider
- Local placeholder image assets under `public/images`

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- React Router
- Lucide React
- gh-pages

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Add New Photos

1. Add optimized images to `public/images/gallery`.
2. Prefer compressed `.webp` or optimized `.jpg` for real photos.
3. Add or edit photo objects in `src/data/photos.ts`.
4. Use relative image paths like `images/gallery/my-photo.webp`.

Example:

```ts
{
  id: 17,
  title: "Morning After Rain",
  category: "Nature",
  image: "images/gallery/morning-after-rain.webp",
  caption: "The world looked freshly washed.",
  date: "2026",
  location: "Bangladesh",
  alt: "Rain drops on a green leaf after morning rain."
}
```

## Add Photo Essays

Edit `src/data/stories.ts`. Each story has a `slug`, cover image, written body, and image sequence.

## Deploy to GitHub Pages

This project uses `HashRouter` and `base: "./"` so it works reliably from a GitHub Pages project URL.

1. Update the `homepage` field in `package.json`:

```json
"homepage": "https://your-github-username.github.io/your-repo-name"
```

2. Deploy:

```bash
npm run deploy
```

The `deploy` script builds the site and publishes `dist/` through the `gh-pages` package.

## Project Structure

```txt
public/
  images/
    gallery/
    hero/
    experiments/
src/
  components/
  data/
  pages/
  styles/
  utils/
  App.tsx
  main.tsx
```

## Notes

The current images are local cinematic SVG placeholders. Replace them with your real compressed photos when you are ready to publish the portfolio.
