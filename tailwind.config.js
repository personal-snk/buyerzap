/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './common/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {      
    colors: {
      'theme-blue': '#00037C',
    },},
  },
  plugins: [],
}