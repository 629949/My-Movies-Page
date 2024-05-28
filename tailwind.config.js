/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'Action': "url('/img/Godzilla X Kong.jpg')",
        'Comedy': "url('/img/footer-texture.png')",
        'Animation': "url('/img/footer-texture.png')",
        'Romance': "url('/img/footer-texture.png')",
        'Horror': "url('/img/footer-texture.png')",
      }
    },
  },

  variants: {
    scrollBehavior: ['responsive'],
  },
  plugins: [],
}

