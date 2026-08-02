// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain via Cloudflare Pages. No `base` needed since a custom
  // domain serves from the root.
  site: 'https://www.humansofpsg.com',
  integrations: [sitemap()],
});
