import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flow-dialog',
  templateUrl: './flow-dialog.component.html',
  styleUrls: ['./flow-dialog.component.scss'],
})
export class FlowDialogComponent {
  @Input() source: string = '';
  @Input() target: string = '';
  @Input() amount: string = '';
}
