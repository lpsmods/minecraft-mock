import { describe, it } from "vitest";
import { disableWatchdog } from "@minecraft/debug-utilities";

describe("@minecraft/debug-utilities", () => {
  it("disableWatchdog", () => {
    disableWatchdog(true);
  });
});
