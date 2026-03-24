import { VECTOR3_ZERO } from "@minecraft/math";
import { Vector3, RawMessage } from "@minecraft/server";
import { vi } from "vitest";

const eventSignal = { subscribe: vi.fn((cb: () => void) => 1) };

// Internal
function idHelper(id: string): string {
  const parts = id.split(":");
  if (parts.length == 1) return `minecraft:${parts[0]}`;
  return id;
}

export class World {
  getPlayers() {
    return [new Player()];
  }

  sendMessage(msg: RawMessage | string) {
    console.log("[Mock world]", msg);
  }

  getDimension(dimensionId: string) {
    return new Dimension(dimensionId);
  }

  getDay() {
    return 256;
  }

  getTimeOfDay() {
    return 1;
  }

  getMoonPhase() {
    return MoonPhase.FullMoon;
  }

  getEntity() {
    return new Entity();
  }

  readonly beforeEvents = {
    effectAdd: eventSignal,
    entityRemove: eventSignal,
    explosion: eventSignal,
    itemUse: eventSignal,
    playerBreakBlock: eventSignal,
    playerGameModeChange: eventSignal,
    playerInteractWithBlock: eventSignal,
    playerInteractWithEntity: eventSignal,
    playerLeave: eventSignal,
    weatherChange: eventSignal,
  };
  readonly afterEvents = {
    blockExplode: eventSignal,
    buttonPush: eventSignal,
    dataDrivenEntityTrigger: eventSignal,
    effectAdd: eventSignal,
    entityDie: eventSignal,
    entityHealthChanged: eventSignal,
    entityHitBlock: eventSignal,
    entityHitEntity: eventSignal,
    entityHurt: eventSignal,
    entityLoad: eventSignal,
    entityRemove: eventSignal,
    entitySpawn: eventSignal,
    explosion: eventSignal,
    gameRuleChange: eventSignal,
    itemCompleteUse: eventSignal,
    itemReleaseUse: eventSignal,
    itemStartUse: eventSignal,
    itemStartUseOn: eventSignal,
    itemStopUse: eventSignal,
    itemStopUseOn: eventSignal,
    itemUse: eventSignal,
    leverAction: eventSignal,
    pistonActivate: eventSignal,
    playerBreakBlock: eventSignal,
    playerButtonInput: eventSignal,
    playerDimensionChange: eventSignal,
    playerEmote: eventSignal,
    playerGameModeChange: eventSignal,
    playerHotbarSelectedSlotChange: eventSignal,
    playerInputModeChange: eventSignal,
    playerInputPermissionCategoryChange: eventSignal,
    playerInteractWithBlock: eventSignal,
    playerInteractWithEntity: eventSignal,
    playerInventoryItemChange: eventSignal,
    playerJoin: eventSignal,
    playerLeave: eventSignal,
    playerPlaceBlock: eventSignal,
    playerSpawn: eventSignal,
    pressurePlatePop: eventSignal,
    pressurePlatePush: eventSignal,
    projectileHitBlock: eventSignal,
    projectileHitEntity: eventSignal,
    targetBlockHit: eventSignal,
    tripWireTrip: eventSignal,
    weatherChange: eventSignal,
    worldLoad: eventSignal,
  };
}

export const world = new World();

export enum ItemLockMode {
  inventory = "inventory",
  none = "none",
  slot = "slot",
}

export enum Direction {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
  Up = "Up",
  Down = "Down",
}

export enum MemoryTier {
  SuperLow = 0,
  Low = 1,
  Mid = 2,
  High = 3,
  SuperHigh = 4,
}

export enum MoonPhase {
  FullMoon = 0,
  WaningGibbous = 1,
  FirstQuarter = 2,
  WaningCrescent = 3,
  NewMoon = 4,
  WaxingCrescent = 5,
  LastQuarter = 6,
  WaxingGibbous = 7,
}

export const system = {
  run: (cb: Function) => cb(),
  runTimeout: (cb: Function, _ticks: number) => 1, // Don't call callback in test
  runInterval: (cb: Function, _ticks: number) => 1, // Don't call callback in test
  clearRun: vi.fn(),
  clearTimeout: vi.fn(),
  runJob: vi.fn(),
  currentTick: 0,
  afterEvents: {
    scriptEventReceive: {
      subscribe: vi.fn(),
      unsubscribe: vi.fn(),
    },
  },
  beforeEvents: {
    scriptEventReceive: {
      subscribe: vi.fn(),
      unsubscribe: vi.fn(),
    },
  },
  serverSystemInfo: {
    memoryTier: MemoryTier.Mid,
  },
};

export class Entity {
  readonly dimension = new Dimension();
  readonly id = "12345";
  readonly isClimbing = false;
  readonly isFalling = false;
  readonly isInWater = false;
  readonly isOnGround = false;
  readonly isSleeping = false;
  readonly isSneaking = false;
  readonly isSprinting = false;
  readonly isSwimming = false;
  readonly isValid = true;
  readonly localizationKey = "entity.creeper.name";
  readonly location = VECTOR3_ZERO;
  readonly typeId = "minecraft:creeper";
  nameTag = "";

  addEffect = vi.fn();
  addTag = vi.fn();
  applyDamage = vi.fn();
  applyImpulse = vi.fn();
  applyKnockback = vi.fn();
  clearDynamicProperties = vi.fn();
  clearVelocity = vi.fn();
  extinguishFire = vi.fn();
  getBlockFromViewDirection = vi.fn();
  getComponent = vi.fn((componentId) => {});
  getComponents = vi.fn();
  getDynamicProperty = vi.fn();
  getDynamicPropertyIds = vi.fn();
  getDynamicPropertyTotalByteCount = vi.fn();
  getEffect = vi.fn();
  getEffects = vi.fn();
  getEntitiesFromViewDirection = vi.fn();
  getHeadLocation = vi.fn();
  getProperty = vi.fn();
  getRotation = vi.fn(() => {
    return { x: 0, y: 0 };
  });
  getTags = vi.fn();
  getVelocity = vi.fn();
  getViewDirection = vi.fn();
  hasComponent = vi.fn();
  hasTag = vi.fn();
  kill = vi.fn();
  lookAt = vi.fn();
  matches = vi.fn();
  playAnimation = vi.fn();
  remove = vi.fn();
  removeEffect = vi.fn();
  removeTag = vi.fn();
  resetProperty = vi.fn();
  runCommand = vi.fn();
  setDynamicProperties = vi.fn();
  setDynamicProperty = vi.fn();
  setOnFire = vi.fn();
  setProperty = vi.fn();
  setRotation = vi.fn();
  teleport = vi.fn();
  triggerEvent = vi.fn();
  tryTeleport = vi.fn();
}

export class BlockVolumeBase {}

export class BlockVolume extends BlockVolumeBase {
  constructor(
    public from: Vector3,
    public to: Vector3,
  ) {
    super();
  }

  isInside(v: Vector3): boolean {
    return (
      v.x >= Math.min(this.from.x, this.to.x) &&
      v.x <= Math.max(this.from.x, this.to.x) &&
      v.y >= Math.min(this.from.y, this.to.y) &&
      v.y <= Math.max(this.from.y, this.to.y) &&
      v.z >= Math.min(this.from.z, this.to.z) &&
      v.z <= Math.max(this.from.z, this.to.z)
    );
  }
}

export class Player extends Entity {
  readonly name = "Steve";
}

export class Dimension {
  heightRange = { max: 256, min: -64 };
  readonly id: string;
  readonly localizationKey = "dimension.dimensionName0";

  constructor(typeId?: string) {
    this.id = typeId ?? "minecraft:overworld";
  }

  containsBlock() {}
  createExplosion() {}
  fillBlocks() {}
  getBiome(location: Vector3) {
    return new BiomeType("minecraft:plains");
  }
  getBlock(location: Vector3) {
    return new Block();
  }
  getBlockAbove() {}
  getBlockBelow() {}
  getBlockFromRay() {}
  getBlocks() {}
  getEntities() {
    return [new Entity()];
  }
  getEntitiesAtBlockLocation() {}
  getEntitiesFromRay() {}
  getLightLevel() {}
  getPlayers() {}
  getSkyLightLevel() {}
  getTopmostBlock() {}
  isChunkLoaded() {}
  placeFeature() {}
  placeFeatureRule() {}
  playSound() {}
  runCommand() {}
  setBlockPermutation() {}
  setBlockType() {}
  setWeather() {}
  spawnEntity() {}
  spawnItem() {}
  spawnParticle() {}
}

export const ItemStack = vi.fn(
  class {
    constructor(public typeId: string) {}
    readonly isStackable = false;
    readonly maxAmount = 64;
    readonly weight = 1;
    amount = 0;
    keepOnDeath = false;
    localizationKey = "item.paper";
    lockMode = ItemLockMode.none;
    nameTag = "Custom Name";
    type = new ItemType("minecraft:paper");

    clearDynamicProperties = vi.fn();
    clone = vi.fn();
    getCanDestroy = vi.fn();
    getCanPlaceOn = vi.fn();
    getComponent = vi.fn();
    getComponents = vi.fn();
    getDynamicProperty = vi.fn();
    getDynamicPropertyIds = vi.fn();
    getDynamicPropertyTotalByteCount = vi.fn();
    getLore = vi.fn();
    getRawLore = vi.fn();
    getTags = vi.fn(() => []);
    hasComponent = vi.fn();
    hasTag = vi.fn((tag) => true);
    isStackableWith = vi.fn();
    matches = vi.fn((name) => true);
    setCanDestroy = vi.fn();
    setCanPlaceOn = vi.fn();
    setDynamicProperties = vi.fn();
    setDynamicProperty = vi.fn();
    setLore = vi.fn();
  },
);

export const BlockPermutation = vi.fn(class {});

export const Block = vi.fn(
  class {
    readonly typeId = "minecraft:stone";
    readonly type = new BlockType("minecraft:stone");
    readonly x = 0;
    readonly y = 0;
    readonly z = 0;
    readonly dimension = new Dimension();
    readonly isAir = false;
    readonly isLiquid = false;
    readonly isValid = true;
    readonly isWaterlogged = false;
    readonly localizationKey = "block.stone.name";
    readonly location = VECTOR3_ZERO;
    readonly permutation = new BlockPermutation();

    above = vi.fn();
    below = vi.fn();
    bottomCenter = vi.fn();
    canBeDestroyedByLiquidSpread = vi.fn();
    canContainLiquid = vi.fn();
    center = vi.fn();
    east = vi.fn();
    getComponent = vi.fn();
    getItemStack = vi.fn();
    getLightLevel = vi.fn();
    getRedstonePower = vi.fn();
    getSkyLightLevel = vi.fn();
    getTags = vi.fn();
    hasTag = vi.fn();
    isLiquidBlocking = vi.fn();
    liquidCanFlowFromDirection = vi.fn();
    liquidSpreadCausesSpawn = vi.fn();
    matches = vi.fn((cb: (name: string, states?: {}) => void) => true);
    north = vi.fn();
    offset = vi.fn();
    setPermutation = vi.fn();
    setType = vi.fn();
    setWaterlogged = vi.fn();
    south = vi.fn();
    west = vi.fn();
  },
);

export class BiomeType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const BiomeTypes = {
  getAll: vi.fn(() => [new BiomeType("minecraft:plains")]),
  get: vi.fn((id: string) =>
    BiomeTypes.getAll().find((biome) => biome.id === idHelper(id)),
  ),
};

export class BlockType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const BlockTypes = {
  getAll: vi.fn(() => [new BlockType("minecraft:air")]),
  get: vi.fn((id: string) =>
    BlockTypes.getAll().find((block) => block.id === idHelper(id)),
  ),
};

export class EffectType {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  getName(): string {
    return this.id;
  }
}

export const EffectTypes = {
  getAll: vi.fn(() => [new EffectType("minecraft:haste")]),
  get: vi.fn((id: string) =>
    EffectTypes.getAll().find((effect) => effect.getName() === idHelper(id)),
  ),
};

export class EnchantmentType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const EnchantmentTypes = {
  getAll: vi.fn(() => [new EnchantmentType("minecraft:mending")]),
  get: vi.fn((id: string) =>
    EnchantmentTypes.getAll().find((enchant) => enchant.id === idHelper(id)),
  ),
};

export class EntityType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const EntityTypes = {
  getAll: vi.fn(() => [new EntityType("minecraft:creeper")]),
  get: vi.fn((id: string) =>
    EntityTypes.getAll().find((entity) => entity.id === idHelper(id)),
  ),
};

export class ItemType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const ItemTypes = {
  getAll: vi.fn(() => [new ItemType("minecraft:paper")]),
  get: vi.fn((id: string) =>
    ItemTypes.getAll().find((item) => item.id === idHelper(id)),
  ),
};

export class DimensionType {
  readonly typeId: string;
  constructor(typeId: string) {
    this.typeId = typeId;
  }
}

export const DimensionTypes = {
  getAll: vi.fn(() => [
    new DimensionType("minecraft:overworld"),
    new DimensionType("minecraft:nether"),
    new DimensionType("minecraft:the_end"),
  ]),
  get: vi.fn((id: string) =>
    DimensionTypes.getAll().find((dimension) => dimension.typeId === id),
  ),
};

export class InvalidEntityError {}
