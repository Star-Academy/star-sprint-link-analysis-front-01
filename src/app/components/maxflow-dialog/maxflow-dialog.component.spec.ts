import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxflowDialogComponent } from './maxflow-dialog.component';

describe('MaxflowDialogComponent', () => {
  let component: MaxflowDialogComponent;
  let fixture: ComponentFixture<MaxflowDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxflowDialogComponent]
    });
    fixture = TestBed.createComponent(MaxflowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
