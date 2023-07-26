import { Injectable } from '@angular/core';
import { ErrorOverlayComponent } from '../../app/components/error-overlay/error-overlay.component';
import { LoadingService } from '../Loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private _errorComponent!: ErrorOverlayComponent;

  constructor(private loadingService: LoadingService) {}

  public showError(message: string): void {
    this._errorComponent.show(message);
  }

  public handleError(error: any): void {
    this.loadingService.hideLoading();
    this.showError(error.message);
  }

  set errorComponent(value: ErrorOverlayComponent) {
    console.log(value);
    this._errorComponent = value;
  }
}
