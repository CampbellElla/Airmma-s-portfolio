import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Note: path aliases are intentionally left out to keep
  // the config compatible with TS moduleResolution: "bundler"
  // without extra plugin dependencies.
})
