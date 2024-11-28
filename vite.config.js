import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
   // Lägg till detta för att använda rätt base path för GitHub Pages
})
