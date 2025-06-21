import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to a subdirectory, set the base option:
  // base: '/your-subdirectory/',
});