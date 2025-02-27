import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    federation({
      name: 'host',
      remotes: {
        'hello-world': {
          name: 'hello-world',
          type: 'module',
          entry: 'http://localhost:4173/assets/remoteEntry-D0hsAXHw.js',
        }
      },
      shared: ['react', 'react-dom', '@tanstack/react-query']
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});