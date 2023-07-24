import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flow-snackbar',
  templateUrl: './flow-snackbar.component.html',
  styleUrls: ['./flow-snackbar.component.scss'],
})
export class FlowSnackbarComponent {
  @Input() message!: string;
  @Input() iconSrc!: string;
  @Input() alt!: string;
}
