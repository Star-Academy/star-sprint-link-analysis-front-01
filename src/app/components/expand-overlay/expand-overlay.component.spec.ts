import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandOverlayComponent } from './expand-overlay.component';

describe('ExpandOverlayComponent', () => {
  let component: ExpandOverlayComponent;
  let fixture: ComponentFixture<ExpandOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandOverlayComponent]
    });
    fixture = TestBed.createComponent(ExpandOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
