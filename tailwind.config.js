/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#FF8551',
        secondary: '#669940',
        bgColor: '#FAFCFA'

      },
     
    },
  },
  plugins: [],
}

