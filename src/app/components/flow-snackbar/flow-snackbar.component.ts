import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-flow-snackbar',
  templateUrl: './flow-snackbar.component.html',
  styleUrls: ['./flow-snackbar.component.scss'],
})
export class FlowSnackbarComponent {
  @Input() message!: string;
  @Input() iconSrc!: string;
  @Input() alt!: string;

  @HostListener('document:keydown.shift', ['$event'])
  public show(): void {
    this._isShow = true;
  }

  @HostListener('document:keyup.shift', ['$event'])
  public hide(): void {
    this._isShow = false;
  }

  private _isShow: boolean = false;
  get isShow(): boolean {
    return this._isShow;
  }
}
