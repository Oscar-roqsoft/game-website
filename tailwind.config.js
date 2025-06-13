/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
      "./src/**/*.{html,vue,js}",
    ],
    theme: {
      extend: {
        colors: {
          black: '#000000',
          white: '#ffffff',
          darkest: '#101010',
          darker: '#16171a',
          dark: '#a3afbf',
          medium: '#dfe7ef',
          light: '#cad4e1',
          lighter: '#f5f8fc',
          lightest: '#ffffff',
          primary: '#7b16ff',
          'primary-light': '#ddd9ff',
          'primary-trans': 'rgba(123, 22, 255, 0.4)',
          yellow: '#fdcb6e',
          orange: '#e17055',
          teal: '#00cec9',
        },
      },
    },
    plugins: [],
  }