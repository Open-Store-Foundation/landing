import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        download: resolve(__dirname, 'download.html')
      }
    }
  },
  server: {
    allowedHosts: [],
    proxy: {
      '/release': {
        target: 'https://assets.openstore.foundation',
        changeOrigin: true,
      }
    },
  }
}) 