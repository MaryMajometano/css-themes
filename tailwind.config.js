const defaultTheme = require('tailwindcss/defaultTheme');

function customColor(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

function customRadius(value) {
  return `var(${value})`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        transparent: 'transparent',
        currentColor: 'currentColor',
        inherit: 'inherit',
    },
    borderRadius: {
      DEFAULT: customRadius('--border-radius'),
      sm: customRadius('--border-radius-sm'),
      md: customRadius('--border-radius-md'),
      lg: customRadius('--border-radius-lg'),
      xl: customRadius('--border-radius-xl'),
      full: customRadius('--border-radius-full'),
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
      textColor: {
        skin: {
          'primary': customColor('--text-primary'),
          'secondary': customColor('--text-secondary'),
          'button-primary': customColor('--button-primary-text'),
          'button-primary-hover': customColor('--button-primary-text-hover'),
          'button-secondary': customColor('--button-secondary-text'),
          'button-secondary-hover': customColor('--button-secondary-text-hover'),
        },
      },
      backgroundColor: {
        skin: {
            fill: customColor('--background'),
            'button-primary': customColor('--button-primary-bg'),
            'button-primary-hover': customColor('--button-primary-bg-hover'),
            'button-secondary': customColor('--button-secondary-bg'),
            'button-secondary-hover': customColor('--button-secondary-bg-hover'),
        },
      },
      borderColor: {
        skin: {
            DEFAULT: customColor('--border'),
        },
      },
      boxShadowColor: {
        skin: {
            DEFAULT: customColor('--shadow'),
        }
      },
    },
  },
  plugins: [],
}
