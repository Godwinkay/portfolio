/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple": "#0f0547",
        "white": "#e8e8e8",
        "lightblue": "#02fafa"
      },
      fontFamily: {
        "lilita" : ["Lilita One", "sans-serif"],
        "name" : ["Merriweather", "cursive"]
      }
    },
  },
  plugins: [],
}