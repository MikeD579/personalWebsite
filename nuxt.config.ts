// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg", href: "/cross.svg" }
      ]
    }
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/media.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt",
    "nuxt-viewport"
  ],

  googleFonts: {
    families: {
      'Space Mono': {
        wght: [400, 700]
      },
      'Tangerine': {
        wght: [400]
      },
    }
  },

})