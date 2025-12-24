/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
        jakarta: ["Plus Jakarta Sans"],
        cabinet: ["CabinetGrotesk"],
        inter: ["Inter"],
        playfair: ["Playfair Display"],
    },
  },
  plugins: [],
}
