/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#DEEEF7",
        primary: "#55887c",
        secondary: "#A19D8D",
        third: "#4C4C4C",
      },
    },
  },
  plugins: [],
};
