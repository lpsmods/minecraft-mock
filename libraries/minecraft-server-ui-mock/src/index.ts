import { Player, RawMessage } from "@minecraft/server";

export enum FormCancelationReason {
  UserBusy = "UserBusy",
  UserClosed = "UserClosed",
}

export enum FormRejectReason {
  MalformedResponse = "MalformedResponse",
  PlayerQuit = "PlayerQuit",
  ServerShutdown = "ServerShutdown",
}

export class ActionFormData {
  body(bodyText: RawMessage | string) {
    return this;
  }

  button(text: RawMessage | string) {
    return this;
  }

  divider() {
    return this;
  }

  header(text: RawMessage | string) {
    return this;
  }

  label(text: RawMessage | string) {
    return this;
  }

  title(titleText: RawMessage | string) {
    return this;
  }

  show(player: Player) {
    return new Promise((resolve, reject) => {
      resolve(new ActionFormResponse());
    });
  }
}

export class FormResponse {
  constructor() {}

  readonly cancelationReason = undefined;
  readonly canceled = false;
}

export class ActionFormResponse extends FormResponse {
  constructor() {
    super();
  }

  readonly selection = 0;
}

export class MessageFormData {
  body(bodyText: RawMessage | string) {
    return this;
  }

  button1(text: RawMessage | string) {
    return this;
  }

  button2(text: RawMessage | string) {
    return this;
  }

  title(titleText: RawMessage | string) {
    return this;
  }

  show(player: Player) {
    return new Promise((resolve, reject) => {
      resolve(new MessageFormResponse());
    });
  }
}

export class MessageFormResponse extends FormResponse {
  readonly selection = 0;
}

export class ModalFormData {
  divider() {
    return this;
  }
  dropdown(
    label: RawMessage | string,
    items: (RawMessage | string)[],
    dropdownOptions: {},
  ) {
    return this;
  }
  header(text: RawMessage | string) {
    return this;
  }
  label(text: RawMessage | string) {
    return this;
  }
  slider(
    label: RawMessage | string,
    minimumValue: number,
    maximumValue: number,
    sliderOptions: {},
  ) {
    return this;
  }
  submitButton(submitButtonText: RawMessage | string) {
    return this;
  }
  textField(
    label: RawMessage | string,
    placeholderText: RawMessage | string,
    textFieldOptions: {},
  ) {
    return this;
  }
  title(titleText: RawMessage | string) {
    return this;
  }
  toggle(label: RawMessage | string, toggleOptions: {}) {
    return this;
  }

  show(player: Player) {
    return new Promise((resolve, reject) => {
      resolve(new ModalFormResponse());
    });
  }
}

export class ModalFormResponse extends FormResponse {
  readonly formValues = [];
}

export class UIManager {
  closeAllForms(player: Player) {}
}

export class FormRejectError extends Error {
  readonly reason = FormRejectReason.ServerShutdown;
}

export const uiManager = {};
