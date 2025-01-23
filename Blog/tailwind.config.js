/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bcgNavbar:"#4376bb",
        textNavbar:"#09408b",
        linhaNavbar:"#c7c5c5",
        fundoBody:"#d9d9d9"
      },
      fontFamily:{
        rufina: ['Rufina', 'sans-serif'],
        opens: ['Open Sans', 'sans-serif']

      }
    },
  },
  plugins: [],
}