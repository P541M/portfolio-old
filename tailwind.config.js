/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#212121",
        bg: "#FAFAFA",
        primary: "#0064C8",
        secondary: "#E0E0E0",
        accent: "#2E7D32",
        divider: "#EEEEEE",
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Syne", "sans-serif"],
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-right": "env(safe-area-inset-right)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "fade-in-slow": "fadeIn 1.2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
