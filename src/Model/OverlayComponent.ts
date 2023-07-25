export default interface OverlayComponent {
  setPosition(tp: number, lft: number): void;

  show(): void;

  hide(): void;

  setAttribute(context: any): void;
}
