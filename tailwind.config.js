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
        primary: '#3762D8',
        secondary: '#ED373C',
        'dark-blue': '#0F1E31',
        'blue-light': '#34BDFB',
        'dark-red': '#B0070C',
        yellow: '#F7CA2E',
        info: '#2F80ED',
        success: '#27AE60',
        warning: '#E2B93B',
        error: '#EB5757',
        'black-1': '#000000',
        'black-2': '#1D1D1D',
        'black-3': '#282828',
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'gray-4': '#BDBDBD',
        'gray-5': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
