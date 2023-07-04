const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        logo_main : '#F0B90B',
        primary_main : 'rgb(22, 26, 30)',
        secondary_main : 'rgb(252, 213, 53)',
        background : 'rgb(22, 26, 30)',
        paper : 'rgb(30, 32, 38)',
        text_primary: '#EAECEF',
        text_secondary: 'rgb(183, 189, 198)',
        text_disabled: 'rgba(249,246,246,0.38)',
        text_tertiary: '#848E9C',
        error_main: 'rgb(246, 70, 93)',
        success_main: 'rgb(14, 203, 129)',
        divider: '#3a3b3f',
      },
      fontFamily: {
        sans: [
          "IBM Plex Sans",
          "Roboto",
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
  },
  plugins: [],
}
