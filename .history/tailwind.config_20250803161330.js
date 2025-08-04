/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-montreal': ['Neue Montreal', 'sans-serif'],
        'formula': ['PP Formula', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

