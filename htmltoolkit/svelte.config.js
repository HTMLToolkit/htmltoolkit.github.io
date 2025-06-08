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
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html'
    }),

    // 2) No base path since htmltoolkit.github.io is root
    paths: {
      base: ''
    },

    // 3) prerender all routes
    prerender: {
      crawl: true,
      entries: ['*']
    }
  }
};

export default config;
