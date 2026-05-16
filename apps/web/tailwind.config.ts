import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
      },
      colors: {
        // GymOS brand colors
        navy: {
          900: '#0D1B2A',
          800: '#1B263B',
          700: '#415A77',
        },
        electric: {
          DEFAULT: '#00FF87',
          dark: '#00CC6A',
        },
      },
    },
  },
  plugins: [],
};

export default config;