import { defineConfig } from 'cypress';
import customViteConfig from './vite.config';

export default defineConfig({
  e2e: {},

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
  },
});
