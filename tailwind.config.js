const colors = require("tailwindcss/colors");

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
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: colors.blue,
      },
      fontSize: {
        "7xl": "5rem",
        md: "1.125rem",
      },
      fontFamily: {
        inter: "inter",
        alegreya: "alegreya",
        roboto: "roboto",
        lato: "lato",
        raleway: "raleway",
        "Josefin+Sans": "Josefin Sans",
        "league-spartan": "League Spartan",
      },
    },
  },
  plugins: [],
};
