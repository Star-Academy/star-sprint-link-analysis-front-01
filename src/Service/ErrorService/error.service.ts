import {Injectable} from '@angular/core';
import {ErrorOverlayComponent} from "../../app/components/error-overlay/error-overlay.component";
import {LoadingService} from "../Loading/loading.service";

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    private _errorComponent!: ErrorOverlayComponent;

    constructor(private loadingService: LoadingService) {
    }

    showError(message: string) {
        this._errorComponent.show(message)
    }

    hideError() {
        this._errorComponent.isShowing = false;
    }


    handleError(error: any) {
        this.loadingService.hideLoading();
        this.showError(error.statusText);
    }

    get errorComponent(): ErrorOverlayComponent {
        return this._errorComponent;
    }

    set errorComponent(value: ErrorOverlayComponent) {
        console.log(value)
        this._errorComponent = value;
    }
}
