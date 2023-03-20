export type InputEventType = InputEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

export type MouseEventType = MouseEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};
export type KeyboardEventType = KeyboardEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};

export enum KeyCode {
  Enter = 13,
  Esc = 27,
}
