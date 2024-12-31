/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: false,
  theme: {
    fontFamily: { handwritten: ['Tangerine', 'serif'] },
    colors: {
      white: {
        DEFAULT: '#fff',
        dark: '#efefef',
        darkest: '#c4c4c4',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        DEFAULT: '#111118',
        light: '#242430',
        lightest: '#303440',
      },
      grey: {
        DEFAULT: '#9d9d9c',
      },
      error: {
        DEFAULT: '#881A1A',
      },
      warning: {
        DEFAULT: '#FFC43D',
      },
      primary: {
        DEFAULT: '#1D9DD9',
        light: '#009fe3',
      },
      secondary: {
        DEFAULT: '#9d9d9c',
      },
      success: {
        DEFAULT: '#01700C',
      },
    },
    screens: {
      sm: '641px',
      // => @media (min-width: 640px) { ... }

      md: '769px',
      // => @media (min-width: 768px) { ... }

      lg: '1025px',
      // => @media (min-width: 1024px) { ... }

      xl: '1281px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1537px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
