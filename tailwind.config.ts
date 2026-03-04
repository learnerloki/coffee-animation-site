import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#F5E6D3',
          100: '#C9B8A0',
          500: '#5A4034',
          800: '#3D2820',
          900: '#2D1810',
          950: '#1A0F0A',
        },
        accent: '#4F9C8F',
        star: '#FFD700',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
