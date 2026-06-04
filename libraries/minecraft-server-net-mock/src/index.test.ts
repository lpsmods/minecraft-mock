import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { http } from "@minecraft/server-net";
import * as serverNet from "@minecraft/server-net";
import { HttpRequest } from ".";

describe("@minecraft/server-net", () => {
  const peerTypes = readFileSync(
    resolve(dirname(fileURLToPath(import.meta.url)), "../../../node_modules/@minecraft/server-net/index.d.ts"),
    "utf8",
  );

  it("covers every peer runtime export and class method", () => {
    const runtimeExports = [
      ...peerTypes.matchAll(/export (?:class|enum|function) (\w+)/g),
      ...peerTypes.matchAll(/export const (\w+)/g),
    ].map((match) => match[1]);

    expect(Object.keys(serverNet).sort()).toEqual(expect.arrayContaining(runtimeExports.sort()));

    for (const [, className, body] of peerTypes.matchAll(/export class (\w+) \{([\s\S]*?)\n\}/g)) {
      const methods = [...body.matchAll(/^\s{4}(\w+)\(/gm)].map((match) => match[1]);

      for (const method of methods) {
        expect(serverNet[className as keyof typeof serverNet].prototype).toHaveProperty(method);
      }
    }
  });

  it("get 200", async () => {
    const res = await http.get("https://api.github.com");
    expect(res.status).toBe(200);
  });

  it("get 404", async () => {
    const res = await http.get("https://api.github.com/404");
    expect(res.status).toBe(404);
  });

  it("request 200", async () => {
    const req = new HttpRequest("https://api.github.com");
    const res = await http.request(req);
    expect(res.status).toBe(200);
  });

  it("request 404", async () => {
    const req = new HttpRequest("https://api.github.com/404");
    const res = await http.request(req);
    expect(res.status).toBe(404);
  });
});
