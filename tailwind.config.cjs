/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      cursor: {
        //default: 'url(src/assets/cursor.png), default',
        //pointer: 'url(src/assets/cursor.png), pointer',
      },
      colors: {
        primary: "#1a1a1a",   // Almost black background
        secondary: "#FF4500", // Warm glowing orange for Nixie tube effect
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
        "nav": "url('/src/assets/nav_background.jpg')",
        "custom-background": "url('/src/assets/background.png')",
      },

      // Steins;Gate glitch animation in orange
      keyframes: {
        steinsgateGlitch: {
          '0%': {
            textShadow: '0 0 2px #FF4500, 0 0 5px #FF4500, 0 0 10px #FF4500',
          },
          '50%': {
            textShadow: '0 0 3px #b32b00, 0 0 5px #b32b00, 0 0 8px #b32b00',
          },
          '100%': {
            textShadow: '0 0 2px #FF4500, 0 0 5px #FF4500, 0 0 10px #FF4500',
          },
        },
      },
      animation: {
        'steinsgate-glitch': 'steinsgateGlitch 3s infinite',
      },
    },
  },
  plugins: [
    // Plugin to add our Steins;Gate-inspired textbox class
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.steinsgate-textbox': {
          backgroundColor: '#111',
          border: '2px double #FF4500',
          boxShadow: '0 0 5px #FF4500',
          fontFamily: 'Fira Code, monospace',
          color: '#FF4500',
          padding: '1rem',
          lineHeight: '1.5',
          maxWidth: '600px',
          margin: '1rem auto',
          position: 'relative',
          overflow: 'hidden',
        },
        '.steinsgate-textbox p': {
          animation: theme('animation.steinsgate-glitch'),
        },
      });
    }),
  ],
};
