import {Component, HostListener, OnInit} from '@angular/core';
import OverlayComponent from '../../../Model/OverlayComponent';
import {ExpandDialogPopperService} from '../../../Service/Popper/ExpandDialog/expand-dialog-popper.service';
import {GraphService} from '../../../Service/Graph/graph.service';

@Component({
    selector: 'app-expand-overlay',
    templateUrl: './expand-overlay.component.html',
    styleUrls: ['./expand-overlay.component.scss'],
})
export class ExpandOverlayComponent implements OverlayComponent, OnInit {
    public isShow: boolean = false;
    public top: string = '0';
    public left: string = '0';
    private _maxLength: number = 0;

    private _id!: number;
    private _isShiftDown: boolean = false;

    constructor(
        private expandPopper: ExpandDialogPopperService,
        private graphService: GraphService,
    ) {
    }

    ngOnInit(): void {
        this.expandPopper.component = this;
    }

    @HostListener('document:keydown.shift', ['$event'])
    public shiftDown(e: KeyboardEvent): void {
        if (e.shiftKey) {
            this._isShiftDown = true;
        }
    }

    @HostListener('document:keyup.shift', ['$event'])
    public shiftUp(e: KeyboardEvent): void {
        if (!e.shiftKey) {
            this._isShiftDown = false;
        }
    }

    public show(): void {
        if (!this._isShiftDown) {
            this.isShow = true;
        }
    }

    public hide(): void {
        this.isShow = false;
    }

    public setAttribute(context: any): void {
        this._id = parseInt(context.id);
    }

    public setPosition(tp: number, lft: number): void {
        this.top = tp + 'px';
        this.left = lft + 'px';
    }

    public onExpand(): void {
        if (isNaN(this._maxLength)) {
            this.isShow = false;
            throw new Error("Please enter a valid number");

        } else {
            this.graphService.expandGraph(this._id, this._maxLength);
            this.isShow = false;

        }
    }

    public onClose(): void {
        this.isShow = false;
    }

    get maxLength(): number {
        return this._maxLength;
    }

    set maxLength(value: number) {
        this._maxLength = value;
    }

    get id(): number {
        return this._id;
    }

    protected readonly parseInt = parseInt;
}
