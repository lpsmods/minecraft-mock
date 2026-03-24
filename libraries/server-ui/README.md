# @lpsmods/minecraft-server-ui-mock

![Version](https://shields.io/npm/v/@lpsmods/minecraft-server-ui-mock)
[![Downloads](https://shields.io/npm/dm/@lpsmods/minecraft-server-ui-mock)](https://www.npmjs.com/package/@lpsmods/minecraft-server-ui-mock)
[![Issues](https://img.shields.io/github/issues/lpsmods/minecraft-server-ui-mock)](https://github.com/lpsmods/minecraft-server-ui-mock/issues)

Emulates the [@minecraft/server-ui](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-ui/minecraft-server-ui) package for testing.

## What is this?

This package provides a [mocked](https://en.wikipedia.org/wiki/Mock_object) version of `@minecraft/server-ui` for testing. It helps you run unit tests without needing the real Minecraft Bedrock scripting environment.

## Using with Vitest

Install the mock package as a dev dependency:

```sh
npm install -D @lpsmods/minecraft-server-mock @lpsmods/minecraft-server-ui-mock
```

Then alias `@minecraft/server-ui` in your `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    server: {
      deps: {
        inline: ["@minecraft/math"],
      },
    },
  },
  resolve: {
    alias: {
      "@minecraft/server": "@lpsmods/minecraft-server-mock",
      "@minecraft/server-ui": "@lpsmods/minecraft-server-ui-mock",
    },
  },
});
```

Now your source code can keep importing from `@minecraft/server-ui`, and when running tests, Vitest will automatically redirect those imports to this mock package.

> Not associated with or approved by Mojang Studios or Microsoft
