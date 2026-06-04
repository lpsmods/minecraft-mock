import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { atmosphere } from "@minecraft/server-graphics";
import * as serverGraphics from "@minecraft/server-graphics";
import { world } from "@minecraft/server";
import { describe, expect, it } from "vitest";

describe("@minecraft/server-graphics", () => {
  const peerTypes = readFileSync(
    resolve(dirname(fileURLToPath(import.meta.url)), "../../../node_modules/@minecraft/server-graphics/index.d.ts"),
    "utf8",
  );
  const biome = world.getDimension("overworld").getBiome({ x: 0, y: 0, z: 0 });
  const color = { red: 0, green: 0, blue: 0 };

  it("covers every peer runtime export and class method", () => {
    const runtimeExports = [
      ...peerTypes.matchAll(/export (?:class|enum|function) (\w+)/g),
      ...peerTypes.matchAll(/export const (\w+)/g),
    ].map((match) => match[1]);

    expect(Object.keys(serverGraphics).sort()).toEqual(expect.arrayContaining(runtimeExports.sort()));

    for (const [, className, body] of peerTypes.matchAll(/export class (\w+) \{([\s\S]*?)\n\}/g)) {
      const methods = [...body.matchAll(/^\s{4}(\w+)\(/gm)].map((match) => match[1]);

      for (const method of methods) {
        expect(serverGraphics[className as keyof typeof serverGraphics].prototype).toHaveProperty(method);
      }
    }
  });

  it("should pass", () => {
    atmosphere.resetHorizonBlendMax(biome);
    atmosphere.resetHorizonBlendMieStart(biome);
    atmosphere.resetHorizonBlendMin(biome);
    atmosphere.resetHorizonBlendStart(biome);
    atmosphere.resetMoonMieStrength(biome);
    atmosphere.resetRayleighStrength(biome);
    atmosphere.resetSkyHorizonColor(biome);
    atmosphere.resetSkyZenithColor(biome);
    atmosphere.resetSunGlareShape(biome);
    atmosphere.resetSunMieStrength(biome);

    atmosphere.setHorizonBlendMax(1, biome);
    atmosphere.setHorizonBlendMax({ 0.0: 0, 1.0: 100 }, biome);

    atmosphere.setHorizonBlendMieStart(1, biome);
    atmosphere.setHorizonBlendMieStart({ 0.0: 0, 1.0: 100 }, biome);

    atmosphere.setHorizonBlendMin(1, biome);
    atmosphere.setHorizonBlendMin({ 0.0: 0, 1.0: 100 }, biome);

    atmosphere.setHorizonBlendStart(1, biome);
    atmosphere.setHorizonBlendStart({ 0.0: 0, 1.0: 100 }, biome);

    atmosphere.setMoonMieStrength(1, biome);
    atmosphere.setMoonMieStrength({ 0.0: 0, 1.0: 100 }, biome);

    atmosphere.setRayleighStrength(1, biome);
    atmosphere.setRayleighStrength({ 0.0: 0, 1.0: 100 }, biome);

    atmosphere.setSunGlareShape(1, biome);
    atmosphere.setSunGlareShape({ 0.0: 0, 1.0: 100 }, biome);

    atmosphere.setSunMieStrength(1, biome);
    atmosphere.setSunMieStrength({ 0.0: 0, 1.0: 100 }, biome);

    atmosphere.setSkyHorizonColor(color, biome);
    atmosphere.setSkyHorizonColor({ 0.0: color, 1.0: color }, biome);

    atmosphere.setSkyZenithColor(color, biome);
    atmosphere.setSkyZenithColor({ 0.0: color, 1.0: color }, biome);
  });
});
