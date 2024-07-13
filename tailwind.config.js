/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          // Adjust colours according to website theme
          text: "#030407",
          bg: "#FBFCFE",
          primary: "#003366",
          bgContrast: "#EEEFF1", // Darker contrast background for light mode
          accent: "#FF4C38", // New accent color for light mode
        },
        dark: {
          // Adjust colours according to website theme
          text: "#e7ebf0",
          bg: "#141414",
          primary: "#26527D",
          bgContrast: "#121212", // Lighter contrast background for dark mode
          accent: "#C71400", // New accent color for dark mode
        },
      },
    },
  },
  plugins: [],
};
