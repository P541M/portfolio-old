/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "#212121",
          dark: "#E0E0E0",
        },
        bg: {
          DEFAULT: "#FAFAFA",
          dark: "#121212",
        },
        primary: {
          DEFAULT: "#2E89F7",
          dark: "#64B5F6",
        },
        secondary: {
          DEFAULT: "#E0E0E0",
          dark: "#424242",
        },
        accent: {
          DEFAULT: "#2E7D32",
          dark: "#81C784",
        },
        divider: {
          DEFAULT: "#EEEEEE",
          dark: "#424242",
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#1E1E1E",
        },
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
