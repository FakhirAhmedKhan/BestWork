import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/BestWork",
  plugins: [react(), tailwindcss()],
  build: {
    minify: "esbuild",
    target: "es2022",
  },
});
