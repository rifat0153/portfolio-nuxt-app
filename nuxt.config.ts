// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    typedPages: true,
  },

  app: {
    pageTransition: {
      name: "fade", // default
      mode: "out-in", // default
    },
    layoutTransition: {
      name: "layout", // default
      mode: "out-in", // default
    },
  },

  runtimeConfig: {
    public: {
      cvLink: "",
    },
  },

  pages: true,

  components: true,

  modules: [
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],

  colorMode: { classSuffix: "" },

  css: ["~/assets/css/main.css"],

  imports: {
    dirs: ["./stores"],
  },

  googleFonts: {
    families: {
      Roboto: true,
      Alegreya: true,
      Inter: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      LeagueSpartan: true,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
