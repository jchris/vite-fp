import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["fs/promises"],
    },
  },
  plugins: [react(), nodePolyfills({
    // polyfill: ['fs','fs/promises']
    // globals : {
    //   fs: true
    // }
  })],
})

