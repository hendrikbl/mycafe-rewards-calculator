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
      safelist: [
        'border-red-300',
        'border-red-500',
        'border-yellow-300',
        'border-yellow-500',
        'border-blue-300',
        'border-blue-500',
        'border-purple-300',
        'border-purple-500',
        'border-green-500',
        'sm:grid-cols-1',
        'md:grid-cols-2',
        'lg:grid-cols-4',
        'xl:grid-cols-4',
      ],
    },
  },
  darkMode: 'class',
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
