/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        spacing: {
          88: '22rem',
        },
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        mytheme: {
          "primary": "#312e81",
          "secondary": "#a21caf",
          "accent": "#889aea",
          "neutral": "#1D2435",
          "base-100": "#1e2936",
          "info": "#608FF6",
          "success": "#1DE29D",
          "warning": "#A2750B",
          "error": "#FC371D",
        },
      },
    ],
  },
}
