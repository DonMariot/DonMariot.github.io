import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://donmariot.github.io',
  output: 'static',
  integrations: [
    icon({
      local: false,
    }),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});