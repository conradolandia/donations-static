import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
        output: {
            dir: './dist',
            entryFileNames: 'assets/appeal.js',
            assetFileNames: 'assets/appeal.css',
        }
    }
  }
})
