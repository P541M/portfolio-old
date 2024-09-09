/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#070707", // Text color
        bg: "#F2F2F2", // Background color
        primary: "#ADADAD", // Main color
        bgContrast: "#E6E6E6", // Darker contrast background
      },
      scale: {
        102: "1.02", // Custom scale value
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
