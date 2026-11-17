# Suilnk website (local project)

Static site: plain HTML, CSS and JavaScript. No build step, no dependencies, no animation libraries.

## Run locally
Open `index.html` in a browser, or serve the folder (`npx serve`, or the VS Code Live Server extension).

## Structure
- `index.html`: the seven sections (hero, creative approach, how it works with the platform strip, ongoing management, selected work, pricing and FAQ, contact)
- `css/styles.css`: tokens (colours, fonts) at the top, then each section, motion, and the approved-revision layer at the bottom with the responsive rules (1000px and 700px breakpoints)
- `js/main.js`: nav and mobile menu, line-by-line headline reveals, scroll-brightened paragraphs, hero parallax, mockup hover drift, ownership journey, concept carousel
- `assets/img/`: optimized WebP images (only the ones the site uses)
- `assets/logos/`: official logo files you supplied. Full logos feed the "Tools I work with" strip. The `*-icon.svg` files are favicon-style marks for the hero badges: the Shopify and Printful icons are the icon portions cropped from your official files (viewBox only, no redrawing), and `printify-icon.svg` is Printify's shorthand mark.
- `assets/favicon.svg`: simple placeholder favicon (replace when you have a Suilnk mark)

## Notes
1. **Journey:** one state machine (nodes A to G) drives both layouts. Desktop shows seven nodes. Mobile shows six stage segments where stage 6 covers collaborator access (F) and launch/management (G). Captions are identical.
2. **Selected work:** Next Move Only homepage and product page, then "Behind the store" with the three Shopify/Printful screenshots (account details are blurred in the web copies), then Concept Collections.
3. **Email:** every "Start a conversation" uses `hi@suilnk.com` (from the old copy).
4. **Fonts:** loaded from Google Fonts (Instrument Serif, Inter). Self-host them if you prefer.
5. **Brand rules:** check Shopify, Printful, Printify and Krita logo usage guidelines before launch.
6. **SEO:** canonical, Open Graph and JSON-LD point at `https://suilnk.com/` (text only, nothing is deployed).
7. **Motion:** `prefers-reduced-motion` turns off CSS and SVG animation, and headlines and paragraphs show immediately.

Nothing here is deployed, pushed, or tied to Netlify or your domain.
