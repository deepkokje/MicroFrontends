import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:'Header',
      filename:'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.jsx'
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    target: "ES2022",
    cssCodeSplit: false,
    modulePreload: false
  },
})
