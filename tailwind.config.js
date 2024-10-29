/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-move": "gradientMove 3s ease infinite",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { "background-position": "0% 100%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      colors: {
        theme_blue: {
          50: "#1F2336",
          100: "#F0F0F0",
          200: "#5A4AD2",
          300: "#8970ED",
          400: "#6653D7",
          500: "#5E82A6",
          600: "#4C6B8A",
          700: "#3C546C",
          800: "#2C3D4F",
          900: "#1B2631",
          950: "#141C24",
        },
        accent: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
        gradientColors: {
          50: "#E2D32F", // Yellow shade for gradients
          100: "#EC1155", // Pink shade
          200: "#2794D7", // Blue shade
        },
      },
    },
  },
  plugins: [],
};
