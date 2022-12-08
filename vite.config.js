import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import vercel from "solid-start-vercel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid({ ssr: true }, { adapter: vercel() })],
});
