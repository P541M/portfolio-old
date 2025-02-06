/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#000000", // Text color
        bg: "#FFFFFF", // Background color
        primary: "#6781b1", // Main color
        bgContrast: "#F2F2F2", // Darker contrast background
        divContrast: "#C2C2C2", // Darker contrast background
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-right": "env(safe-area-inset-right)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
      },
    },
  },
  plugins: [],
};
