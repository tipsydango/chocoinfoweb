/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant files for Tailwind
  ],
  theme: {
    extend: {
      colors: {
        'light-brown': '#D2B48C', // Light brown for backgrounds
        brown: '#8B4513',         // Brown for gradients and text
        gold: '#FFD700',          // Gold for highlights and underlines
      },
      animation: {
        'flicker-in': 'flickerIn 2s ease-out', // Add flicker-in animation
      },
      keyframes: {
        flickerIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
