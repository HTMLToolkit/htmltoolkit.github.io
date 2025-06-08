import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

const config = {
  extensions: ['.svelte', '.svx', '.md'],

  preprocess: [
    vitePreprocess({
      postcss: true,
      typescript: true,
    }),
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],

  kit: {
    adapter: adapter({
      fallback: '200.html'  // Add fallback here
    }),
    paths: {
      base: ''
    },
    prerender: {
      crawl: true,
      entries: ['*']
    }
  }
};

export default config;
