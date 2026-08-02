// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain via GitHub Pages — see public/CNAME. No `base` needed since
  // a custom domain serves from the root, unlike a
  // tech-itrace.github.io/humansofpsg/ project-page path.
  site: 'https://www.psgians.org',
  integrations: [sitemap()],
});
