import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  alias: {
    '@/': './src/',
  },

  integrations: [react()],

  site: 'https://JavierGR10.github.io',
  // base: '/micrositios/',
});
