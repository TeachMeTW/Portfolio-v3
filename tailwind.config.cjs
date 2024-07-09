/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      cursor: {
        default: 'url(src\assets\cursor.png), default',
        pointer: 'url(src\assets\cursor.png), pointer',
      },
      colors: {
        primary: "#1a1a1a",  // Almost black background
        secondary: "#FF4500",  // Warm glowing orange for Nixie tube effect
        tertiary: "#2a2a2a",  // Slightly lighter shade for secondary backgrounds or UI elements
        "black-100": "#0d0d0d",
        "black-200": "#090909",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

