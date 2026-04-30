import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Angel",
        short_name: "Angel",
        description: "An App For a Angel",
        theme_color: "pink",
        icons: [
          {
            src: "/icons/icon256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/icon512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        // runtimeCaching: [
          // {
            // urlPattern: /^https:\/\/api\./,
            // handler: "NetworkFirst",
            // options: {
              // cacheName: "api-cache",
              // expiration:{
                // maxEntries:90,
                // maxAgeSeconds:60*60*60 //One Day
              // }
            // },
          // },
        // ],
      },
    }),
  ],
  server: {
    allowedHosts: ["angel.alpha001.online"],
  },
});


