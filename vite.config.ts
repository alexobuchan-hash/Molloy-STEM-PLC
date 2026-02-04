import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the critical fix for GitHub Pages
  // It ensures the browser looks for files in /Molloy-STEM-PLC/
  base: '/Molloy-STEM-PLC/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
