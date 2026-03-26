import { describe, expect, it } from "vitest";
import { http } from "@minecraft/server-net";
import { HttpRequest } from ".";

describe("@minecraft/server-net", () => {
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
