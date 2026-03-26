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
      "@minecraft/server-ui": path.resolve(__dirname, "src/index.ts"),
      "@minecraft/server": path.resolve(__dirname, "../minecraft-server-mock/src/index.ts"),
    },
  },
});
