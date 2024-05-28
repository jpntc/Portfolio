/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.emerald[200], // Light variant
          dark: colors.emerald[700], // Dark variant
        },
        secondary: {
          light: colors.cyan[200], // Light variant
          dark: colors.cyan[700], // Dark variant
        },
        teritary: {
          light: colors.sky[200],
          dark: colors.sky[700],
        },
        accent: {
          light: "#fbcfe8", // Light variant
          DEFAULT: "#ec4899", // Main color
          dark: "#9d174d", // Dark variant
        },
        background: {
          light: colors.slate[200], // Light variant
          dark: colors.slate[700], // Dark variant
        },
        text: {
          light: colors.gray[400], // Light variant
          dark: colors.gray[900], // Dark variant
        },
      },
    },
  },
  plugins: [],
};
