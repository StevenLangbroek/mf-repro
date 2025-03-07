import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'hello-world',
      manifest: true,
      exposes: {
        './routes': './src/routes/index.tsx',
        './navigation': './src/navigation.ts',
      },
      shared: ['react', 'react-dom', '@tanstack/react-router'],
      getPublicPath: `function() { return "http://localhost:4174/" }`,
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
  },
});