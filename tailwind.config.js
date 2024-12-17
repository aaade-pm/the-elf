/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Christmas Theme Colors
        christmas: {
          red: "#C62828", // Deep Red (Primary)
          lightRed: "#EF5350", // Lighter Red
          green: "#2E7D32", // Rich Green
          lightGreen: "#66BB6A", // Lighter Green
          gold: "#FFD700", // Gold Accent
          snow: "#F9FAFB", // Soft White (Background)
          pine: "#1B5E20", // Dark Pine Green
        },
        festive: {
          teal: "#00897B", // Cool Teal
          berry: "#8E24AA", // Festive Berry Purple
          mistletoe: "#558B2F", // Mistletoe Green
        },
      },
      backgroundImage: {
        // Add festive gradients
        "christmas-gradient": "linear-gradient(to bottom, #C62828, #FFD700)",
        "frosted-snow":
          "linear-gradient(to bottom, rgba(255,255,255,0.5), #F9FAFB)",
      },
      fontFamily: {
        // Custom Christmas Fonts
        festive: ['"Lobster Two"', "cursive"], // Playful decorative font
        holiday: ['"Great Vibes"', "cursive"], // Elegant script font
        body: ['"Nunito"', "sans-serif"], // Clean body text
      },
      boxShadow: {
        glow: "0 0 10px 2px rgba(255, 215, 0, 0.8)", // Golden Glow
        frosted: "0 0 15px 3px rgba(255, 255, 255, 0.6)",
      },
      // spacing: {
      //   72: "18rem",
      //   84: "21rem",
      //   96: "24rem",
      // },
    },
  },
  plugins: [],
};
