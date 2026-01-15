import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo-pwa.png', 'pwa-192x192.png', 'pwa-512x512.png'],
      manifest: {
        name: 'SmartJCP - Ciudad del Aprendizaje',
        short_name: 'SmartJCP',
        description: 'Plataforma educativa de José C. Paz Ciudad del Aprendizaje Intendente Mario Alberto Ishii',
        theme_color: '#1a1a1a',
        background_color: '#1a1a1a',
        display: 'standalone',
        scope: '/smartjcp/',
        start_url: '/smartjcp/',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/api'), // Don't cache API by default or use networkFirst
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 300
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  base: '/smartjcp/',
})
