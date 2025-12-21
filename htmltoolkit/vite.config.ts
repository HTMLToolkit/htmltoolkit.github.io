import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [
    // 1) Tailwind via Vite plugin
    tailwindcss(),
    // 2) SvelteKit
    sveltekit()
  ],
  publicDir: "./public",
  server: {
    allowedHosts: true
  }
});
