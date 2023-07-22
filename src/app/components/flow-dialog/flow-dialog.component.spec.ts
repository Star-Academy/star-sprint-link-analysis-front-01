import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FlowDialogComponent } from "./flow-dialog.component";

describe("FlowDialogComponent", () => {
  let component: FlowDialogComponent;
  let fixture: ComponentFixture<FlowDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowDialogComponent],
    });
    fixture = TestBed.createComponent(FlowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
