import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          light: '#6366f1',
        },
        accent: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
        },
        cream: '#fef3c7',
      },
    },
  },
  plugins: [],
};

export default config;
