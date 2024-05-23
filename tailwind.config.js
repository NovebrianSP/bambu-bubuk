/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        limegreen: '#82CD47',
        darkteal: '#379237',
        forestgreen: '#54B435',
        lemonyellow: '#C4FF9A',
        darkolivegreen: '#395144',
        sienna: '#AA8B56',
        darkchocholate: '#443822'
      }
    },
  },
  plugins: [],
}