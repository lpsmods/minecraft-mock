import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    server: {
      deps: {
        inline: ["@minecraft/math"],
      },
    },
  },
  resolve: {
    alias: {
      "@minecraft/debug-utilities": path.resolve(__dirname, "src/index.ts"),
    },
  },
});
