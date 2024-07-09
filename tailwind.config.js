/** @type {import('tailwindcss').Config} */
export default {
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
      fontFamily: {
        sans: ["Strawford", "ui-sans-serif", "system-ui"],
        n27: ["N27", "sans-serif"],
        strawford: ["Strawford", "sans-serif"],
      },
      colors: {
        lavender: {
          lighter: "#C9CDFB",
          light: "#A8AEF5",
          DEFAULT: "#8289DC",
        },
        lime: {
          light: "#EEF6A3",
          DEFAULT: "#E8F580",
          lighter: "#F8FDBD",
        },
      },
    },
  },
  plugins: [],
};
