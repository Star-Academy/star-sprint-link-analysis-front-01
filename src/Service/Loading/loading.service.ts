import { Injectable } from '@angular/core';
import { LoadingComponent } from '../../app/components/loading/loading.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loadingComponent!: LoadingComponent;

  constructor() {}

  public showLoading(): void {
    this._loadingComponent.isLoading = true;
  }

  public hideLoading(): void {
    this._loadingComponent.isLoading = false;
  }

  set loadingComponent(value: LoadingComponent) {
    this._loadingComponent = value;
  }
}
