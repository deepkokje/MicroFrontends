import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:'Remote',
      filename:'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.jsx'
      },
      remotes: {
        store:'http://localhost:4173/assets/remoteEntry.js'
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
