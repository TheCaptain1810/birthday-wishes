/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        popup: {
          "0%": { transform: "scale(0)" },
          "70%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        firework: {
          "0%": { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
          "50%": { transform: "translate(-50%, -50%) scale(1)", opacity: 0.5 },
          "100%": { transform: "translate(-50%, -50%) scale(1.5)", opacity: 0 },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        popup: "popup 0.5s ease-out forwards",
        firework: "firework 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
