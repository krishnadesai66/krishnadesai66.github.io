import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    base: 'https://krishnadesai66.github.io',
    open: true, 
  },
  build: {
    outDir: 'dist', 
  },
});
