// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C3DE8",
        secondary: "#2DBFA0",
        bg: "#0D0D1A",
        card: "#1A1A2E",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        arabic: ["'Cairo'", "sans-serif"],
      },
    },
  },
  plugins: [],
};