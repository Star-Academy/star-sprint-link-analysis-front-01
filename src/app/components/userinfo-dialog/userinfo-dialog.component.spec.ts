import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserinfoDialogComponent } from './userinfo-dialog.component';
import { UserInfoPopperService } from '../../../Service/Popper/UserInfo/user-info-popper.service';

describe('UserinfoDialogComponent', ():void => {

  let component: UserinfoDialogComponent;
  let fixture: ComponentFixture<UserinfoDialogComponent>;
  let popperService: UserInfoPopperService;
  let popperServiceSpy: jasmine.SpyObj<any>;

  beforeEach(():void => {

    TestBed.configureTestingModule({
      declarations: [UserinfoDialogComponent],
      providers: [
        UserinfoDialogComponent,
        {
          provide: UserInfoPopperService,
          setValue: popperServiceSpy,
        },
      ],
    });

    popperService = TestBed.inject(UserInfoPopperService);
    fixture = TestBed.createComponent(UserinfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ():void => {
    expect(component).toBeTruthy();
  });
  describe('setPosition()', ():void => {

    it('should set position', function ():void {

      let top: number = 10,
        left: number = 10;
      component.setPosition(top, left);

      expect(component.left).toEqual(left + 'px');
      expect(component.top).toEqual(top + 'px');
    });
  });
  describe('hide()', ():void => {

    it('should set isShow as false', function ():void {

      component.hide();
      expect(component.isShow).toEqual(false);
    });
  });
  describe('show()', ():void => {

    it('should set isShow as true', function ():void {

      component.show();
      expect(component.isShow).toEqual(true);
    });
  });
  describe('setAttribute()', ():void => {

    it('should set context data', function ():void {

      let context = {
        name: 'ali',
        id: '123456',
        cardId: '123456',
      };
      component.setAttribute(context);

      expect(component.name).toEqual(context.name);
      expect(component.id).toEqual(context.id);
      expect(component.cardId).toEqual(context.cardId);
    });
  });
});
