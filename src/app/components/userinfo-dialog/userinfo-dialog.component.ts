import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userinfo-dialog',
  templateUrl: './userinfo-dialog.component.html',
  styleUrls: ['./userinfo-dialog.component.scss'],
})
export class UserinfoDialogComponent {
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() cardId: string = '';
}
