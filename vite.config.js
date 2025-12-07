import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/My_React/',   // <-- important!
  server: {
    host: true,
  },  
})
