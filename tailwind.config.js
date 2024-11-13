/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "cream": "#f2e9e4",
        "teak": "#C9ADA7",
        "pearl": "#98685D",
        "iron": "#4A4E69",
        "cadet": "#22223B",
        "cool": "#11111D",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        lcd: "Libre Caslon Display",
      },
      minWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: ["@tailwindcss/line-clamp"],
};
