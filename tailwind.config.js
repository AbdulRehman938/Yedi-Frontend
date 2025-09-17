/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px", // Mobile-Small
      sm: "640px", // Mobile-Large
      md: "768px", // Tablet
      lg: "1024px", // Laptop
      xl: "1280px", // Laptop-Large
      "2xl": "1440px",  // default
      "3xl": "1536px"
    },
    extend: {
      colors: {
        background: "#DEEEF7",
        primary: "#55887c",
        secondary: "#efece9",
        third: "#4C4C4C",
      },
    },
  },
  plugins: [],
};
