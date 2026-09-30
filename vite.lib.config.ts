import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const external = /^(react|react-dom|styled-components|recharts)(\/.*)?$/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    copyPublicDir: false,
    sourcemap: true,
    lib: {
      entry: resolve(import.meta.dirname, 'src/lib/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'remiho-klubik-cyber-components.js' : 'remiho-klubik-cyber-components.cjs'),
    },
    rolldownOptions: {
      external: (id) => external.test(id),
    },
  },
})