import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// definconfig with an object
export default defineConfig({
  plugins: [react()],
  
//   if my index file is not directly in the base of my project i don't need the root: "src"
  root: "src", 
});
