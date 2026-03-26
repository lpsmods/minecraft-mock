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
export enum BlockComponentTypes {
  FluidContainer = "minecraft:fluid_container",
  Inventory = "minecraft:inventory",
  MapColor = "minecraft:map_color",
  Movable = "minecraft:movable",
  Piston = "minecraft:piston",
  PrecipitationInteractions = "minecraft:precipitation_interactions",
  RecordPlayer = "minecraft:record_player",
  RedstoneProducer = "minecraft:redstone_producer",
  Sign = "minecraft:sign",
}

export enum BlockPistonState {
  Expanded = "Expanded",
  Expanding = "Expanding",
  Retracted = "Retracted",
  Retracting = "Retracting",
}

export enum BlockVolumeIntersection {
  Disjoint = 0,
  Contains = 1,
  Intersects = 2,
}

export enum BookErrorReason {
  ExceedsMaxPageLength = "ExceedsMaxPageLength",
  ExceedsMaxPages = "ExceedsMaxPages",
  ExceedsTitleLength = "ExceedsTitleLength",
}

export enum ButtonState {
  Pressed = "Pressed",
  Released = "Released",
}

export enum CommandPermissionLevel {
  Any = 0,
  GameDirectors = 1,
  Admin = 2,
  Host = 3,
  Owner = 4,
}

export enum ContainerRulesErrorReason {
  BannedItem = "BannedItem",
  NestedStorageItem = "NestedStorageItem",
  NotAllowedItem = "NotAllowedItem",
  OverWeightLimit = "OverWeightLimit",
  ZeroWeightItem = "ZeroWeightItem",
}

export enum ControlScheme {
  CameraRelative = "CameraRelative",
  CameraRelativeStrafe = "CameraRelativeStrafe",
  LockedPlayerRelativeStrafe = "LockedPlayerRelativeStrafe",
  PlayerRelative = "PlayerRelative",
  PlayerRelativeStrafe = "PlayerRelativeStrafe",
}

export enum CustomCommandErrorReason {
  AlreadyRegistered = "AlreadyRegistered",
  EnumDependencyMissing = "EnumDependencyMissing",
  NamespaceMismatch = "NamespaceMismatch",
  ParameterLimit = "ParameterLimit",
  RegistryInvalid = "RegistryInvalid",
  RegistryReadOnly = "RegistryReadOnly",
}

export enum CustomCommandParamType {
  BlockType = "BlockType",
  Boolean = "Boolean",
  EntitySelector = "EntitySelector",
  EntityType = "EntityType",
  Enum = "Enum",
  Float = "Float",
  Integer = "Integer",
  ItemType = "ItemType",
  Location = "Location",
  PlayerSelector = "PlayerSelector",
  String = "String",
}

export enum CustomCommandSource {
  Block = "Block",
  Entity = "Entity",
  NPCDialogue = "NPCDialogue",
  Server = "Server",
}

export enum CustomCommandStatus {
  Success = 0,
  Failure = 1,
}

export enum CustomComponentNameErrorReason {
  NoNamespace = 1,
  DisallowedNamespace = 2,
}

export enum Difficulty {
  Easy = "Easy",
  Hard = "Hard",
  Normal = "Normal",
  Peaceful = "Peaceful",
}

export enum Direction {
  Down = "Down",
  East = "East",
  North = "North",
  South = "South",
  Up = "Up",
  West = "West",
}

export enum DisplaySlotId {
  BelowName = "BelowName",
  List = "List",
  Sidebar = "Sidebar",
}

export enum DyeColor {
  Black = "Black",
  Blue = "Blue",
  Brown = "Brown",
  Cyan = "Cyan",
  Gray = "Gray",
  Green = "Green",
  LightBlue = "LightBlue",
  Lime = "Lime",
  Magenta = "Magenta",
  Orange = "Orange",
  Pink = "Pink",
  Purple = "Purple",
  Red = "Red",
  Silver = "Silver",
  White = "White",
  Yellow = "Yellow",
}

export enum EasingType {
  InBack = "InBack",
  InBounce = "InBounce",
  InCirc = "InCirc",
  InCubic = "InCubic",
  InElastic = "InElastic",
  InExpo = "InExpo",
  InOutBack = "InOutBack",
  InOutBounce = "InOutBounce",
  InOutCirc = "InOutCirc",
  InOutCubic = "InOutCubic",
  InOutElastic = "InOutElastic",
  InOutExpo = "InOutExpo",
  InOutQuad = "InOutQuad",
  InOutQuart = "InOutQuart",
  InOutQuint = "InOutQuint",
  InOutSine = "InOutSine",
  InQuad = "InQuad",
  InQuart = "InQuart",
  InQuint = "InQuint",
  InSine = "InSine",
  Linear = "Linear",
  OutBack = "OutBack",
  OutBounce = "OutBounce",
  OutCirc = "OutCirc",
  OutCubic = "OutCubic",
  OutElastic = "OutElastic",
  OutExpo = "OutExpo",
  OutQuad = "OutQuad",
  OutQuart = "OutQuart",
  OutQuint = "OutQuint",
  OutSine = "OutSine",
  Spring = "Spring",
}

export enum EnchantmentSlot {
  ArmorFeet = "ArmorFeet",
  ArmorHead = "ArmorHead",
  ArmorLegs = "ArmorLegs",
  ArmorTorso = "ArmorTorso",
  Axe = "Axe",
  Bow = "Bow",
  CarrotStick = "CarrotStick",
  CosmeticHead = "CosmeticHead",
  Crossbow = "Crossbow",
  Elytra = "Elytra",
  FishingRod = "FishingRod",
  Flintsteel = "Flintsteel",
  Hoe = "Hoe",
  MeleeSpear = "MeleeSpear",
  Pickaxe = "Pickaxe",
  Shears = "Shears",
  Shield = "Shield",
  Shovel = "Shovel",
  Spear = "Spear",
  Sword = "Sword",
}

export enum EntityAttachPoint {
  Body = "Body",
  BreathingPoint = "BreathingPoint",
  DropAttachPoint = "DropAttachPoint",
  ExplosionPoint = "ExplosionPoint",
  Eyes = "Eyes",
  Feet = "Feet",
  Head = "Head",
  Mouth = "Mouth",
  WeaponAttachPoint = "WeaponAttachPoint",
}

export enum EntityComponentTypes {
  AddRider = "minecraft:addrider",
  Ageable = "minecraft:ageable",
  Breathable = "minecraft:breathable",
  CanClimb = "minecraft:can_climb",
  CanFly = "minecraft:can_fly",
  CanPowerJump = "minecraft:can_power_jump",
  Color = "minecraft:color",
  Color2 = "minecraft:color2",
  CursorInventory = "minecraft:cursor_inventory",
  Equippable = "minecraft:equippable",
  FireImmune = "minecraft:fire_immune",
  FloatsInLiquid = "minecraft:floats_in_liquid",
  FlyingSpeed = "minecraft:flying_speed",
  FrictionModifier = "minecraft:friction_modifier",
  Healable = "minecraft:healable",
  Health = "minecraft:health",
  Inventory = "minecraft:inventory",
  IsBaby = "minecraft:is_baby",
  IsCharged = "minecraft:is_charged",
  IsChested = "minecraft:is_chested",
  IsDyeable = "minecraft:is_dyeable",
  IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
  IsIgnited = "minecraft:is_ignited",
  IsIllagerCaptain = "minecraft:is_illager_captain",
  IsSaddled = "minecraft:is_saddled",
  IsShaking = "minecraft:is_shaking",
  IsSheared = "minecraft:is_sheared",
  IsStackable = "minecraft:is_stackable",
  IsStunned = "minecraft:is_stunned",
  IsTamed = "minecraft:is_tamed",
  Item = "minecraft:item",
  LavaMovement = "minecraft:lava_movement",
  Leashable = "minecraft:leashable",
  MarkVariant = "minecraft:mark_variant",
  Movement = "minecraft:movement",
  MovementAmphibious = "minecraft:movement.amphibious",
  MovementBasic = "minecraft:movement.basic",
  MovementFly = "minecraft:movement.fly",
  MovementGeneric = "minecraft:movement.generic",
  MovementGlide = "minecraft:movement.glide",
  MovementHover = "minecraft:movement.hover",
  MovementJump = "minecraft:movement.jump",
  MovementSkip = "minecraft:movement.skip",
  MovementSway = "minecraft:movement.sway",
  NavigationClimb = "minecraft:navigation.climb",
  NavigationFloat = "minecraft:navigation.float",
  NavigationFly = "minecraft:navigation.fly",
  NavigationGeneric = "minecraft:navigation.generic",
  NavigationHover = "minecraft:navigation.hover",
  NavigationWalk = "minecraft:navigation.walk",
  OnFire = "minecraft:onfire",
  Exhaustion = "minecraft:player.exhaustion",
  Hunger = "minecraft:player.hunger",
  Saturation = "minecraft:player.saturation",
  Projectile = "minecraft:projectile",
  PushThrough = "minecraft:push_through",
  Rideable = "minecraft:rideable",
  Riding = "minecraft:riding",
  Scale = "minecraft:scale",
  SkinId = "minecraft:skin_id",
  Strength = "minecraft:strength",
  Tameable = "minecraft:tameable",
  TameMount = "minecraft:tamemount",
  TypeFamily = "minecraft:type_family",
  UnderwaterMovement = "minecraft:underwater_movement",
  Variant = "minecraft:variant",
  WantsJockey = "minecraft:wants_jockey",
}

export enum EntityDamageCause {
  anvil = "anvil",
  blockExplosion = "blockExplosion",
  campfire = "campfire",
  charging = "charging",
  contact = "contact",
  drowning = "drowning",
  entityAttack = "entityAttack",
  entityExplosion = "entityExplosion",
  fall = "fall",
  fallingBlock = "fallingBlock",
  fire = "fire",
  fireTick = "fireTick",
  fireworks = "fireworks",
  flyIntoWall = "flyIntoWall",
  freezing = "freezing",
  lava = "lava",
  lightning = "lightning",
  maceSmash = "maceSmash",
  magic = "magic",
  magma = "magma",
  none = "none",
  override = "override",
  piston = "piston",
  projectile = "projectile",
  ramAttack = "ramAttack",
  selfDestruct = "selfDestruct",
  sonicBoom = "sonicBoom",
  soulCampfire = "soulCampfire",
  stalactite = "stalactite",
  stalagmite = "stalagmite",
  starve = "starve",
  suffocation = "suffocation",
  temperature = "temperature",
  thorns = "thorns",
  "void" = "void",
  wither = "wither",
}

export enum EntityHealCause {
  Heal = "Heal",
  Regeneration = "Regeneration",
  SelfHeal = "SelfHeal",
}

export enum EntityInitializationCause {
  Born = "Born",
  Event = "Event",
  Loaded = "Loaded",
  Spawned = "Spawned",
  Transformed = "Transformed",
}

export enum EntitySwingSource {
  Attack = "Attack",
  Build = "Build",
  DropItem = "DropItem",
  Event = "Event",
  Interact = "Interact",
  Mine = "Mine",
  None = "None",
  ThrowItem = "ThrowItem",
  UseItem = "UseItem",
}

export enum EquipmentSlot {
  Chest = "Chest",
  Feet = "Feet",
  Head = "Head",
  Legs = "Legs",
  Mainhand = "Mainhand",
  Offhand = "Offhand",
}

export enum FluidType {
  Lava = "Lava",
  Potion = "Potion",
  PowderSnow = "PowderSnow",
  Water = "Water",
}

export enum GameMode {
  Adventure = "Adventure",
  Creative = "Creative",
  Spectator = "Spectator",
  Survival = "Survival",
}

export enum GameRule {
  CommandBlockOutput = "commandBlockOutput",
  CommandBlocksEnabled = "commandBlocksEnabled",
  DoDayLightCycle = "doDayLightCycle",
  DoEntityDrops = "doEntityDrops",
  DoFireTick = "doFireTick",
  DoImmediateRespawn = "doImmediateRespawn",
  DoInsomnia = "doInsomnia",
  DoLimitedCrafting = "doLimitedCrafting",
  DoMobLoot = "doMobLoot",
  DoMobSpawning = "doMobSpawning",
  DoTileDrops = "doTileDrops",
  DoWeatherCycle = "doWeatherCycle",
  DrowningDamage = "drowningDamage",
  FallDamage = "fallDamage",
  FireDamage = "fireDamage",
  FreezeDamage = "freezeDamage",
  FunctionCommandLimit = "functionCommandLimit",
  KeepInventory = "keepInventory",
  MaxCommandChainLength = "maxCommandChainLength",
  MobGriefing = "mobGriefing",
  NaturalRegeneration = "naturalRegeneration",
  PlayersSleepingPercentage = "playersSleepingPercentage",
  ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks",
  Pvp = "pvp",
  RandomTickSpeed = "randomTickSpeed",
  RecipesUnlock = "recipesUnlock",
  RespawnBlocksExplode = "respawnBlocksExplode",
  SendCommandFeedback = "sendCommandFeedback",
  ShowBorderEffect = "showBorderEffect",
  ShowCoordinates = "showCoordinates",
  ShowDaysPlayed = "showDaysPlayed",
  ShowDeathMessages = "showDeathMessages",
  ShowRecipeMessages = "showRecipeMessages",
  ShowTags = "showTags",
  SpawnRadius = "spawnRadius",
  TntExplodes = "tntExplodes",
  TntExplosionDropDecay = "tntExplosionDropDecay",
}

export enum GraphicsMode {
  Deferred = "Deferred",
  Fancy = "Fancy",
  RayTraced = "RayTraced",
  Simple = "Simple",
}

export enum HeldItemOption {
  AnyItem = "AnyItem",
  NoItem = "NoItem",
}

export enum HudElement {
  PaperDoll = 0,
  Armor = 1,
  ToolTips = 2,
  TouchControls = 3,
  Crosshair = 4,
  Hotbar = 5,
  Health = 6,
  ProgressBar = 7,
  Hunger = 8,
  AirBubbles = 9,
  HorseHealth = 10,
  StatusEffects = 11,
  ItemText = 12,
}

export enum HudVisibility {
  Hide = 0,
  Reset = 1,
}

export enum InputButton {
  Jump = "Jump",
  Sneak = "Sneak",
}

export enum InputMode {
  Gamepad = "Gamepad",
  KeyboardAndMouse = "KeyboardAndMouse",
  MotionController = "MotionController",
  Touch = "Touch",
}

export enum InputPermissionCategory {
  Camera = 1,
  Movement = 2,
  LateralMovement = 4,
  Sneak = 5,
  Jump = 6,
  Mount = 7,
  Dismount = 8,
  MoveForward = 9,
  MoveBackward = 10,
  MoveLeft = 11,
  MoveRight = 12,
}

export enum ItemComponentTypes {
  Book = "minecraft:book",
  Compostable = "minecraft:compostable",
  Cooldown = "minecraft:cooldown",
  Durability = "minecraft:durability",
  Dyeable = "minecraft:dyeable",
  Enchantable = "minecraft:enchantable",
  Food = "minecraft:food",
  Inventory = "minecraft:inventory",
  Potion = "minecraft:potion",
}

export enum ItemLockMode {
  inventory = "inventory",
  none = "none",
  slot = "slot",
}

export enum LiquidSettings {
  ApplyWaterlogging = "ApplyWaterlogging",
  IgnoreWaterlogging = "IgnoreWaterlogging",
}

export enum LiquidType {
  Water = "Water",
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

export enum MovementType {
  Immovable = "Immovable",
  Popped = "Popped",
  Push = "Push",
  PushPull = "PushPull",
}

export enum NamespaceNameErrorReason {
  DisallowedNamespace = "DisallowedNamespace",
  NoNamespace = "NoNamespace",
}

export enum ObjectiveSortOrder {
  Ascending = 0,
  Descending = 1,
}

export enum PaletteColor {
  White = 0,
  Orange = 1,
  Magenta = 2,
  LightBlue = 3,
  Yellow = 4,
  Lime = 5,
  Pink = 6,
  Gray = 7,
  Silver = 8,
  Cyan = 9,
  Purple = 10,
  Blue = 11,
  Brown = 12,
  Green = 13,
  Red = 14,
  Black = 15,
}

export enum PlatformType {
  Console = "Console",
  Desktop = "Desktop",
  Mobile = "Mobile",
}

export enum PlayerInventoryType {
  Hotbar = "Hotbar",
  Inventory = "Inventory",
}

export enum PlayerPermissionLevel {
  Visitor = 0,
  Member = 1,
  Operator = 2,
  Custom = 3,
}

export enum ScoreboardIdentityType {
  Entity = "Entity",
  FakePlayer = "FakePlayer",
  Player = "Player",
}

export enum ScriptEventSource {
  Block = "Block",
  Entity = "Entity",
  NPCDialogue = "NPCDialogue",
  Server = "Server",
}

export enum SignSide {
  Back = "Back",
  Front = "Front",
}

export enum StickyType {
  None = "None",
  Same = "Same",
}

export enum StructureAnimationMode {
  Blocks = "Blocks",
  Layers = "Layers",
  None = "None",
}

export enum StructureMirrorAxis {
  None = "None",
  X = "X",
  XZ = "XZ",
  Z = "Z",
}

export enum StructureRotation {
  None = "None",
  Rotate180 = "Rotate180",
  Rotate270 = "Rotate270",
  Rotate90 = "Rotate90",
}

export enum StructureSaveMode {
  Memory = "Memory",
  World = "World",
}

export enum TickingAreaErrorReason {
  IdentifierAlreadyExists = "IdentifierAlreadyExists",
  OverChunkLimit = "OverChunkLimit",
  SideLengthExceeded = "SideLengthExceeded",
  UnknownIdentifier = "UnknownIdentifier",
}

export enum TimeOfDay {
  Day = 1000,
  Noon = 6000,
  Sunset = 12000,
  Night = 13000,
  Midnight = 18000,
  Sunrise = 23000,
}

export enum TintMethod {
  BirchFoliage = "BirchFoliage",
  DefaultFoliage = "DefaultFoliage",
  DryFoliage = "DryFoliage",
  EvergreenFoliage = "EvergreenFoliage",
  Grass = "Grass",
  None = "None",
  Water = "Water",
}

export enum WeatherType {
  Clear = "Clear",
  Rain = "Rain",
  Thunder = "Thunder",
}

export class ScoreboardIdentity {
  readonly displayName = "";
  readonly id = 0;
  readonly isValid = true;
  readonly "type" = ScoreboardIdentityType.Entity;
  getEntity() {
    return new Entity();
  }
}
export class ScoreboardScoreInfo {
  readonly participant = new ScoreboardIdentity();
  readonly score = 0;
}
export class ScoreboardObjective {
  readonly displayName = "";
  readonly id = "";
  readonly isValid = true;
  getParticipants() {
    return [new ScoreboardIdentity()];
  }
  getScore(...args: any[]) {
    return 0;
  }
  getScores() {
    return [new ScoreboardScoreInfo()];
  }
  hasParticipant(...args: any[]) {
    return true;
  }
  removeParticipant(...args: any[]) {
    return true;
  }
  setScore(...args: any[]) {}

  addScore(...args: any[]) {}
}

export class WorldAfterEvents {
  readonly blockExplode = eventSignal;
  readonly buttonPush = eventSignal;
  readonly dataDrivenEntityTrigger = eventSignal;
  readonly effectAdd = eventSignal;
  readonly entityDie = eventSignal;
  readonly entityHeal = eventSignal;
  readonly entityHealthChanged = eventSignal;
  readonly entityHitBlock = eventSignal;
  readonly entityHitEntity = eventSignal;
  readonly entityHurt = eventSignal;
  readonly entityItemDrop = eventSignal;
  readonly entityItemPickup = eventSignal;
  readonly entityLoad = eventSignal;
  readonly entityRemove = eventSignal;
  readonly entitySpawn = eventSignal;
  readonly explosion = eventSignal;
  readonly gameRuleChange = eventSignal;
  readonly itemCompleteUse = eventSignal;
  readonly itemReleaseUse = eventSignal;
  readonly itemStartUse = eventSignal;
  readonly itemStartUseOn = eventSignal;
  readonly itemStopUse = eventSignal;
  readonly itemStopUseOn = eventSignal;
  readonly itemUse = eventSignal;
  readonly leverAction = eventSignal;
  readonly pistonActivate = eventSignal;
  readonly playerBreakBlock = eventSignal;
  readonly playerButtonInput = eventSignal;
  readonly playerDimensionChange = eventSignal;
  readonly playerEmote = eventSignal;
  readonly playerGameModeChange = eventSignal;
  readonly playerHotbarSelectedSlotChange = eventSignal;
  readonly playerInputModeChange = eventSignal;
  readonly playerInputPermissionCategoryChange = eventSignal;
  readonly playerInteractWithBlock = eventSignal;
  readonly playerInteractWithEntity = eventSignal;
  readonly playerInventoryItemChange = eventSignal;
  readonly playerJoin = eventSignal;
  readonly playerLeave = eventSignal;
  readonly playerPlaceBlock = eventSignal;
  readonly playerSpawn = eventSignal;
  readonly playerSwingStart = eventSignal;
  readonly pressurePlatePop = eventSignal;
  readonly pressurePlatePush = eventSignal;
  readonly projectileHitBlock = eventSignal;
  readonly projectileHitEntity = eventSignal;
  readonly targetBlockHit = eventSignal;
  readonly tripWireTrip = eventSignal;
  readonly weatherChange = eventSignal;
  readonly worldLoad = eventSignal;
}
export class WorldBeforeEvents {
  readonly effectAdd = eventSignal;
  readonly entityHeal = eventSignal;
  readonly entityHurt = eventSignal;
  readonly entityItemPickup = eventSignal;
  readonly entityRemove = eventSignal;
  readonly explosion = eventSignal;
  readonly itemUse = eventSignal;
  readonly playerBreakBlock = eventSignal;
  readonly playerGameModeChange = eventSignal;
  readonly playerInteractWithBlock = eventSignal;
  readonly playerInteractWithEntity = eventSignal;
  readonly playerLeave = eventSignal;
  readonly weatherChange = eventSignal;
}
export class GameRules {
  commandBlockOutput = true;
  commandBlocksEnabled = true;
  doDayLightCycle = true;
  doEntityDrops = true;
  doFireTick = true;
  doImmediateRespawn = true;
  doInsomnia = true;
  doLimitedCrafting = true;
  doMobLoot = true;
  doMobSpawning = true;
  doTileDrops = true;
  doWeatherCycle = true;
  drowningDamage = true;
  fallDamage = true;
  fireDamage = true;
  freezeDamage = true;
  functionCommandLimit = 0;
  keepInventory = true;
  maxCommandChainLength = 0;
  mobGriefing = true;
  naturalRegeneration = true;
  playersSleepingPercentage = 0;
  projectilesCanBreakBlocks = true;
  pvp = true;
  randomTickSpeed = 0;
  recipesUnlock = true;
  respawnBlocksExplode = true;
  sendCommandFeedback = true;
  showBorderEffect = true;
  showCoordinates = true;
  showDaysPlayed = true;
  showDeathMessages = true;
  showRecipeMessages = true;
  showTags = true;
  spawnRadius = 0;
  tntExplodes = true;
  tntExplosionDropDecay = true;
}
export class Scoreboard {
  addObjective(...args: string[]) {
    return new ScoreboardObjective();
  }
  clearObjectiveAtDisplaySlot(...args: string[]) {
    return new ScoreboardObjective();
  }
  getObjective(...args: string[]) {
    return new ScoreboardObjective();
  }
  getObjectiveAtDisplaySlot(...args: string[]) {
    return {
      objective: new ScoreboardObjective(),
      sortOrder: ObjectiveSortOrder.Ascending,
    };
  }
  getObjectives() {
    return [new ScoreboardObjective()];
  }
  getParticipants() {
    return [new ScoreboardIdentity()];
  }
  removeObjective(...args: string[]) {
    return true;
  }
  setObjectiveAtDisplaySlot(...args: string[]) {
    return new ScoreboardObjective();
  }
}
export class Structure {
  readonly id = "";
  readonly isValid = true;
  readonly size = { x: 0, y: 0, z: 0 };
  getBlockPermutation(...args: string[]) {
    return new BlockPermutation();
  }
  getIsWaterlogged(...args: string[]) {
    return true;
  }
  saveAs(...args: string[]) {
    return new Structure();
  }
  saveToWorld() {}
  setBlockPermutation(...args: string[]) {}
}
export class StructureManager {
  createEmpty(...args: string[]) {
    return new Structure();
  }
  createFromWorld(...args: string[]) {
    return new Structure();
  }
  delete(...args: string[]) {
    return true;
  }
  get(...args: string[]) {
    return new Structure();
  }
  getWorldStructureIds() {
    return [""];
  }
  place(...args: string[]) {}
  placeJigsaw(...args: string[]) {
    return {
      max: { x: 0, y: 0, z: 0 },
      min: { x: 0, y: 0, z: 0 },
    };
  }
  placeJigsawStructure(...args: string[]) {
    return {
      max: { x: 0, y: 0, z: 0 },
      min: { x: 0, y: 0, z: 0 },
    };
  }
}
export class TickingAreaManager {
  readonly chunkCount = 0;
  readonly maxChunkCount = 0;
  createTickingArea(...args: string[]) {
    return new Promise<void>((resolve) => resolve());
  }
  getAllTickingAreas() {
    return [
      {
        boundingBox: {
          max: { x: 0, y: 0, z: 0 },
          min: { x: 0, y: 0, z: 0 },
        },
        chunkCount: 0,
        dimension: new Dimension(),
        identifier: "",
        isFullyLoaded: true,
      },
    ];
  }
  getTickingArea(...args: string[]) {
    return {
      boundingBox: {
        max: { x: 0, y: 0, z: 0 },
        min: { x: 0, y: 0, z: 0 },
      },
      chunkCount: 0,
      dimension: new Dimension(),
      identifier: "",
      isFullyLoaded: true,
    };
  }
  hasCapacity(...args: string[]) {
    return true;
  }
  hasTickingArea(...args: string[]) {
    return true;
  }
  removeAllTickingAreas() {}
  removeTickingArea(...args: string[]) {}
}
export class World {
  readonly afterEvents = new WorldAfterEvents();
  readonly beforeEvents = new WorldBeforeEvents();
  readonly gameRules = new GameRules();
  readonly isHardcore = true;
  readonly scoreboard = new Scoreboard();
  readonly seed = "";
  readonly structureManager = new StructureManager();
  readonly tickingAreaManage = new TickingAreaManager();

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
}

export const world = new World();

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

export class ItemStack {
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
}

export const BlockPermutation = vi.fn(class {});

export class Block {
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
}

export class BiomeType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const BiomeTypes = {
  getAll: vi.fn(() => [new BiomeType("minecraft:plains")]),
  get: vi.fn((id: string) => BiomeTypes.getAll().find((biome) => biome.id === idHelper(id))),
};

export class BlockType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const BlockTypes = {
  getAll: vi.fn(() => [new BlockType("minecraft:air")]),
  get: vi.fn((id: string) => BlockTypes.getAll().find((block) => block.id === idHelper(id))),
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
  get: vi.fn((id: string) => EffectTypes.getAll().find((effect) => effect.getName() === idHelper(id))),
};

export class EnchantmentType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const EnchantmentTypes = {
  getAll: vi.fn(() => [new EnchantmentType("minecraft:mending")]),
  get: vi.fn((id: string) => EnchantmentTypes.getAll().find((enchant) => enchant.id === idHelper(id))),
};

export class EntityType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const EntityTypes = {
  getAll: vi.fn(() => [new EntityType("minecraft:creeper")]),
  get: vi.fn((id: string) => EntityTypes.getAll().find((entity) => entity.id === idHelper(id))),
};

export class ItemType {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export const ItemTypes = {
  getAll: vi.fn(() => [new ItemType("minecraft:paper")]),
  get: vi.fn((id: string) => ItemTypes.getAll().find((item) => item.id === idHelper(id))),
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
  get: vi.fn((id: string) => DimensionTypes.getAll().find((dimension) => dimension.typeId === idHelper(id))),
};

export class InvalidEntityError {}
