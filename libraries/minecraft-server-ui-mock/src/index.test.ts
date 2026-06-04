import { world } from "@minecraft/server";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as serverUi from "@minecraft/server-ui";
const {
  ActionFormData,
  ActionFormResponse,
  FormCancelationReason,
  FormRejectError,
  FormRejectReason,
  FormResponse,
  MessageFormData,
  MessageFormResponse,
  ModalFormData,
  ModalFormResponse,
  UIManager,
  uiManager,
} = serverUi;
import { describe, expect, it } from "vitest";

describe("@minecraft/server-ui", () => {
  const player = world.getPlayers()[0];
  const peerTypes = readFileSync(
    resolve(dirname(fileURLToPath(import.meta.url)), "../../../node_modules/@minecraft/server-ui/index.d.ts"),
    "utf8",
  );

  it("covers every peer runtime export and class method", () => {
    const runtimeExports = [
      ...peerTypes.matchAll(/export (?:class|enum) (\w+)/g),
      ...peerTypes.matchAll(/export const (\w+)/g),
    ].map((match) => match[1]);

    expect(Object.keys(serverUi).sort()).toEqual(expect.arrayContaining(runtimeExports.sort()));

    for (const [, className, body] of peerTypes.matchAll(/export class (\w+) \{([\s\S]*?)\n\}/g)) {
      const methods = [...body.matchAll(/^\s{4}(\w+)\(/gm)].map((match) => match[1]);

      for (const method of methods) {
        expect(serverUi[className as keyof typeof serverUi].prototype).toHaveProperty(method);
      }
    }
  });

  it("exports peer enum values", () => {
    expect(FormCancelationReason.UserBusy).toBe("UserBusy");
    expect(FormCancelationReason.UserClosed).toBe("UserClosed");
    expect(FormRejectReason.MalformedResponse).toBe("MalformedResponse");
    expect(FormRejectReason.PlayerQuit).toBe("PlayerQuit");
    expect(FormRejectReason.ServerShutdown).toBe("ServerShutdown");
  });

  it("models base and rejected form responses", () => {
    expect(new FormResponse().canceled).toBe(false);
    expect(new FormResponse(true, FormCancelationReason.UserClosed).cancelationReason).toBe(
      FormCancelationReason.UserClosed,
    );
    expect(new FormRejectError(FormRejectReason.PlayerQuit).reason).toBe(FormRejectReason.PlayerQuit);
  });

  it("builds and shows action forms", async () => {
    const form = new ActionFormData()
      .title("Actions")
      .body("Pick one")
      .header("Header")
      .label("Label")
      .divider()
      .button("First", "textures/items/apple")
      .button({ translate: "gui.cancel" });

    const response = await form.show(player);

    expect(response).toBeInstanceOf(ActionFormResponse);
    expect(response.canceled).toBe(false);
    expect(response.selection).toBe(0);
    expect(form.titleText).toBe("Actions");
    expect(form.bodyText).toBe("Pick one");
    expect(form.buttons).toEqual([
      { text: "First", iconPath: "textures/items/apple" },
      { text: { translate: "gui.cancel" }, iconPath: undefined },
    ]);
    expect(form.elements.map((element) => element.type)).toEqual(["header", "label", "divider", "button", "button"]);
  });

  it("builds and shows message forms", async () => {
    const form = new MessageFormData().title("Confirm").body("Continue?").button1("Yes").button2("No");
    const response = await form.show(player);

    expect(response).toBeInstanceOf(MessageFormResponse);
    expect(response.canceled).toBe(false);
    expect(response.selection).toBe(0);
    expect(form.titleText).toBe("Confirm");
    expect(form.bodyText).toBe("Continue?");
    expect(form.button1Text).toBe("Yes");
    expect(form.button2Text).toBe("No");
  });

  it("builds and shows modal forms", async () => {
    const form = new ModalFormData()
      .title("Settings")
      .header("Basics")
      .label("Choose values")
      .divider()
      .toggle("Enabled", { defaultValue: true, tooltip: "Toggle feature" })
      .slider("Volume", 0, 10, { defaultValue: 5, valueStep: 1, tooltip: "Set volume" })
      .dropdown("Mode", ["A", "B", "C"], { defaultValueIndex: 2, tooltip: "Pick mode" })
      .textField("Name", "Type here", { defaultValue: "Steve", tooltip: "Display name" })
      .submitButton("Save");

    const response = await form.show(player);

    expect(response).toBeInstanceOf(ModalFormResponse);
    expect(response.canceled).toBe(false);
    expect(response.formValues).toEqual([true, 5, 2, "Steve"]);
    expect(form.titleText).toBe("Settings");
    expect(form.submitButtonText).toBe("Save");
    expect(form.elements.map((element) => element.type)).toEqual([
      "header",
      "label",
      "divider",
      "toggle",
      "slider",
      "dropdown",
      "textField",
      "submitButton",
    ]);
  });

  it("supports legacy primitive modal defaults used by package examples", async () => {
    const response = await new ModalFormData()
      .toggle("Toggle", true)
      .slider("Slider", 0, 10, 3)
      .dropdown("Dropdown", ["A", "B"], 1)
      .textField("Text", "Placeholder", "Alex")
      .show(player);

    expect(response.formValues).toEqual([true, 3, 1, "Alex"]);
  });

  it("closes forms through UIManager and uiManager singleton", () => {
    const manager = new UIManager();

    manager.closeAllForms(player);
    uiManager.closeAllForms(player);

    expect(manager.closedForms).toContain(player);
    expect(uiManager).toBeInstanceOf(UIManager);
    expect(uiManager.closedForms).toContain(player);
  });
});
