import { Injectable } from '@angular/core';
import OverlayComponent from '../../../Model/OverlayComponent';
import Context from '../../../Model/Context';
@Injectable({
  providedIn: 'root',
})
export class UserInfoPopperService {
  private _component!: OverlayComponent;
  constructor() {}

  get component(): OverlayComponent {
    return this._component;
  }

  set component(value: OverlayComponent) {
    this._component = value;
  }

  public show(context: Context): void {
    this._component.setPosition(context.top, context.left);
    this._component.setAttribute(context);
    this._component.show();
  }

  public hide(): void {
    this._component.hide();
  }
}
