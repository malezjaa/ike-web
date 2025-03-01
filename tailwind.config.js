import { heroui } from "@heroui/theme";
const colors = require('tailwindcss/colors');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderLight: 'rgba(226,232,255,.1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            default: {
              50: '#f9f9f9',
              100: '#f0f0f1',
              200: '#e7e7e9',
              300: '#dedee0',
              400: '#d5d5d8',
              500: '#ccccd0',
              600: '#a8a8ac',
              700: '#858587',
              800: '#616163',
              900: '#3d3d3e',
              foreground: '#000',
              DEFAULT: '#ccccd0',
            },
            primary: {
              50: '#f9faf5',
              100: '#f0f2e7',
              200: '#e7ebd9',
              300: '#dee4ca',
              400: '#d5dcbc',
              500: '#ccd5ae',
              600: '#a8b090',
              700: '#858a71',
              800: '#616553',
              900: '#3d4034',
              foreground: '#000',
              DEFAULT: '#ccd5ae',
            },
            secondary: {
              50: '#f9faf3',
              100: '#f1f3e1',
              200: '#e9ecd0',
              300: '#e1e5be',
              400: '#d9dead',
              500: '#d1d79b',
              600: '#acb180',
              700: '#888c65',
              800: '#63664a',
              900: '#3f412f',
              foreground: '#000',
              DEFAULT: '#d1d79b',
            },
            success: {
              50: '#f6fcef',
              100: '#e9f7d9',
              200: '#dbf2c3',
              300: '#ceedac',
              400: '#c1e896',
              500: '#b4e380',
              600: '#95bb6a',
              700: '#759453',
              800: '#566c3d',
              900: '#364426',
              foreground: '#000',
              DEFAULT: '#b4e380',
            },
            warning: {
              50: '#fff9eb',
              100: '#fff2cf',
              200: '#ffeab3',
              300: '#ffe297',
              400: '#ffda7b',
              500: '#ffd25f',
              600: '#d2ad4e',
              700: '#a6893e',
              800: '#79642d',
              900: '#4d3f1d',
              foreground: '#000',
              DEFAULT: '#ffd25f',
            },
            danger: {
              50: '#f8dfe6',
              100: '#efb3c3',
              200: '#e586a0',
              300: '#db597c',
              400: '#d22d59',
              500: '#c80036',
              600: '#a5002d',
              700: '#820023',
              800: '#5f001a',
              900: '#3c0010',
              foreground: '#fff',
              DEFAULT: '#c80036',
            },
            background: '#fffefb',
            foreground: {
              50: '#dfdfdf',
              100: '#b3b3b3',
              200: '#868686',
              300: '#595959',
              400: '#2d2d2d',
              500: '#000000',
              600: '#000000',
              700: '#000000',
              800: '#000000',
              900: '#000000',
              foreground: '#fff',
              DEFAULT: '#000000',
            },
            content1: {
              DEFAULT: '#ffffff',
              foreground: '#000',
            },
            content2: {
              DEFAULT: '#f4f4f5',
              foreground: '#000',
            },
            content3: {
              DEFAULT: '#e4e4e7',
              foreground: '#000',
            },
            content4: {
              DEFAULT: '#d4d4d8',
              foreground: '#000',
            },
            focus: '#FAEDCE',
            overlay: '#000000',
            divider: '#111111',
          },
        },
        dark: {
          colors: {
            default: {
              50: '#161617',
              100: '#232324',
              200: '#2f2f31',
              300: '#3c3c3f',
              400: '#49494c',
              500: '#69696b',
              600: '#89898b',
              700: '#a9a9aa',
              800: '#c8c8c9',
              900: '#e8e8e9',
              foreground: '#fff',
              DEFAULT: '#49494c',
            },
            primary: {
              50: '#3d4034',
              100: '#616553',
              200: '#858a71',
              300: '#a8b090',
              400: '#ccd5ae',
              500: '#d5dcbc',
              600: '#dee4ca',
              700: '#e7ebd9',
              800: '#f0f2e7',
              900: '#f9faf5',
              foreground: '#000',
              DEFAULT: '#ccd5ae',
            },
            secondary: {
              50: '#3f412f',
              100: '#63664a',
              200: '#888c65',
              300: '#acb180',
              400: '#d1d79b',
              500: '#d9dead',
              600: '#e1e5be',
              700: '#e9ecd0',
              800: '#f1f3e1',
              900: '#f9faf3',
              foreground: '#000',
              DEFAULT: '#d1d79b',
            },
            success: {
              50: '#364426',
              100: '#566c3d',
              200: '#759453',
              300: '#95bb6a',
              400: '#b4e380',
              500: '#c1e896',
              600: '#ceedac',
              700: '#dbf2c3',
              800: '#e9f7d9',
              900: '#f6fcef',
              foreground: '#000',
              DEFAULT: '#b4e380',
            },
            warning: {
              50: '#4d3f1d',
              100: '#79642d',
              200: '#a6893e',
              300: '#d2ad4e',
              400: '#ffd25f',
              500: '#ffda7b',
              600: '#ffe297',
              700: '#ffeab3',
              800: '#fff2cf',
              900: '#fff9eb',
              foreground: '#000',
              DEFAULT: '#ffd25f',
            },
            danger: {
              50: '#3c0010',
              100: '#5f001a',
              200: '#820023',
              300: '#a5002d',
              400: '#c80036',
              500: '#d22d59',
              600: '#db597c',
              700: '#e586a0',
              800: '#efb3c3',
              900: '#f8dfe6',
              foreground: '#fff',
              DEFAULT: '#c80036',
            },
            background: '#111111',
            foreground: {
              50: '#45423d',
              100: '#6d6860',
              200: '#958e84',
              300: '#bdb5a7',
              400: '#e5dbcb',
              500: '#eae1d4',
              600: '#eee8dd',
              700: '#f3eee6',
              800: '#f7f4ef',
              900: '#fcfbf9',
              foreground: '#000',
              DEFAULT: '#e5dbcb',
            },
            content1: {
              DEFAULT: '#161515',
              foreground: '#fff',
            },
            content2: {
              DEFAULT: '#1c1c1c',
              foreground: '#fff',
            },
            content3: {
              DEFAULT: '#222222',
              foreground: '#fff',
            },
            content4: {
              DEFAULT: '#2d2d2d',
              foreground: '#fff',
            },
            focus: '#FAEDCE',
            overlay: '#ffffff',
            divider: '#ffffff',
          },
        },
      },
      layout: {
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem',
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem',
        },
        radius: {
          small: '0.5rem',
          medium: '0.75rem',
          large: '0.875rem',
        },
        borderWidth: {
          small: '1px',
          medium: '2px',
          large: '3px',
        },
        disabledOpacity: '0.5',
        dividerWeight: '1',
        hoverOpacity: '0.9',
      },
    }),
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
