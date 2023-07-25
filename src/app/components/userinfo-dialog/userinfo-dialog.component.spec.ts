import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoDialogComponent } from './userinfo-dialog.component';
import {UserInfoPopperService} from "../../../Service/Popper/UserInfo/user-info-popper.service";
import any = jasmine.any;

describe('UserinfoDialogComponent', () => {
  let component: UserinfoDialogComponent;
  let fixture: ComponentFixture<UserinfoDialogComponent>;
  let popperService: UserInfoPopperService;
  let popperServiceSpy: jasmine.SpyObj<any>;

  beforeEach(() => {
    // popperServiceSpy = jasmine.createSpyObj(UserInfoPopperService, ["component"])
    TestBed.configureTestingModule({
      declarations: [UserinfoDialogComponent],
      providers: [UserinfoDialogComponent,{
        provide: UserInfoPopperService, setValue: popperServiceSpy
      }]
    });
    popperService = TestBed.inject(UserInfoPopperService);
    fixture = TestBed.createComponent(UserinfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("setPosition()",()=>{
    it('should set position', function () {
      let top:number = 10,left:number = 10;
      component.setPosition(top,left);
      expect(component.left).toEqual(left + 'px')
      expect(component.top).toEqual(top + 'px')
    });
  })
  describe("hide()",()=>{
    it('should set isShow as false', function () {
      component.hide()
      expect(component.isShow).toEqual(false);
    });
  })
  describe("show()",()=>{
    it('should set isShow as true', function () {
      component.show()
      expect(component.isShow).toEqual(true);
    });
  })
  describe("setAttribute()",()=>{
    it('should set context data', function () {
      let context = {
        name : "ali",
        id : "123456",
        cardId : "123456"
      }
      component.setAttribute(context)
      expect(component.name).toEqual(context.name);
      expect(component.id).toEqual(context.id);
      expect(component.cardId).toEqual(context.cardId);
    });
  })
});
