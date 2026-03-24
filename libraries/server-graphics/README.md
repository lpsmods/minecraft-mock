# @lpsmods/minecraft-server-graphics-mock

Emulates the [@minecraft/server-graphics](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-graphics/minecraft-server-graphics) package for testing.

## What is this?

This package provides a [mocked](https://en.wikipedia.org/wiki/Mock_object) version of `@minecraft/server-graphics` for testing. It helps you run unit tests without needing the real Minecraft Bedrock scripting environment.

## Using with Vitest

Install the mock package as a dev dependency:

```sh
npm install -D @lpsmods/minecraft-server-graphics-mock
```

Then alias `@minecraft/server-graphics` in your `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      "@minecraft/server-graphics": "@lpsmods/minecraft-server-graphics-mock",
    },
  },
});
```

Now your source code can keep importing from `@minecraft/server-graphics`, and when running tests, Vitest will automatically redirect those imports to this mock package.

> Not associated with or approved by Mojang Studios or Microsoft
