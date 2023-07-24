import { Component, Input } from "@angular/core";
import { LoadingService } from "../../../Service/Loading/loading.service";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
})
export class LoadingComponent {
  @Input() message: string = "Loading...";

  constructor(private loadingService: LoadingService) {
    loadingService.loadingComponent = this;
  }

  private _isLoading = false;

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
  }
}
