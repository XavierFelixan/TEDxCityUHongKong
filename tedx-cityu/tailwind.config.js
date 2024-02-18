/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headerfont: ["Short Stack", "sans-serif"],
        subheaderfont: ["Sniglet", "sans-serif"],
        subheader2font: ["Urbanist", "sans-serif"],
        textfont: ["Poppins", "sans-serif"],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        red: "#EB0028", 
        magenta: "#740001",
        yellow: "#FCBA2E",
        cream: "#EBEDAC",
        offwhite: "#FFFFF3",
        gray: "#A1A1A1",
      },
    },
  },
  plugins: [],
}

