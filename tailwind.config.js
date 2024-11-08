/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
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
