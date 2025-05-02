/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "#212121",
          dark: "#F5F5F5"
        },
        bg: {
          DEFAULT: "#FAFAFA",
          dark: "#1A1A1A"
        },
        primary: {
          DEFAULT: "#2E89F7",
          dark: "#4A9EFF"
        },
        secondary: {
          DEFAULT: "#E0E0E0",
          dark: "#2D2D2D"
        },
        accent: {
          DEFAULT: "#2E7D32",
          dark: "#4CAF50"
        },
        divider: {
          DEFAULT: "#EEEEEE",
          dark: "#333333"
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#242424"
        }
      },
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
        heading: ["Albert Sans", "sans-serif"],
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
