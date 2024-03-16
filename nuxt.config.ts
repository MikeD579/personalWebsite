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
    "@nuxtjs/color-mode"
  ],

  googleFonts: {
    families: {
      'Space Mono': true,
      'Tangerine': true,
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
})