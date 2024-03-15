// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: "cloudflare-pages"
  },

  modules: ["nitro-cloudflare-dev", "@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      'Space Mono': true,
      'Tangerine': true,
    }
  },
})