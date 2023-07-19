import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userinfo-dialog',
  templateUrl: './userinfo-dialog.component.html',
  styleUrls: ['./userinfo-dialog.component.scss'],
})
export class UserinfoDialogComponent {
  @Input() name: string = 'ArTaZ';
  @Input() id: number = 12345678;
  @Input() cardId: number = 12345678;
}
