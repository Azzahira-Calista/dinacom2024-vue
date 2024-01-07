/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'leaf1-pattern': "url('@/assets/image/leaf_bg1.svg')"
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#E88A1B',
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

