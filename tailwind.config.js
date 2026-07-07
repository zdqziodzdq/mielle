/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: "#F2A93B",
        "honey-dark": "#D98A15",
        rose: "#F06292",
        "rose-dark": "#D94A7B",
        cream: "#FFF9F1",
        "cream-2": "#FDF1E0",
        cocoa: "#3B2A1A",
        "cocoa-soft": "#6B5540",
        green: "#2E9E5B",
        red: "#D64545",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Jost", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "18px",
      },
      boxShadow: {
        DEFAULT: "0 8px 30px rgba(59, 42, 26, 0.08)",
      },
    },
  },
  plugins: [],
};
