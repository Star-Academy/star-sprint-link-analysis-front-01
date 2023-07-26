import { Component, Input } from "@angular/core";
import OverlayComponent from "../../../Model/OverlayComponent";
import { UserInfoPopperService } from "../../../Service/Popper/UserInfo/user-info-popper.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-userinfo-dialog",
  templateUrl: "./userinfo-dialog.component.html",
  styleUrls: ["./userinfo-dialog.component.scss"],
})
export class UserinfoDialogComponent implements OverlayComponent {
  @Input() name: string = "";
  @Input() id: string = "";
  @Input() cardId: string = "";

  private _top: string = "0px";
  private _left: string = "0px";
  private _isShow: boolean = false;

  constructor(private popper: UserInfoPopperService) {
    popper.component = this;
  }

  public setPosition(tp: number, lft: number): void {
    this._top = tp + "px";
    this._left = lft + "px";
  }

  public hide(): void {
    this._isShow = false;
  }

  public show(): void {
    this._isShow = true;
  }

  public setAttribute(context: any): void {
    this.name = context.name;
    this.id = context.id;
    this.cardId = context.cardId;
  }
  get top(): string {
    return this._top;
  }

  get left(): string {
    return this._left;
  }

  get isShow(): boolean {
    return this._isShow;
  }
}
