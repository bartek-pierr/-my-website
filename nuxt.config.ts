export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/abstracts/_variables.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: 'Bartek Pierr.',
      meta: [
        { name: 'description', content: 'Creative developer specialized in beautiful/crazy creative sh*t.' },
        { name: 'author', content: 'Bartek Pierr' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    },
  },
})