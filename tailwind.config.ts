import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/ui/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      screens: {
        '2xl': '1440px'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')]
};
export default config;
