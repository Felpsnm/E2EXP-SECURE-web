import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false
    }),
    // Optional: specify base path if your app is not served from the root
    // paths: {
    //   base: '/your-base-path'
    // }
  },
  preprocess: vitePreprocess()
};

export default config;