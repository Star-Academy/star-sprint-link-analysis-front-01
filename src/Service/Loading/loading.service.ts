import { Injectable } from "@angular/core";
import { LoadingComponent } from "../../app/components/loading/loading.component";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  constructor() {}

  private _loadingComponent!: LoadingComponent;

  get loadingComponent(): LoadingComponent {
    return this._loadingComponent;
  }

  set loadingComponent(value: LoadingComponent) {
    this._loadingComponent = value;
  }

  public showLoading(): void {
    this._loadingComponent.isLoading = true;
  }

  public hideLoading(): void {
    this._loadingComponent.isLoading = false;
  }
}
