import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ErrorOverlayComponent } from "./error-overlay.component";

describe("ErrorOverlayComponent", (): void => {
  let component: ErrorOverlayComponent;
  let fixture: ComponentFixture<ErrorOverlayComponent>;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      declarations: [ErrorOverlayComponent],
    });
    fixture = TestBed.createComponent(ErrorOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", (): void => {
    expect(component).toBeTruthy();
  });

  describe("hide()", (): void => {
    it("should change isShowing to false", function (): void {
      component.isShowing = true;
      component.hide();
      expect(component.isShowing).toBeFalse();
    });
  });

  describe("show()", (): void => {
    it("should change isShowing to true and message should change to test", function (): void {
      component.isShowing = false;
      component.show("test");
      expect(component.isShowing).toBeTrue();
      expect(component.message).toEqual("test");
    });
  });
});
