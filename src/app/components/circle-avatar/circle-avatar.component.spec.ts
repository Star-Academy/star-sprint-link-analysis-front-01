import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CircleAvatarComponent } from "./circle-avatar.component";

describe("CircleAvatarComponent", (): void => {
  let component: CircleAvatarComponent;
  let fixture: ComponentFixture<CircleAvatarComponent>;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      declarations: [CircleAvatarComponent],
    });
    fixture = TestBed.createComponent(CircleAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", (): void => {
    expect(component).toBeTruthy();
  });
});
