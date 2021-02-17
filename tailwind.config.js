module.exports = {
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    options: {
      safelist: ['border-red-300', 'border-yellow-300', 'border-blue-300'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Nunito', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
