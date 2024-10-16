import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter(),
    // Optional: specify base path if your app is not served from the root
    // paths: {
    //   base: '/your-base-path'
    // }
  },
  preprocess: vitePreprocess()
};