/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'uablue': {
          'main': '0057B7',
          'hover': '0057B7'
                },
        'uayellow': {
         'main':  'FFDD00',
         'hover': 'FFDD00'
        }

      },
    },

  },
  plugins: [
    require('flowbite-typography'),
  ],
}
