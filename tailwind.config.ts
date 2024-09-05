import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        main: {
          100: '#a99efb',
          300: '#837bbf',
          500: '#5f4dee',
          700: '#362e6f',
          900: '#110c36'
        }
      }
    }
  },
  plugins: []
};

export default config;
