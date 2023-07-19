import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowSnackbarComponent } from './components/flow-snackbar/flow-snackbar.component';
import { ExpandOverlayComponent } from './components/expand-overlay/expand-overlay.component';
import { CircleAvatarComponent } from './components/circle-avatar/circle-avatar.component';
import { UserinfoDialogComponent } from './components/userinfo-dialog/userinfo-dialog.component';

import {SearchModule} from "./components/search/search.module";
import {CircleAvatarModule} from "./components/circle-avatar/circle-avatar.module";
@NgModule({
    declarations: [
        AppComponent,
        FlowSnackbarComponent,
        ExpandOverlayComponent,

        UserinfoDialogComponent,

    ],
    imports: [BrowserModule, AppRoutingModule, SearchModule , CircleAvatarModule],
    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule {}
