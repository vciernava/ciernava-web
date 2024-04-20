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
    },
    maxWidth: {
      '1600': '1600px',
    },
  },
  plugins: [],
};
export default config;
