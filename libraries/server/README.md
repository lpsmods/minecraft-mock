# @lpsmods/minecraft-server-mock

![Version](https://shields.io/npm/v/@lpsmods/minecraft-server-mock)
[![Downloads](https://shields.io/npm/dm/@lpsmods/minecraft-server-mock)](https://www.npmjs.com/package/@lpsmods/minecraft-server-mock)
[![Issues](https://img.shields.io/github/issues/lpsmods/minecraft-server-mock)](https://github.com/lpsmods/minecraft-server-mock/issues)

Emulates the [@minecraft/server](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server) package for testing.

## What is this?

This package provides a [mocked](https://en.wikipedia.org/wiki/Mock_object) version of `@minecraft/server` for testing. It helps you run unit tests without needing the real Minecraft Bedrock scripting environment.

## Using with Vitest

Install the mock package as a dev dependency:

```sh
npm install -D @lpsmods/minecraft-server-mock
```

Then alias `@minecraft/server` in your `vitest.config.ts`:

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
    },
  },
});
```

Now your source code can keep importing from `@minecraft/server`, and when running tests, Vitest will automatically redirect those imports to this mock package.

> Not associated with or approved by Mojang Studios or Microsoft
