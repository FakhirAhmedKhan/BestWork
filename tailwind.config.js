/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  // Add this content array
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path if your files are elsewhere
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          "0%, 100%": { opacity: "0.2" },
          "20%": { opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
      },
    },
  },
  plugins: [],
};