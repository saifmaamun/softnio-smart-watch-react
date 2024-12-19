module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      colors: {

        'primary-color': '#6576FF',
        'secondary-color': '#f0f0f0',
        'text-color': '#364A63',
        'light-text-color': '#8091A7',
        'border-color': '#DBDFEA',
        'checkout-color': '#FFBB5A',
      },
    },
  },
  plugins: [],
}