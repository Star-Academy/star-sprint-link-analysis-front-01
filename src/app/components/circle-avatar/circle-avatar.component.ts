import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-avatar',
  templateUrl: './circle-avatar.component.html',
  styleUrls: ['./circle-avatar.component.scss'],
})
export class CircleAvatarComponent {
  @Input() iconSrc!: string;
  @Input() iconAlt!: string;
  @Input() size!: number;
}
