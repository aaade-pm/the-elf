/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6564DB",
          200: "#F2FBFC",
          300: "#6564DB",
          400: "#88D2DC",
        },
        secondary: {
          100: "#555FD2",
          200: "#232ED1",
          300: "#7F8384",
          400: "#6F63C3",
          500: "#D1D1F5",
        },
        accent: {
          100: "#BCFFFF",
          200: "#A2DAE3",
          300: "#5A70D3",
          400: "#4855D7",
        },
      },
    },
    fontFamily: {
      jost: ['"Jost"', "sans-serif"],
    },
  },
  plugins: [],
};
