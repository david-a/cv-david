/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        serif: ["Domine", ...defaultTheme.fontFamily.serif],
        mono: ["Roboto Mono", "monospace"],
        display: [
          "Secular One",
          "Arial Black",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      colors: {
        blue: "#00c1ff",
        "blue-light": "#ddf7ff",
        yellow: "#fecc1b",
        red: "#cc0025",
        "red-light": "#e06c75",
        gray: "#8492a6",
        "gray-light": "#5b6371",
        dark: "#272c35",
        green: "#699655",
        purple: "#d371e3",
      },
    },
  },
  plugins: [],
};
