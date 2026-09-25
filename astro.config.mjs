// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { isBatimatLive } from './src/lib/batimat.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://solutionechafaudages87.fr',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // Après le salon, /salon-batimat-2026/ n'est plus qu'une redirection : on la retire du sitemap.
      filter: (page) => isBatimatLive() || !page.includes('/salon-batimat-2026/'),
    }),
  ]
});