/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /** color theme here */
        "primary": '#',
        "secondary": '#',
        "accent": '#',
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        md: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        '3xl': ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "3rem" }],
        "6xl": ["3.75rem", { lineHeight: "3.5rem" }],
        "7xl": ["4.5rem", { lineHeight: "4rem" }],
        "8xl": ["6rem", { lineHeight: "4.5rem" }],
        "9xl": ["8rem", { lineHeight: "5rem" }],
        "10xl": ["10rem", { lineHeight: "5.5rem" }],
        "11xl": ["11rem", { lineHeight: "6rem" }],
        "12xl": ["12rem", { lineHeight: "6.5rem" }],
        "13xl": ["13rem", { lineHeight: "7rem" }],
        "14xl": ["14rem", { lineHeight: "7.5rem" }],
        "15xl": ["15rem", { lineHeight: "8rem" }]
      },
      fontFamily: {

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
