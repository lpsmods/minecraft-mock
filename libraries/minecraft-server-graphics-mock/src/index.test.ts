import { describe, it } from "vitest";
import { atmosphere } from "@minecraft/server-graphics";
import { world } from "@minecraft/server";

describe("@minecraft/server-graphics", () => {
  const biome = world.getDimension("overworld").getBiome({ x: 0, y: 0, z: 0 });
  const color = { red: 0, green: 0, blue: 0 };
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
