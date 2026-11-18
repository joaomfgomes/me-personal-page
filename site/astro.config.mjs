// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Domínio público. Usado no RSS, no sitemap, no llms.txt e nas URLs canónicas.
  site: 'https://joaomiguelgomes.com',
  integrations: [sitemap()],
});
