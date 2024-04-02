import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import envCopatible from "vite-plugin-env-compatible";
// https://vitejs.dev/config/
export default defineConfig({
  // envPrefix: "VITE_",
  plugins: [react()],
});
