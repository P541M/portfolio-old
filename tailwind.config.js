/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#070707", // Text colour
        bg: "#F2F2F2", // Background colour
        primary: "#57A4DB", // Main colour
        bgContrast: "#E6E6E6", // Darker contrast background
      },
      scale: {
        102: "1.02", // Custom scale value
      },
    },
  },
  plugins: [],
};
