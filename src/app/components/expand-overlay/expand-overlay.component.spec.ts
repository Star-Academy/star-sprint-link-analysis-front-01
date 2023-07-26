import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpandOverlayComponent } from './expand-overlay.component';
import { GraphService } from '../../../Service/Graph/graph.service';
import Context from '../../../Model/Context';

describe('ExpandOverlayComponent', () => {
  let component: ExpandOverlayComponent;
  let fixture: ComponentFixture<ExpandOverlayComponent>;
  let graphService: GraphService;
  let graphServiceSpy: jasmine.SpyObj<any>;
  beforeEach(() => {
    graphServiceSpy = jasmine.createSpyObj(GraphService, ['expandGraph']);
    TestBed.configureTestingModule({
      declarations: [ExpandOverlayComponent],
      providers: [
        ExpandOverlayComponent,
        {
          provide: GraphService,
          useValue: graphServiceSpy,
        },
      ],
    });
    graphService = TestBed.inject(GraphService);
    fixture = TestBed.createComponent(ExpandOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  describe('onClose()', () => {
    it('should be change isShow to false', function () {
      component.isShow = true;
      component.onClose();
      expect(component.isShow).toEqual(false);
    });
  });
  describe('hide()', () => {
    it('should be change isShow to false', function () {
      component.isShow = true;
      component.hide();
      expect(component.isShow).toEqual(false);
    });
  });
  describe('show()', () => {
    it('should be change isShow to true', function () {
      component.isShow = false;
      component.show();
      expect(component.isShow).toEqual(true);
    });
  });
  describe('setPosition()', () => {
    it('should be equal to expected assigned value', function () {
      let top: number = 100,
        left: number = 100;
      component.setPosition(top, left);
      expect(component.left).toEqual(left + 'px');
      expect(component.top).toEqual(top + 'px');
    });
  });
  describe('setAttribute()', () => {
    it('should be equal to expected assigned value', function () {
      let context: Context = {
        top: 10,
        left: 20,
        id: '302323233323',
        name: 'mahdi',
        cardId: '4231321',
      };
      component.setAttribute(context);
      expect(component.id).toEqual(parseInt(context.id));
    });
  });
  describe('onExpand()', () => {
    it('should run this method for service', function () {
      graphServiceSpy.expandGraph.and.callThrough();
      component.onExpand();
      expect(graphService.expandGraph).toHaveBeenCalled();
    });
  });
});
