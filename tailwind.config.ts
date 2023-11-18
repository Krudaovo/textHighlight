/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        roboto: 'Roboto'
      },
      screens: {
        "xs": "375px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
      animation: {
        "material-shadow-xs": "material-shadow-xs .3s cubic-bezier(.39,.575,.565,1)   both",
        "material-shadow-sm": "material-shadow-sm .3s cubic-bezier(.39,.575,.565,1)   both",
        "material-shadow-md": "material-shadow-md .3s cubic-bezier(.39,.575,.565,1)   both",
        "material-shadow-lg": "material-shadow-lg .3s cubic-bezier(.39,.575,.565,1)   both",
        "material-shadow-xl": "material-shadow-xl .3s cubic-bezier(.25,.8,.25,1)   both",
      },
      keyframes: {
        "material-shadow-xs": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
          }
        },
        "material-shadow-sm": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
          }
        },
        "material-shadow-md": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
          }
        },
        "material-shadow-lg": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
          }
        },
        "material-shadow-xl": {
          "0%": {
            "box-shadow": "0 0 0 0 transparent"
          },
          to: {
            "box-shadow": "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
          }
        },
      },
    },
  },
  plugins: [],
}
