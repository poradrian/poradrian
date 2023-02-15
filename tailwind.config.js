/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gray: {
          0: "hsl(0 0% 4%)",
          1: "hsl(0 0% 8.5%)",
          2: "hsl(0 0% 11.0%)",
          3: "hsl(0 0% 13.6%)",
          4: "hsl(0 0% 15.8%)",
          5: "hsl(0 0% 17.9%)",
          6: "hsl(0 0% 20.5%)",
          7: "hsl(0 0% 24.3%)",
          8: "hsl(0 0% 31.2%)",
          9: "hsl(0 0% 43.9%)",
          10: "hsl(0 0% 49.4%)",
          11: "hsl(0 0% 62.8%)",
          12: "hsl(0 0% 93.0%)",
          A1: "hsl(0 0% 100% / 0)",
          A2: "hsl(0 0% 100% / 0.026)",
          A3: "hsl(0 0% 100% / 0.056)",
          A4: "hsl(0 0% 100% / 0.077)",
          A5: "hsl(0 0% 100% / 0.103)",
          A6: "hsl(0 0% 100% / 0.129)",
          A7: "hsl(0 0% 100% / 0.172)",
          A8: "hsl(0 0% 100% / 0.249)",
          A9: "hsl(0 0% 100% / 0.386)",
          A10: "hsl(0 0% 100% / 0.446)",
          A11: "hsl(0 0% 100% / 0.592)",
          A12: "hsl(0 0% 100% / 0.923)",
        },
      },
      animation: {
        sign: "signature 0.8s linear forwards 0.5s"
      },
      keyframes: {
        signature: {
          to: {
            strokeDashOffset: '0'
          }
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
