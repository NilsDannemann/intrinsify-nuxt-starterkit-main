// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#FFCD0C',
        },
        fontFamily: {
          sans: ['Barlow', 'sans-serif'],
        },
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
      ],
  }