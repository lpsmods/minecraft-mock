---
"@lpsmods/minecraft-debug-utilities-mock": minor
"@lpsmods/minecraft-server-graphics-mock": minor
"@lpsmods/minecraft-server-mock": minor
"@lpsmods/minecraft-server-net-mock": minor
"@lpsmods/minecraft-server-ui-mock": minor
---

Expanded mock parity with the current peer Minecraft packages.

- `@lpsmods/minecraft-debug-utilities-mock`: added coverage that verifies all peer runtime exports are present.
- `@lpsmods/minecraft-server-graphics-mock`: added peer export and class method coverage, and formatted the `Atmospherics` setter signatures.
- `@lpsmods/minecraft-server-mock`: added peer runtime export coverage, dynamic property storage for `world`, `Entity`, and `ItemStack`, stateful world time/difficulty/spawn helpers, entity tag behavior, player messaging, dimension spawn/player helpers, richer `ItemStack` cloning, missing mock API classes/errors, and tick/HUD constants.
- `@lpsmods/minecraft-server-net-mock`: added peer export and class method coverage, tracked pending HTTP requests, request cancellation, timeout handling, request body/header/method forwarding, and test-only helpers for fulfilling or rejecting pending requests.
- `@lpsmods/minecraft-server-ui-mock`: replaced example-style tests with form behavior coverage, added peer export and class method checks, modeled form state for action/message/modal builders, returned realistic form responses, added modal option/default support, modeled `UIManager`, and made `uiManager` a singleton instance.
