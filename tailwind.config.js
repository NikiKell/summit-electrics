/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '480px',
      lg: '1152px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        primary: ['Inter']
      },
      colors: {
        primary: {
          50: '#EFF6FF',
          500: '#3B81F6',
          600: '#2563EB',
        },
      },
    },
  },
  plugins: [],
}

