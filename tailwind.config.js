const defaultTheme = require('tailwindcss/defaultTheme');

function customColor(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

function variable(value) {
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
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
        serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        skin: variable('--border-radius'),
        button: variable('--button-border-radius'),
      },
      borderWidth: {
        'skin-width': variable('--border-width'),
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
        'skin-color': {
            DEFAULT: customColor('--border-color'),
        },
      },
    },
  },
  plugins: [],
}
