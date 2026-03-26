import { VECTOR3_ZERO } from "@minecraft/math";
import {
  world,
  BlockTypes,
  DimensionTypes,
  EffectTypes,
  EnchantmentTypes,
  EntityTypes,
  ItemTypes,
} from "@minecraft/server";

import { describe, expect, it } from "vitest";

describe("@minecraft/server", () => {
  it("WorldAfterEvents", () => {
    world.afterEvents.blockExplode.subscribe(() => {});
    world.afterEvents.buttonPush.subscribe(() => {});
    world.afterEvents.dataDrivenEntityTrigger.subscribe(() => {});
    world.afterEvents.effectAdd.subscribe(() => {});
    world.afterEvents.entityDie.subscribe(() => {});
    world.afterEvents.entityHeal.subscribe(() => {});
    world.afterEvents.entityHealthChanged.subscribe(() => {});
    world.afterEvents.entityHitBlock.subscribe(() => {});
    world.afterEvents.entityHitEntity.subscribe(() => {});
    world.afterEvents.entityHurt.subscribe(() => {});
    world.afterEvents.entityItemDrop.subscribe(() => {});
    world.afterEvents.entityItemPickup.subscribe(() => {});
    world.afterEvents.entityLoad.subscribe(() => {});
    world.afterEvents.entityRemove.subscribe(() => {});
    world.afterEvents.entitySpawn.subscribe(() => {});
    world.afterEvents.explosion.subscribe(() => {});
    world.afterEvents.gameRuleChange.subscribe(() => {});
    world.afterEvents.itemCompleteUse.subscribe(() => {});
    world.afterEvents.itemReleaseUse.subscribe(() => {});
    world.afterEvents.itemStartUse.subscribe(() => {});
    world.afterEvents.itemStartUseOn.subscribe(() => {});
    world.afterEvents.itemStopUse.subscribe(() => {});
    world.afterEvents.itemStopUseOn.subscribe(() => {});
    world.afterEvents.itemUse.subscribe(() => {});
    world.afterEvents.leverAction.subscribe(() => {});
    world.afterEvents.pistonActivate.subscribe(() => {});
    world.afterEvents.playerBreakBlock.subscribe(() => {});
    world.afterEvents.playerButtonInput.subscribe(() => {});
    world.afterEvents.playerDimensionChange.subscribe(() => {});
    world.afterEvents.playerEmote.subscribe(() => {});
    world.afterEvents.playerGameModeChange.subscribe(() => {});
    world.afterEvents.playerHotbarSelectedSlotChange.subscribe(() => {});
    world.afterEvents.playerInputModeChange.subscribe(() => {});
    world.afterEvents.playerInputPermissionCategoryChange.subscribe(() => {});
    world.afterEvents.playerInteractWithBlock.subscribe(() => {});
    world.afterEvents.playerInteractWithEntity.subscribe(() => {});
    world.afterEvents.playerInventoryItemChange.subscribe(() => {});
    world.afterEvents.playerJoin.subscribe(() => {});
    world.afterEvents.playerLeave.subscribe(() => {});
    world.afterEvents.playerPlaceBlock.subscribe(() => {});
    world.afterEvents.playerSpawn.subscribe(() => {});
    world.afterEvents.playerSwingStart.subscribe(() => {});
    world.afterEvents.pressurePlatePop.subscribe(() => {});
    world.afterEvents.pressurePlatePush.subscribe(() => {});
    world.afterEvents.projectileHitBlock.subscribe(() => {});
    world.afterEvents.projectileHitEntity.subscribe(() => {});
    world.afterEvents.targetBlockHit.subscribe(() => {});
    world.afterEvents.tripWireTrip.subscribe(() => {});
    world.afterEvents.weatherChange.subscribe(() => {});
    world.afterEvents.worldLoad.subscribe(() => {});
  });

  it("WorldBeforeEvents", () => {
    world.beforeEvents.effectAdd.subscribe(() => {});
    world.beforeEvents.entityHeal.subscribe(() => {});
    world.beforeEvents.entityHurt.subscribe(() => {});
    world.beforeEvents.entityItemPickup.subscribe(() => {});
    world.beforeEvents.entityRemove.subscribe(() => {});
    world.beforeEvents.explosion.subscribe(() => {});
    world.beforeEvents.itemUse.subscribe(() => {});
    world.beforeEvents.playerBreakBlock.subscribe(() => {});
    world.beforeEvents.playerGameModeChange.subscribe(() => {});
    world.beforeEvents.playerInteractWithBlock.subscribe(() => {});
    world.beforeEvents.playerInteractWithEntity.subscribe(() => {});
    world.beforeEvents.playerLeave.subscribe(() => {});
    world.beforeEvents.weatherChange.subscribe(() => {});
  });

  it("BiomeType", () => {
    const biome = world.getDimension("").getBiome(VECTOR3_ZERO);
    expect(biome.id === "minecraft:plains").toBe(true);
  });

  it("BlockTypes", () => {
    const block = BlockTypes.get("air");
    expect(block?.id === "minecraft:air").toBe(true);
  });

  it("EffectTypes", () => {
    const effect = EffectTypes.get("haste");
    expect(effect?.getName() === "minecraft:haste").toBe(true);
  });

  it("EnchantmentTypes", () => {
    const enchant = EnchantmentTypes.get("mending");
    expect(enchant?.id === "minecraft:mending").toBe(true);
  });

  it("EntityTypes", () => {
    const entity = EntityTypes.get("creeper");
    expect(entity?.id === "minecraft:creeper").toBe(true);
  });

  it("ItemTypes", () => {
    const item = ItemTypes.get("paper");
    expect(item?.id === "minecraft:paper").toBe(true);
  });
  
  it("DimensionTypes", () => {
    const dim = DimensionTypes.get("overworld");
    expect(dim?.typeId === "minecraft:overworld").toBe(true);
  });
});
