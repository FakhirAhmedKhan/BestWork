export const theme = {
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
};
export const plugins = [];
