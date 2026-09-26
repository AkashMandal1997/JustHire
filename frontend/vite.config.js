import path from "path"
import { fileURLToPath } from "url"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined;
          }

          if (/[\\/]react(?:-dom)?[\\/]|[\\/]scheduler[\\/]/.test(id)) {
            return "react-vendor";
          }
          if (/[\\/]@reduxjs[\\/]|[\\/]react-redux[\\/]|[\\/]redux/.test(id)) {
            return "state-vendor";
          }
          if (/[\\/]@radix-ui[\\/]|[\\/]lucide-react[\\/]|[\\/]embla-carousel/.test(id)) {
            return "ui-vendor";
          }
          if (/[\\/]framer-motion[\\/]/.test(id)) {
            return "motion-vendor";
          }

          return undefined;
        },
      },
    },
  },
})
