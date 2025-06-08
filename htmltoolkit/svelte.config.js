import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const config = {
  // still allow Svelte files, but mdsvex won't touch .svelte
  extensions: ['.svelte', '.svx', '.md'],

  preprocess: [
    vitePreprocess({
      postcss: true,
      typescript: true,
    }),
    // only process .svx and .md with mdsvex
    mdsvex({
      extensions: ['.svx', '.md']
    })
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve('./src/lib')
    }
  }
};

export default config;
