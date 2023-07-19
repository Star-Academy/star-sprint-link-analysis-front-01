import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowSnackbarComponent } from './components/flow-snackbar/flow-snackbar.component';
import {SearchModule} from "./components/search/search.module";
@NgModule({
  declarations: [AppComponent, FlowSnackbarComponent],
    imports: [BrowserModule, AppRoutingModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
