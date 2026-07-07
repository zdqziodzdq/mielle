/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: "#F06292",
        "honey-dark": "#E84C82",
        rose: "#F0A3C4",
        "rose-dark": "#D94A7B",
        cream: "#FFF5F9",
        "cream-2": "#FFF0F6",
        cocoa: "#5A2F47",
        "cocoa-soft": "#8B5A75",
        green: "#D491A8",
        red: "#E84C82",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Jost", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "18px",
      },
      boxShadow: {
        DEFAULT: "0 8px 30px rgba(240, 98, 146, 0.12)",
      },
    },
  },
  plugins: [],
};
