import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowSnackbarComponent } from './flow-snackbar.component';

describe('FlowSnackbarComponent', () => {
  let component: FlowSnackbarComponent;
  let fixture: ComponentFixture<FlowSnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowSnackbarComponent],
    });
    fixture = TestBed.createComponent(FlowSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
