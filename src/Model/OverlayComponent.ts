export default interface OverlayComponent {
  setPosition(tp: number, lft: number): void;

  getPosition(): { top: number; left: number };

  show(): void;

  hide(): void;

  setAttribute(context: any): void;
}
