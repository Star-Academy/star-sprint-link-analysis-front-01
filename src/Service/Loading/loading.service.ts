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
    this.loadingComponent = value;
  }

  public showLoading(): void {
    this.loadingComponent.isLoading = true;
  }

  public hideLoading(): void {
    this.loadingComponent.isLoading = false;
  }
}
