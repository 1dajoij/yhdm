import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactSvgPlugin from "vite-plugin-react-svg";
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
    reactSvgPlugin(),
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
        target: "http://43.142.96.61/",
        changeOrigin: true
      }
    }
  }
})
