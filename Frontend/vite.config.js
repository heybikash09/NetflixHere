import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ENV_VARS } from '../Backend/config/envVars'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
     '/api/v1': {
        target: `https://localhost:${ENV_VARS.PORT}`, // Replace with your backend server
        changeOrigin: true,
      },
    }
  },
})
