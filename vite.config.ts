import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { presetWind } from "unocss"
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetWind()
      ]
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "*": resolve("")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/constant.scss";`
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true
      }
    }
  }
})
