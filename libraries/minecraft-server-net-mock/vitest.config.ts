import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
  },
  resolve: {
    alias: {
      "@minecraft/server-net": path.resolve(__dirname, "src/index.ts"),
    },
  },
});
