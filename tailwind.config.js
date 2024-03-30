/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      vinque: ["Vinque", "sans-serif"],
      yatra: ["Yatra One", "sans-serif"],
    },
    colors: {
      beige: "#b96504",
      light: "#fef3d9",
    },
    extend: {},
  },
  plugins: [],
};
