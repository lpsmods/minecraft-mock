import { describe, it } from "vitest";
import {
  ActionFormData,
  ActionFormResponse,
  MessageFormResponse,
  MessageFormData,
  ModalFormData,
} from "@minecraft/server-ui";
import { world } from "@minecraft/server";

describe("@minecraft/server-ui", () => {
  it("showActionForm", () => {
    const playerList = world.getPlayers();
    if (playerList.length >= 1) {
      const form = new ActionFormData()
        .title("Test Title")
        .body("Body text here!")
        .button("btn 1")
        .button("btn 2")
        .button("btn 3")
        .button("btn 4")
        .button("btn 5");

      form.show(playerList[0]).then((result: ActionFormResponse) => {
        if (result.canceled) {
          console.log(
            "Player exited out of the dialog. Note that if the chat window is up, dialogs are automatically canceled.",
          );
          return -1;
        } else {
          console.log("Your result was: " + result.selection);
        }
      });
    }
  });

  it("showFavoriteMonth", () => {
    const players = world.getPlayers();

    if (players.length >= 1) {
      const form = new ActionFormData()
        .title("Months")
        .body("Choose your favorite month!")
        .button("January")
        .button("February")
        .button("March")
        .button("April")
        .button("May");

      form.show(players[0]).then((response: ActionFormResponse) => {
        if (response.selection === 3) {
          console.log("I like April too!");
          return -1;
        }
      });
    }
  });

  it("showBasicMessageForm", () => {
    const players = world.getPlayers();

    const messageForm = new MessageFormData()
      .title("Message Form Example")
      .body("This shows a simple example using §o§7MessageFormData§r.")
      .button1("Button 1")
      .button2("Button 2");

    messageForm
      .show(players[0])
      .then((formData: MessageFormResponse) => {
        // player canceled the form, or another dialog was up and open.
        if (formData.canceled || formData.selection === undefined) {
          return;
        }

        console.log(
          `You selected ${formData.selection === 0 ? "Button 1" : "Button 2"}`,
        );
      })
      .catch((error: Error) => {
        console.log("Failed to show form: " + error);
        return -1;
      });
  });

  it("showTranslatedMessageForm", () => {
    const players = world.getPlayers();

    const messageForm = new MessageFormData()
      .title({ translate: "permissions.removeplayer" })
      .body({
        translate: "accessibility.list.or.two",
        with: ["Player 1", "Player 2"],
      })
      .button1("Player 1")
      .button2("Player 2");

    messageForm
      .show(players[0])
      .then((formData: MessageFormResponse) => {
        // player canceled the form, or another dialog was up and open.
        if (formData.canceled || formData.selection === undefined) {
          return;
        }

        console.log(
          `You selected ${formData.selection === 0 ? "Player 1" : "Player 2"}`,
        );
      })
      .catch((error: Error) => {
        console.log("Failed to show form: " + error);
        return -1;
      });
  });

  it("showBasicModalForm", () => {
    const players = world.getPlayers();

    const modalForm = new ModalFormData().title(
      "Example Modal Controls for §o§7ModalFormData§r",
    );

    modalForm.toggle("Toggle w/o default");
    modalForm.toggle("Toggle w/ default", { defaultValue: true });

    modalForm.slider("Slider w/o default", 0, 50, { defaultValue: 5 });
    modalForm.slider("Slider w/ default", 0, 50, { defaultValue: 5 });

    modalForm.dropdown("Dropdown w/o default", [
      "option 1",
      "option 2",
      "option 3",
    ]);
    modalForm.dropdown(
      "Dropdown w/ default",
      ["option 1", "option 2", "option 3"],
      2,
    );

    modalForm.textField("Input w/o default", "type text here");
    modalForm.textField("Input w/ default", "type text here", {
      defaultValue: "this is default",
    });

    modalForm
      .show(players[0])
      .then((formData) => {
        players[0].sendMessage(
          `Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`,
        );
      })
      .catch((error: Error) => {
        console.log("Failed to show form: " + error);
        return -1;
      });
  });
});
