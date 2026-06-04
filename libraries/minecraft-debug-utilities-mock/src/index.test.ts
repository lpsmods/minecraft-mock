import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as debugUtilities from "@minecraft/debug-utilities";
import { disableWatchdog } from "@minecraft/debug-utilities";
import { describe, expect, it } from "vitest";

describe("@minecraft/debug-utilities", () => {
  const peerTypes = readFileSync(
    resolve(dirname(fileURLToPath(import.meta.url)), "../../../node_modules/@minecraft/debug-utilities/index.d.ts"),
    "utf8",
  );

  it("covers every peer runtime export", () => {
    const runtimeExports = [
      ...peerTypes.matchAll(/export (?:class|enum|function) (\w+)/g),
      ...peerTypes.matchAll(/export const (\w+)/g),
    ].map((match) => match[1]);

    expect(Object.keys(debugUtilities).sort()).toEqual(expect.arrayContaining(runtimeExports.sort()));
  });

  it("disableWatchdog", () => {
    disableWatchdog(true);
  });
});
