import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0px 150px',
          sm: '0px 100px',
          md: '0px 50px',
          lg: '0px 25px',
        },
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
      },
      boxShadow: {
        'solid-button': '4px 4px 0 0'
      }
    },
    maxWidth: {
      '1600': '1600px',
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
export default config;
