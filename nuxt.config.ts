import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: {},
  experimental: { typedPages: true },
  components: true,
  pages: true,
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
});
