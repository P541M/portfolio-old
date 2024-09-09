/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Existing Portfolio Color Palette
        text: "#070707", // Text color
        bg: "#F2F2F2", // Background color
        primary: "#ADADAD", // Main color
        bgContrast: "#E6E6E6", // Darker contrast background

        // BoscoBoys Color Palette
        boscoText: "#070A0E", // BoscoBoys Text color
        boscoBackground: "#FBFCFE", // BoscoBoys Background color
        boscoPrimary: "#002C54", // BoscoBoys Main color
        boscoContrastLight: "#FEFFFF", // BoscoBoys Lighter contrast background
        boscoContrastDark: "#EEEFF1", // BoscoBoys Darker contrast background
        boscoAccent: "#5098f6", // BoscoBoys Accent color
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
