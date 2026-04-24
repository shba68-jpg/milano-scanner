import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Deployed at https://shba68-jpg.github.io/milano-scanner/ (GitHub Pages subpath).
// Set VITE_BASE=/ for custom domains / Vercel / Netlify.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/milano-scanner/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
