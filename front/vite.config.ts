import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import visualizer from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [reactRefresh(), visualizer()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  server: {
    proxy: {
      "/graphql": {
        target: "http://localhost:32100",
        changeOrigin: true,
      },
    },
  },
});
