/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
    },
    extend: {
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [],
};
