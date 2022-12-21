/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const COLORS = require("./src/constants/colors");

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
      fontSize: {
        "2xs": [
          "0.5rem",
          {
            lineHeight: "0.75rem",
            letterSpacing: "-0.01em",
          },
        ],
      },
      dropShadow: {
        "3xl": "20px 35px 35px rgba(0, 0, 0, 0.25)",
      },
      colors: COLORS,
    },
  },
  plugins: [],
};
