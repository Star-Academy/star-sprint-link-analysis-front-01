import {Component, Input} from '@angular/core';
import {ErrorService} from "../../../Service/ErrorService/error.service";

@Component({
    selector: 'app-error-overlay',
    templateUrl: './error-overlay.component.html',
    styleUrls: ['./error-overlay.component.scss']
})
export class ErrorOverlayComponent {
    @Input() message: string = "We have an unexpected ERROR!";


    constructor(private errorService: ErrorService) {
        this.errorService.errorComponent = this;

    }

    private _isShowing = false;

    public hide() {
        this.isShowing = false;
    }

    public show(message: string) {
        this.message = message;
        this.isShowing = true;
    }

    get isShowing(): boolean {
        return this._isShowing;
    }

    set isShowing(value: boolean) {
        this._isShowing = value;
    }

}
