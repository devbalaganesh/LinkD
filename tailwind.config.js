/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],

        playfair: ["PlayFairDisplay-Regular", "serif"],
        "playfair-bold": ["PlayFairDisplay-Bold", "serif"],

        spacemono: ["SpaceMono-Regular", "monospace"],
      },

      colors: {
        background: "#FFFFFF",
        card: "#EFEFF2",
        text: {
          DEFAULT: "#1A1A1A",
          secondary: "#7B7B7B",
        },
        accent: {
          DEFAULT: "#6C47FF",
          light: "#8C6EFF",
        },
        success: "#4CD17F",
        danger: "#FF6767",
      },
    },
  },
  plugins: [],
};
