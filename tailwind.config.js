import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
          topBottomShadow: `inset 0 5px 5px -5px #333, 
                      inset 0 -5px 5px -5px #333`
      },
    },
  },
  plugins: [
    daisyui,
  ],
}