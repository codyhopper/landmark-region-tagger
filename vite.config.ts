import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './ui',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './ui/index.html',
    },
  },
});
