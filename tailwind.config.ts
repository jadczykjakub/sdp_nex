import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'touchScr': { 'raw': '(hover: none)' },
        'hoverScr': { 'raw': '(hover: hover)' },
      },
      maxWidth: {
        '8xl': '90rem', // Define the desired width here
        '9xl': '100rem',
        '10xl': '120rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#db842d',
        secondary: '#363636',
      },
      fontSize: {
        xsm: ['0.875rem', { lineHeight: '1.5' }], // 14px
        sm: ['0.9375rem', { lineHeight: '1.1875' }], // 15px
        base: ['1rem', { lineHeight: '1.5' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.5' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.208' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '1.210' }], //25px
        '3xl': ['1.875rem', { lineHeight: '1.21875' }], //30px
        '4xl': ['2.5rem', { lineHeight: '1.2' }], //40px
      },
    },
  },
  plugins: [],
}
export default config
