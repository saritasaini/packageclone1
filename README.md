# Bocpak Home 2 Clone

A pixel-faithful recreation of the [Bocpak Home 2](https://demo2.themelexus.com/bocpak/home-2/) packaging demo, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, Lenis, and Embla Carousel.

## Stack

- **Next.js** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** — section reveals, hero transitions, product hovers
- **Lenis** — smooth scrolling
- **Embla Carousel** — hero, brands, categories, testimonials

## Typography & colors

- Headings: **Marcellus**
- UI/body: **Figtree**
- Primary `#2757FF`, secondary `#F865DC`, accent green `#5fbd74`

## Assets

Packaging mockups are downloaded from the ThemeLexus demo into `public/images/home-2/`:

```bash
npm run download-assets
```

For production, replace these with your own licensed assets.

## Development

```bash
npm install
npm run download-assets
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```
