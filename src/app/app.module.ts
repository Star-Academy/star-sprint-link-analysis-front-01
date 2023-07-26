import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpandOverlayComponent } from './components/expand-overlay/expand-overlay.component';
import { UserinfoDialogComponent } from './components/userinfo-dialog/userinfo-dialog.component';
import { SearchModule } from './components/search/search.module';
import { CircleAvatarModule } from './components/circle-avatar/circle-avatar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlowSnackbarModule } from './components/flow-snackbar/flow-snackbar.module';
import { GraphModule } from './components/graph/graph.module';
import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { LoadingModule } from './components/loading/loading.module';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { ErrorOverlayComponent } from './components/error-overlay/error-overlay.component';
import { ErrorService } from '../Service/ErrorService/error.service';
import { MyErrorHandlerService } from '../Service/GlobalErrorHandler/my-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    ExpandOverlayComponent,
    UserinfoDialogComponent,
    ErrorOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    CircleAvatarModule,
    FontAwesomeModule,
    FlowSnackbarModule,
    HttpClientModule,
    GraphModule,
    LoadingModule,
    FormsModule,
    ClipboardModule,
  ],
  // providers: [{ provide: ErrorHandler, useClass: MyErrorHandlerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
