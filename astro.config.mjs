// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Change these when the custom domain is live.
const PROD_DOMAIN = "https://soloceo.github.io";
const BASE_PATH = "/fbw-web";

export default defineConfig({
  site: PROD_DOMAIN,
  base: BASE_PATH,
  trailingSlash: "ignore",
  output: "static",

  integrations: [mdx(), sitemap()],

  vite: {
    // Cast: @tailwindcss/vite bundles its own Vite, which triggers a
    // structural type mismatch against Astro's Vite. Runtime is fine.
    plugins: [/** @type {any} */ (tailwindcss())],
  },

  image: {
    responsiveStyles: true,
  },

  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },
});
