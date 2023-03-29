/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'josefin': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        'primary': "#35414B",
        'secondary': "#4E5A65",
        'specialGreen': "#F2F9EB",
        'specialBlue': '#E1E5EA',
        'specialPurple': '#794CFF'
      }
    },
  },
  plugins: [
    'tailwindcss'
  ],
}

