import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowSnackbarComponent } from './components/flow-snackbar/flow-snackbar.component';
import {SearchModule} from "./components/search/search.module";
import { ExpandOverlayComponent } from './components/expand-overlay/expand-overlay.component';
import { MaxflowDialogComponent } from './components/maxflow-dialog/maxflow-dialog.component';
@NgModule({
  declarations: [AppComponent, FlowSnackbarComponent, ExpandOverlayComponent, MaxflowDialogComponent],
    imports: [BrowserModule, AppRoutingModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
