# @lpsmods/minecraft-debug-utilities-mock

![Version](https://shields.io/npm/v/@lpsmods/minecraft-debug-utilities-mock)
[![Downloads](https://shields.io/npm/dm/@lpsmods/minecraft-debug-utilities-mock)](https://www.npmjs.com/package/@lpsmods/minecraft-debug-utilities-mock)
[![Issues](https://img.shields.io/github/issues/lpsmods/minecraft-mock)](https://github.com/lpsmods/minecraft-mock/issues)

Emulates the [@minecraft/debug-utilities](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/debug-utilities/minecraft-debug-utilities) package for testing.

## What is this?

This package provides a [mocked](https://en.wikipedia.org/wiki/Mock_object) version of `@minecraft/debug-utilities` for testing. It helps you run unit tests without needing the real Minecraft Bedrock scripting environment.

## Using with Vitest

Install the mock package as a dev dependency:

```sh
npm install -D @lpsmods/minecraft-debug-utilities-mock
```

Then alias `@minecraft/debug-utilities` in your `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      "@minecraft/debug-utilities": "@lpsmods/minecraft-debug-utilities-mock",
    },
  },
});
```

Now your source code can keep importing from `@minecraft/debug-utilities`, and when running tests, Vitest will automatically redirect those imports to this mock package.

> Not associated with or approved by Mojang Studios or Microsoft
