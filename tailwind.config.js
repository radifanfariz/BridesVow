/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
        'Montserrat',
        'Montserrat-Extrabold',
        'Montserrat-Variable'
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
      paradise: 'Paradise',
      playfair: 'Playfair',
      playfairBlack: 'Playfair-black',
      adela: 'Adela',
      adelia: 'Adelia',
      lobster: 'Lobster',
      antonio: 'Antonio',
      honey: 'Honey',
      richard: 'Richard',
      damion: 'Damion',
      belgrano: 'Belgrano',
      poppins: [
        'Poppins',
        'Poppins-Extrabold'
      ],
      abhayalibre: [
        'AbhayaLibre',
        'AbhayaLibre-Bold'
      ],
    },
    extend: {
      backgroundImage: {
        'wedd': "url('../public/static/bg.jpg')",
      },
      keyframes: {
        fall: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        fly: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        }
      },
      animation: {
        'fall': 'fall 1s ease-out 1',
        'fly': 'fly 1s ease-out 1'
      }
    },
    variants: {
      extend: {
        visibility: ["group-hover"]
      }
    }
  },
  plugins: [
    require("daisyui"),
  ],

    // daisyUI config (optional)
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
}