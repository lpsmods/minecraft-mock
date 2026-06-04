import { readFileSync } from "node:fs";
import { createServer, type Server } from "node:http";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { http } from "@minecraft/server-net";
import * as serverNet from "@minecraft/server-net";
import { HttpRequest } from ".";

describe("@minecraft/server-net", () => {
  let server: Server;
  let serverUrl: string;

  const peerTypes = readFileSync(
    resolve(dirname(fileURLToPath(import.meta.url)), "../../../node_modules/@minecraft/server-net/index.d.ts"),
    "utf8",
  );

  beforeAll(async () => {
    server = createServer((req, res) => {
      if (req.url === "/404") {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200);
      res.end("OK");
    });

    await new Promise<void>((resolve) => {
      server.listen(0, "127.0.0.1", resolve);
    });

    const address = server.address();
    if (address === null || typeof address === "string") {
      throw new Error("Expected HTTP test server to listen on a TCP port.");
    }

    serverUrl = `http://127.0.0.1:${address.port}`;
  });

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  });

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
    const res = await http.get(serverUrl);
    expect(res.status).toBe(200);
  });

  it("get 404", async () => {
    const res = await http.get(`${serverUrl}/404`);
    expect(res.status).toBe(404);
  });

  it("request 200", async () => {
    const req = new HttpRequest(serverUrl);
    const res = await http.request(req);
    expect(res.status).toBe(200);
  });

  it("request 404", async () => {
    const req = new HttpRequest(`${serverUrl}/404`);
    const res = await http.request(req);
    expect(res.status).toBe(404);
  });
});
