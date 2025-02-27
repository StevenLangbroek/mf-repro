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
        './HelloWorld': './src/components/HelloWorld.tsx',
        './routes': './src/routes/index.tsx',
      },
      shared: ['react', 'react-dom', '@tanstack/react-router'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
});