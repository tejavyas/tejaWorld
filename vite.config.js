import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: "/tejaworld/", // Ensures correct asset paths on GitHub Pages
  assetsInclude: ['**/*.glb', '**/*.gltf'],
});
