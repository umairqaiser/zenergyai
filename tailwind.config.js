/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
        cabinet: ["CabinetGrotesk"],
        inter: ["Inter"],
        playfair: ["Playfair Display"],
      },
      colors: {
        neutral: {
          50: "#F6F5F5",
          100: "#E8E6E7",
          200: "#D1CDCF",
          400: "#8C868A",
          500: "#6A6468",
          600: "#4F494C",
          700: "#3B3538",
          800: "#2A2426",
          900: "#231F20",
          950: "#141112",
        },
      },
    },
  },
  plugins: [],
}
