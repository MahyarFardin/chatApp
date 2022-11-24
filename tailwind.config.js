/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,js}"],
  theme: {
    extend: {
      colors:{
        "black":"#0D1C2E",
        "lblue":"#7CB8F7",
        "blue":"#2A8BF2",
        "pink" :"#FF3366",
        "gray":"#707C97",
        "sky-light":"#E6ECFE"
      }
    },
  },
  plugins: [],
}
