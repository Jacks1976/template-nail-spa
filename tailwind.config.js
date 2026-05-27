/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nude: "#E8D5C4",
        blush: "#C9A99A",
        rose: "#B07D6E",
        cream: "#FAF6F1",
        espresso: "#2C1810",
        gold: "#C9A96E",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
