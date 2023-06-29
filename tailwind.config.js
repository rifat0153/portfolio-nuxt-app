/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
        md: "1.125rem",
      },
      fontFamily: {
        roboto: "roboto",
        lato: "lato",
        raleway: "raleway",
        "Josefin+Sans": "Josefin Sans",
      },
    },
  },
  plugins: [],
};
