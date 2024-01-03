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
      // fontSize: {
      //   'xs': '.75rem',   // Extra Small
      //   'sm': '.875rem',  // Small
      //   'base': '1rem',   // Base/Normal
      //   'lg': '1.125rem', // Large
      //   'xl': '1.25rem',  // Extra Large
      //   '2xl': '1.5rem',  // 2x Large
      //   '3xl': '1.875rem', // 3x Large
      // },
    },
  },
  plugins: [],
}

