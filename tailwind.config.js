/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./",       
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        brandGrey: {
          500: 'var(--Brand-Colors-Grey-grey-500, #323232)',
          400: 'var(--Brand-Colors-Grey-grey-400, #5B5B5B)',
        },
      },
      fontFamily: {
        gt: ['"GT Walsheim Trial"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['24px', { lineHeight: '32px', fontWeight: '900' }],
      },
    },
  },
  plugins: [],
};
