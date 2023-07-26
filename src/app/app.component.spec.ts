import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ExpandOverlayComponent } from "./components/expand-overlay/expand-overlay.component";
import { LoadingModule } from "./components/loading/loading.module";
import { ErrorOverlayComponent } from "./components/error-overlay/error-overlay.component";

describe("AppComponent", (): void => {
  beforeEach(
    (): TestBed =>
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, LoadingModule],
        declarations: [
          AppComponent,
          ExpandOverlayComponent,
          ErrorOverlayComponent,
        ],
      }),
  );

  it("should create the app", (): void => {
    const fixture: ComponentFixture<AppComponent> =
      TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
