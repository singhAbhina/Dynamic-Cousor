import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // Output directory for Render
    chunkSizeWarningLimit: 2000
  }
});
