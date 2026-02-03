import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'replace-placeholders',
      transformIndexHtml(html) {
        // In dev mode, replace placeholders with dev values
        if (process.env.NODE_ENV !== 'production') {
          return html
            .replace(/__SHOW_CHANGELOG__/g, 'false')
            .replace(/__CHANGELOG_HTML__/g, '"This will be replaced with a Python template variable in the dist folder. <ul><li>This is a test</li><li>This is a test</li><li>This is a test</li></ul>"');
        }
        return html;
      }
    }
  ],
  build: {
    cssMinify: false,
    rollupOptions: {
        output: {
            dir: './dist',
            entryFileNames: 'appeal.js',
            assetFileNames: 'appeal.css',
        }
    }
  }
})
