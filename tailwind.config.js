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
          light: colors.teal[200], // Light variant
          dark: colors.teal[700], // Dark variant
        },
        secondary: {
          light: colors.cyan[200], // Light variant
          dark: colors.cyan[700], // Dark variant
        },
        teritary: {
          light: colors.sky[200],
          dark: colors.sky[400],
        },
        quaternary: {
          light: colors.white,
          dark: "#37656d",
        },
        accent: {
          light: "#fbcfe8", // Light variant
          DEFAULT: "#ec4899", // Main color
          dark: "#9d174d", // Dark variant
        },
        background: {
          light: colors.slate[200], // Light variant
          dark: colors.slate[400], // Dark variant
        },
        text: {
          light: "#2d464c", // Light variant
          dark: "#37656d", // Dark variant
        },
      },
    },
  },
  plugins: [],
};
