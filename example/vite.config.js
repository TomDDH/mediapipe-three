import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      'mediapipe-three': resolve(__dirname, '../src/index.ts'),
    },
  },
})
