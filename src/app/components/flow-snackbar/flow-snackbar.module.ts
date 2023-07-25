import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlowSnackbarComponent } from "./flow-snackbar.component";
import { FlowDialogComponent } from "../flow-dialog/flow-dialog.component";

@NgModule({
  declarations: [FlowSnackbarComponent, FlowDialogComponent],
  exports: [FlowSnackbarComponent, FlowDialogComponent],
  imports: [CommonModule],
})
export class FlowSnackbarModule {}
