export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    tsConfig: {
      include: ['./types/**/*.d.ts'],
    },
  },
})
