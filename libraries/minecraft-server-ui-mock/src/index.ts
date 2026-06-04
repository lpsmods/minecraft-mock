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

export interface ModalFormDataDropdownOptions {
  defaultValueIndex?: number;
  tooltip?: RawMessage | string;
}

export interface ModalFormDataSliderOptions {
  defaultValue?: number;
  tooltip?: RawMessage | string;
  valueStep?: number;
}

export interface ModalFormDataTextFieldOptions {
  defaultValue?: string;
  tooltip?: RawMessage | string;
}

export interface ModalFormDataToggleOptions {
  defaultValue?: boolean;
  tooltip?: RawMessage | string;
}

type FormElement =
  | { type: "button"; iconPath?: string; text: RawMessage | string }
  | { type: "divider" }
  | { type: "dropdown"; defaultValueIndex: number; items: (RawMessage | string)[]; label: RawMessage | string }
  | { type: "header"; text: RawMessage | string }
  | { type: "label"; text: RawMessage | string }
  | { type: "slider"; defaultValue: number; label: RawMessage | string; maximumValue: number; minimumValue: number }
  | { type: "submitButton"; text: RawMessage | string }
  | { type: "textField"; defaultValue: string; label: RawMessage | string; placeholderText: RawMessage | string }
  | { type: "toggle"; defaultValue: boolean; label: RawMessage | string };

export class ActionFormData {
  readonly buttons: { iconPath?: string; text: RawMessage | string }[] = [];
  readonly elements: FormElement[] = [];
  bodyText?: RawMessage | string;
  titleText?: RawMessage | string;

  body(bodyText: RawMessage | string) {
    this.bodyText = bodyText;
    return this;
  }

  button(text: RawMessage | string, iconPath?: string) {
    this.buttons.push({ text, iconPath });
    this.elements.push({ type: "button", text, iconPath });
    return this;
  }

  divider() {
    this.elements.push({ type: "divider" });
    return this;
  }

  header(text: RawMessage | string) {
    this.elements.push({ type: "header", text });
    return this;
  }

  label(text: RawMessage | string) {
    this.elements.push({ type: "label", text });
    return this;
  }

  title(titleText: RawMessage | string) {
    this.titleText = titleText;
    return this;
  }

  show(player: Player) {
    return Promise.resolve(new ActionFormResponse(this.buttons.length > 0 ? 0 : undefined));
  }
}

export class FormResponse {
  constructor(canceled = false, cancelationReason?: FormCancelationReason) {
    this.canceled = canceled;
    this.cancelationReason = cancelationReason;
  }

  readonly cancelationReason?: FormCancelationReason;
  readonly canceled: boolean;
}

export class ActionFormResponse extends FormResponse {
  constructor(selection?: number, canceled = false, cancelationReason?: FormCancelationReason) {
    super(canceled, cancelationReason);
    this.selection = selection;
  }

  readonly selection?: number;
}

export class MessageFormData {
  bodyText?: RawMessage | string;
  button1Text?: RawMessage | string;
  button2Text?: RawMessage | string;
  titleText?: RawMessage | string;

  body(bodyText: RawMessage | string) {
    this.bodyText = bodyText;
    return this;
  }

  button1(text: RawMessage | string) {
    this.button1Text = text;
    return this;
  }

  button2(text: RawMessage | string) {
    this.button2Text = text;
    return this;
  }

  title(titleText: RawMessage | string) {
    this.titleText = titleText;
    return this;
  }

  show(player: Player) {
    return Promise.resolve(new MessageFormResponse(0));
  }
}

export class MessageFormResponse extends FormResponse {
  constructor(selection?: number, canceled = false, cancelationReason?: FormCancelationReason) {
    super(canceled, cancelationReason);
    this.selection = selection;
  }

  readonly selection?: number;
}

export class ModalFormData {
  readonly controls: (boolean | number | string | undefined)[] = [];
  readonly elements: FormElement[] = [];
  submitButtonText?: RawMessage | string;
  titleText?: RawMessage | string;

  divider() {
    this.elements.push({ type: "divider" });
    return this;
  }
  dropdown(
    label: RawMessage | string,
    items: (RawMessage | string)[],
    dropdownOptions?: ModalFormDataDropdownOptions | number,
  ) {
    const defaultValueIndex =
      typeof dropdownOptions === "number" ? dropdownOptions : dropdownOptions?.defaultValueIndex;
    this.controls.push(defaultValueIndex ?? 0);
    this.elements.push({ type: "dropdown", label, items, defaultValueIndex: defaultValueIndex ?? 0 });
    return this;
  }
  header(text: RawMessage | string) {
    this.elements.push({ type: "header", text });
    return this;
  }
  label(text: RawMessage | string) {
    this.elements.push({ type: "label", text });
    return this;
  }
  slider(
    label: RawMessage | string,
    minimumValue: number,
    maximumValue: number,
    sliderOptions?: ModalFormDataSliderOptions | number,
  ) {
    const defaultValue = typeof sliderOptions === "number" ? sliderOptions : sliderOptions?.defaultValue;
    this.controls.push(defaultValue ?? minimumValue);
    this.elements.push({
      type: "slider",
      label,
      minimumValue,
      maximumValue,
      defaultValue: defaultValue ?? minimumValue,
    });
    return this;
  }
  submitButton(submitButtonText: RawMessage | string) {
    this.submitButtonText = submitButtonText;
    this.elements.push({ type: "submitButton", text: submitButtonText });
    return this;
  }
  textField(
    label: RawMessage | string,
    placeholderText: RawMessage | string,
    textFieldOptions?: ModalFormDataTextFieldOptions | string,
  ) {
    const defaultValue = typeof textFieldOptions === "string" ? textFieldOptions : textFieldOptions?.defaultValue;
    this.controls.push(defaultValue ?? "");
    this.elements.push({
      type: "textField",
      label,
      placeholderText,
      defaultValue: defaultValue ?? "",
    });
    return this;
  }
  title(titleText: RawMessage | string) {
    this.titleText = titleText;
    return this;
  }
  toggle(label: RawMessage | string, toggleOptions?: ModalFormDataToggleOptions | boolean) {
    const defaultValue = typeof toggleOptions === "boolean" ? toggleOptions : toggleOptions?.defaultValue;
    this.controls.push(defaultValue ?? false);
    this.elements.push({ type: "toggle", label, defaultValue: defaultValue ?? false });
    return this;
  }

  show(player: Player) {
    return Promise.resolve(new ModalFormResponse([...this.controls]));
  }
}

export class ModalFormResponse extends FormResponse {
  constructor(
    formValues?: (boolean | number | string | undefined)[],
    canceled = false,
    cancelationReason?: FormCancelationReason,
  ) {
    super(canceled, cancelationReason);
    this.formValues = formValues;
  }

  readonly formValues?: (boolean | number | string | undefined)[];
}

export class UIManager {
  closedForms: Player[] = [];

  closeAllForms(player: Player) {
    this.closedForms.push(player);
  }
}

export class FormRejectError extends Error {
  constructor(reason = FormRejectReason.ServerShutdown) {
    super(reason);
    this.reason = reason;
  }

  readonly reason: FormRejectReason;
}

export const uiManager = new UIManager();
