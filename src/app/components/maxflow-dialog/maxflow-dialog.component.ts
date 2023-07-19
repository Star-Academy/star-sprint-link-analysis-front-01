import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maxflow-dialog',
  templateUrl: './maxflow-dialog.component.html',
  styleUrls: ['./maxflow-dialog.component.scss'],
})
export class MaxflowDialogComponent {
  @Input() source: number = 10000000;
  @Input() target: number = 2323123;
  @Input() flow: number = 111111110;
}
