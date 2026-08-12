/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#16224B",
          dark: "#0F1836",
          soft: "#E7E8F1",
        },
        gold: {
          DEFAULT: "#E0992E",
          dark: "#B87F1E",
          soft: "#FBEDD3",
        },
        paper: "#FAF8F1",
        ink: {
          DEFAULT: "#1E2235",
          soft: "#4B4F63",
          muted: "#96917E",
        },
        // cool navy-tinted neutral scale used across the dashboard (stat cards, tables, badges)
        g: {
          50: "#F5F6FA",
          100: "#EBEDF3",
          200: "#DDE0EA",
          300: "#C7CCDA",
          400: "#9CA3B8",
          500: "#737A93",
          600: "#4B5170",
          700: "#363B57",
          800: "#232640",
          900: "#16182B",
        },
      },
    },
  },
  plugins: [],
}