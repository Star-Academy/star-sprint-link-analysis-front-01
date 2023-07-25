import { Component, Input } from '@angular/core';
import OverlayComponent from '../../../Model/OverlayComponent';
import { UserInfoPopperService } from '../../../Service/Popper/UserInfo/user-info-popper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userinfo-dialog',
  templateUrl: './userinfo-dialog.component.html',
  styleUrls: ['./userinfo-dialog.component.scss'],
})
export class UserinfoDialogComponent implements OverlayComponent {
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() cardId: string = '';
  top: string = '0px';
  left: string = '0px';

  public isShow: boolean = false;

  constructor(private popper: UserInfoPopperService) {
    popper.component = this;
  }

  setPosition(tp: number, lft: number): void {
    this.top = tp + 'px';
    this.left = lft + 'px';
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
