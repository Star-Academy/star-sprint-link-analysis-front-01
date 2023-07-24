import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoDialogComponent } from './userinfo-dialog.component';

describe('UserinfoDialogComponent', () => {
  let component: UserinfoDialogComponent;
  let fixture: ComponentFixture<UserinfoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserinfoDialogComponent],
    });
    fixture = TestBed.createComponent(UserinfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
