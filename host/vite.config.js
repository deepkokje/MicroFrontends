import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'Host',
      filename: 'remoteEntry.js',
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {
        './store': './src/store'
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
