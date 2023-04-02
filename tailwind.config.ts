import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'var(--dark-blue)',
        vdarkBlue: 'var(--v-dark-blue)',
        lightModeText: 'var(--light-mode-text)',
        darkGray: 'var(--dark-gray)',
        vlightGray: 'var(--v-light-gray)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
} satisfies Config
