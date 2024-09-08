export default defineNuxtConfig({
  sourcemap: {
    server: false,
    client: true,
  },
  devtools: {
    enabled: true,
  },
  css: ['@/assets/scss/app.scss'],
  modules: [
    '@nuxt/icon'
  ],
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons'
      },
    ],
  },
  compatibilityDate: "2024-09-06",
})