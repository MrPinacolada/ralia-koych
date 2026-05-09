// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
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
      title: 'Раля Говорит — коуч по устойчивому росту, ACC ICF',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#F8F4EC' },
        {
          name: 'description',
          content:
            'Помогаю специалистам и предпринимателям в период карьерных и жизненных перемен устойчиво двигаться к своим целям без самосаботажа и парализующего внутреннего критика.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:title', content: 'Раля Говорит — коуч по устойчивому росту, ACC ICF' },
        {
          property: 'og:description',
          content:
            'Помогаю специалистам и предпринимателям устойчиво двигаться к своим целям. Бесплатная диагностическая сессия.',
        },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
