const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        'demo-sm': '720px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              'scroll-margin-top': defaultTheme.spacing[24],
            },
            'h3,h4': {
              'scroll-margin-top': defaultTheme.spacing[20],
            },
          },
        },
        dark: {
          css: {},
        },
      }),
      variants: {
        typography: ['dark'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
