const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{html,hbs}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        // Simple 16 column grid

        // Complex site-specific column configuration
        summary: 'repeat(2, 100px)',
      },
    },
  },
  plugins: [],
};
