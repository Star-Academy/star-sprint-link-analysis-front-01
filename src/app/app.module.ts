import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExpandOverlayComponent } from "./components/expand-overlay/expand-overlay.component";
import { UserinfoDialogComponent } from "./components/userinfo-dialog/userinfo-dialog.component";
import { SearchModule } from "./components/search/search.module";
import { CircleAvatarModule } from "./components/circle-avatar/circle-avatar.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FlowSnackbarModule } from "./components/flow-snackbar/flow-snackbar.module";

@NgModule({
  declarations: [AppComponent, ExpandOverlayComponent, UserinfoDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    CircleAvatarModule,
    FontAwesomeModule,
    FlowSnackbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
