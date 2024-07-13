/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#070707", // Text colour
        bg: "#F2F2F2", // Background colour
        primary: "#2873FF", // Main colour
        bgContrast: "#E6E6E6", // Darker contrast background
        accent: "#E85E5E", // Accent colour
      },
      scale: {
        102: "1.02", // Custom scale value
      },
    },
  },
  plugins: [],
};
