import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://harishparam.com',
  integrations: [sitemap()],
  // If you deploy as a PROJECT site (username.github.io/<repo>/), uncomment:
  // base: '/<repo>/',
  // For a USER site (username.github.io) leave base commented out.
});
