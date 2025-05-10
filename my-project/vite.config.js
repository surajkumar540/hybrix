// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Make sure this is correct
  plugins: [react()],
  server: {
    historyApiFallback: true, // For react-router to handle routing
  },
});
