import { Component, Input } from "@angular/core";
import OverlayComponent from "../../../Model/OverlayComponent";
import { UserInfoPopperService } from "../../../Service/Popper/user-info-popper.service";
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
  @Input() tp: string = "0px";
  @Input() lft: string = "0px";

  public isShow: boolean = false;

  constructor(private popper: UserInfoPopperService) {
    popper.component = this;
  }

  getPosition(): { top: number; left: number } {
    return { left: 0, top: 0 };
  }

  setPosition(tp: number, lft: number): void {
    console.log({ tp, lft });
    this.tp = tp + "px";
    this.lft = lft + "px";
  }

  hide(): void {
    this.isShow = false;
  }

  show(): void {
    this.isShow = true;
  }

  setAttribute(context: any): void {
    this.name = context.name;
    this.id = context.id;
    this.cardId = context.cardId;
  }
}
