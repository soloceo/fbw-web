# FBW LLP — Website

**Freedman · Benipal · Wu LLP** — a Greater Toronto law firm website, built as a clean, editorial, static Astro site.

## Stack

- [Astro 5](https://astro.build) — static output
- [Tailwind CSS v4](https://tailwindcss.com) via the `@tailwindcss/vite` plugin
- TypeScript (strict)
- Content Collections for people, practice areas, and insights (Markdown)
- SEO: automatic sitemap, `LegalService` / `Person` / `Article` JSON‑LD
- Deployed to [GitHub Pages](https://soloceo.github.io/fbw-web/) via GitHub Actions.
  Cloudflare migration planned once the `fbwlaw.ca` domain is live.

## Local development

```sh
npm install
npm run dev
```

Open <http://localhost:4321/fbw-web/>.

## Building

```sh
npm run build      # astro check + astro build → ./dist
npm run preview    # serve the built site locally
```

## Project structure

```
src/
├── assets/        Static assets processed by Vite
├── components/    Astro UI components
├── content/       Markdown content (people, practices, insights)
├── data/          Central firm configuration (firm.ts)
├── layouts/       Page layouts
├── pages/         Route entries
└── styles/        global.css — design tokens, Tailwind theme
public/
└── brand/         Client‑provided logos (SVG)
```

## Content editing

The non‑technical content of the site lives in `src/content/`:

- `people/*.md` — partner and staff biographies
- `practices/*.md` — practice area descriptions
- `insights/*.md` — articles and alerts

Each file has a YAML frontmatter block; the schema is defined in
[`src/content.config.ts`](./src/content.config.ts).

## Firm‑level info

Office addresses, phone numbers, the firm's name, and the main
navigation are all edited in a single file:
[`src/data/firm.ts`](./src/data/firm.ts).

## Deployment

On every push to `main`, GitHub Actions will:

1. Install dependencies and run `astro build`
2. Upload the resulting `dist/` folder as a GitHub Pages artifact
3. Publish to <https://soloceo.github.io/fbw-web/>

Enable GitHub Pages once from the repository settings:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Future — migrating to Cloudflare

When the site is ready to go live on `fbwlaw.ca`:

1. Add the `@astrojs/cloudflare` adapter and switch `output` to `"server"` or `"hybrid"` if SSR is needed for the contact form.
2. Change `site` and `base` in `astro.config.mjs` to the production domain
   and `/` respectively.
3. Connect the repository to Cloudflare Workers (preferred) or Cloudflare
   Pages, add the `fbwlaw.ca` domain, and set DNS.
