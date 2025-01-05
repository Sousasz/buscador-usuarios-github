/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "neutral-soft": "#7C8997",
        "neutral-light": "#505A65",
        "neutral-base": "#2B3137",
        "neutral-dark": "#24292E",
      },
      backgroundColor: {
        "neutral-soft": "#7C8997",
        "neutral-light": "#505A65",
        "neutral-base": "#2B3137",
        "neutral-dark": "#24292E",
        "green-light": "#2DBA4E"
      },
      borderColor: {
        "neutral-light": "#505A65",
      },
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}