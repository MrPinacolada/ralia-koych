// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      'Cormorant Garamond': {
        wght: [400, 500, 600],
        ital: [300, 400, 500],
      },
      Onest: [400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
    download: true,
    inject: true,
  },

  image: {
    format: ['avif', 'webp', 'jpg'],
    quality: 85,
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      titleTemplate: '%s',
      // Title/description/OG/JSON-LD live in app.vue (single source of truth)
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#F4F0E7' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  nitro: {
    compressPublicAssets: true,
  },

  experimental: {
    payloadExtraction: true,
  },

  vite: {
    optimizeDeps: {
      include: ['vue'],
    },
  },
})
