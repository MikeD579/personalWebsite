// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/dark.css'
  ],

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "vue3-carousel-nuxt"
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

  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
})