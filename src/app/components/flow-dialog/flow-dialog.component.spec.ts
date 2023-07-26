import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowDialogComponent } from './flow-dialog.component';
import {FlowService} from "../../../Service/Flow/flow.service";

describe('FlowDialogComponent', ():void => {

  let component: FlowDialogComponent;
  let fixture: ComponentFixture<FlowDialogComponent>;
  let flowService:FlowService;
  let flowServiceSpy :jasmine.SpyObj<any>;
  beforeEach(():void => {
    flowServiceSpy = jasmine.createSpyObj(FlowService, ['flowComponent']),
    TestBed.configureTestingModule({
      declarations: [FlowDialogComponent],
      providers: [
        FlowDialogComponent,
        {
          provide: FlowService,
          useValue: flowServiceSpy,
        },
      ],
    });

    flowService = TestBed.inject(FlowService);
    fixture = TestBed.createComponent(FlowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ():void => {
    expect(component).toBeTruthy();
  });
  describe("onClose()" ,():void=>{

    it('should change isShow to false', function ():void {
      component.isShow = true;
      component.onClose();
      expect(component.isShow).toEqual(false)
    });
  })
});
