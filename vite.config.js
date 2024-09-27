import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    '__API_URL__': JSON.stringify('http://localhost:3000'),
    '__DEV_MODE__':JSON.stringify('false'),
  }
})
