import { BiomeType, RGB } from "@minecraft/server";

export class Atmospherics {
  resetHorizonBlendMax(biomeIdentifier: BiomeType) {}
  resetHorizonBlendMieStart(biomeIdentifier: BiomeType) {}
  resetHorizonBlendMin(biomeIdentifier: BiomeType) {}
  resetHorizonBlendStart(biomeIdentifier: BiomeType) {}
  resetMoonMieStrength(biomeIdentifier: BiomeType) {}
  resetRayleighStrength(biomeIdentifier: BiomeType) {}
  resetSkyHorizonColor(biomeIdentifier: BiomeType) {}
  resetSkyZenithColor(biomeIdentifier: BiomeType) {}
  resetSunGlareShape(biomeIdentifier: BiomeType) {}
  resetSunMieStrength(biomeIdentifier: BiomeType) {}
  setHorizonBlendMax(
    blendMax: number | Record<number, number>,
    biomeIdentifier: BiomeType,
  ) {}
  setHorizonBlendMieStart(
    blendMieStart: number | Record<number, number>,
    biomeIdentifier: BiomeType,
  ) {}
  setHorizonBlendMin(
    blendMin: number | Record<number, number>,
    biomeIdentifier: BiomeType,
  ) {}
  setHorizonBlendStart(
    blendStart: number | Record<number, number>,
    biomeIdentifier: BiomeType,
  ) {}
  setMoonMieStrength(
    moonMieStrength: number | Record<number, number>,
    biomeIdentifier: BiomeType,
  ) {}
  setRayleighStrength(
    rayleighStrength: number | Record<number, number>,
    biomeIdentifier: BiomeType,
  ) {}
  setSkyHorizonColor(
    color: RGB | Record<number, RGB>,
    biomeIdentifier: BiomeType,
  ) {}
  setSkyZenithColor(
    color: RGB | Record<number, RGB>,
    biomeIdentifier: BiomeType,
  ) {}
  setSunGlareShape(
    sunFlareShape: number | Record<number, number>,
    biomeIdentifier: BiomeType,
  ) {}
  setSunMieStrength(
    sunMieStrength: number | Record<number, number>,
    biomeIdentifier: BiomeType,
  ) {}
}

export const atmosphere = new Atmospherics();
