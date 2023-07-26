import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlowSnackbarComponent } from "./flow-snackbar.component";
import { FlowDialogComponent } from "../flow-dialog/flow-dialog.component";
import { ClipboardModule } from "ngx-clipboard";

@NgModule({
  declarations: [FlowSnackbarComponent, FlowDialogComponent],
  exports: [FlowSnackbarComponent, FlowDialogComponent],
  imports: [CommonModule, ClipboardModule],
})
export class FlowSnackbarModule {
  constructor() {}
}
