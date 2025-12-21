import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const dev = process.env.NODE_ENV === 'development';

const config = {
  extensions: ['.svelte', '.svx', '.md'],

  preprocess: [
    vitePreprocess({ postcss: true, typescript: true }),
    mdsvex({ extensions: ['.svx', '.md'] })
  ],

  kit: {
    // 1) adapter-static writes out build/index.html and build/200.html
    adapter: adapter(),

    // 2) No base path since htmltoolkit.github.io is root
    paths: {
      base: ''
    },

    // 3) prerender all routes
    prerender: {
      handleHttpError: 'warn', // Prevent errors due to redirects/HTTP issues
      crawl: true, // Detect all internal routes automatically
      entries: ['*'] // '*' includes all routes (including wildcard, dynamic routes)
    }
  }
};

export default config;
