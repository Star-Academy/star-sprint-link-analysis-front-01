import { Component, Input } from '@angular/core';
import { ErrorService } from '../../../Service/ErrorService/error.service';

@Component({
  selector: 'app-error-overlay',
  templateUrl: './error-overlay.component.html',
  styleUrls: ['./error-overlay.component.scss'],
})
export class ErrorOverlayComponent {
  @Input() message: string = 'We have an unexpected ERROR!';

  private _isShowing = false;

  constructor(private errorService: ErrorService) {
    this.errorService.errorComponent = this;
  }

  public hide(): void {
    this.isShowing = false;
  }

  public show(message: string): void {
    if (message != 'Unknown Error') {
      this.message = message;
    }
    this.isShowing = true;
  }

  get isShowing(): boolean {
    return this._isShowing;
  }

  set isShowing(value: boolean) {
    this._isShowing = value;
  }
}
