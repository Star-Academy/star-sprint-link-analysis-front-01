import { Component, HostBinding, Input } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-circle-avatar',
  templateUrl: './circle-avatar.component.html',
  styleUrls: ['./circle-avatar.component.scss'],
})
export class CircleAvatarComponent {
  @Input() src: string = 'assets/icons/account.svg';
  @Input() size: number = 4;
}
