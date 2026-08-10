# Suilnk — personal site

A premium, single-page personal site for Suliman: end-to-end merchandise
operations for creators. React + Vite, no CMS, no backend — content lives in
a few plain JS files so it's easy to keep editing after handoff.

## Before you launch — placeholder checklist

Everything below renders cleanly as-is, but is not real content yet:

- [ ] **NMO screenshots** — `src/assets/nmo/*.svg` are generated placeholders.
      Replace via `src/utils/nmoData.js` (see `src/assets/nmo/README.md`).
- [ ] **Testimonials** — none are hard-coded (`src/utils/testimonialsData.js`
      is empty by design). Add real quotes there; the section only renders
      once you do.
- [ ] **Loom walkthrough link** — placeholder URL in `src/utils/config.js`
      (`links.loom`).
- [ ] **Booking link** — placeholder URL in `src/utils/config.js`
      (`links.booking`). Optionally set `links.bookingEmbed` to render a
      live embedded calendar instead of a button.
- [ ] **Personal photo** — About section currently shows a labeled
      placeholder panel (`src/assets/about/README.md` has swap instructions).
- [ ] **Social links & email** — `src/utils/config.js` (`links.social`, `links.email`).
- [ ] **OG image** — add `public/og-image.jpg` (1200×630) for link previews.

Everything else — copy, layout, motion — is finished.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Editing content

Almost everything you'd want to change day-to-day lives in three files:

| File | Controls |
|---|---|
| `src/utils/config.js` | Site name, tagline, all links (booking, Loom, email, social), nav items |
| `src/utils/nmoData.js` | The NMO case study — summary, tech stack tags, and every gallery image/label |
| `src/utils/testimonialsData.js` | Testimonial quotes (empty until you add real ones) |

Section copy that isn't data-driven (headlines, the problem/solution text,
the About bio) lives directly in each file under `src/sections/`, in plain
JSX — no template syntax to fight with.

## Project structure

```
src/
├── assets/           # images, organized by section — see each folder's README.md
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── ui/           # Button, Tag, RevealOnScroll, PlaceholderImage — shared primitives
│   └── hero/         # The 3D hero scene + its mobile/fallback twin
├── hooks/            # useMediaQuery, useScrollReveal, usePointerParallax
├── sections/         # One file per homepage section, each with its own .css
├── utils/            # config.js, nmoData.js, testimonialsData.js
├── App.jsx           # Section order lives here
├── main.jsx
└── index.css         # Design tokens (colors, type, spacing) + global reset
```

Each section is self-contained: its `.jsx` and `.css` live side by side, and
every section can be reordered, removed, or reused independently by editing
`App.jsx`.

## The hero visual

The hero object is a hang tag rather than a literal 3D hoodie — it's the one
physical object that touches every SKU that ships (hoodie, tee, or hat),
which kept the render honest without needing a licensed 3D garment asset.

- **Desktop:** a real WebGL scene (`src/components/hero/HeroScene.jsx`,
  built with react-three-fiber + drei) — procedural studio lighting, no
  external HDRI files to keep it self-contained and fast.
- **Mobile & fallback:** a matching CSS/SVG version
  (`HeroVisualFallback.jsx`) — same silhouette and accent thread loop, kept
  off WebGL to protect battery and scroll performance on phones, and shown
  automatically if a device can't create a WebGL context or has
  "reduce motion" enabled at the OS level.

The 3D bundle (`three`, `@react-three/fiber`, `@react-three/drei`) is
code-split and lazy-loaded — mobile visitors never download it.

## Design system

- **Color:** near-black graphite ground, warm bone/ivory type, one accent —
  a muted "raw indigo" (denim-inspired) used sparingly for links, the active
  gallery state, and small proof tags.
- **Type:** Fraunces (display serif) for headlines, Manrope (body), IBM Plex
  Mono for the small structural tags (`Tag.jsx`) used as reference codes
  throughout — the recurring motif tying the hero object, the NMO gallery
  labels, and the credibility strip together.
- **Motion:** scroll reveals via `RevealOnScroll.jsx` (Framer Motion,
  fires once, respects `prefers-reduced-motion`), plus the hero's idle float
  and pointer parallax.

All tokens (colors, fonts, spacing, radii, easing) are CSS custom properties
in `src/index.css` — change a value once, it updates everywhere.

## Deploying to Netlify

`netlify.toml` is already configured (build command, publish directory,
SPA redirect). Connect the repo in Netlify and it will build with no
further setup, or drag-and-drop the `dist/` folder after `npm run build`
for a one-off deploy.

## Browser support

Targets current evergreen browsers (Chrome, Safari, Firefox, Edge). The 3D
hero degrades gracefully — no WebGL, no problem, the fallback visual takes
over automatically.
