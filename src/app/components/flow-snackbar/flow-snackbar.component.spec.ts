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

  it('should create', ():void => {
    expect(component).toBeTruthy();
  });
  describe("show()" ,():void=>{

    it('should change isShow to true', function ():void {
      component.show();
      expect(component.isShow).toEqual(true)
    });
  })
  describe("hide()" ,():void=>{
    it('should change isShow to false', function ():void {
      component.hide();
      expect(component.isShow).toEqual(false)
    });
  })
});
