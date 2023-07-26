import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExpandOverlayComponent } from "./expand-overlay.component";
import { GraphService } from "../../../Service/Graph/graph.service";
import Context from "../../../Model/Context";

describe("ExpandOverlayComponent", (): void => {
  let component: ExpandOverlayComponent;
  let fixture: ComponentFixture<ExpandOverlayComponent>;
  let graphService: GraphService;
  let graphServiceSpy: jasmine.SpyObj<any>;

  beforeEach((): void => {
    graphServiceSpy = jasmine.createSpyObj(GraphService, ["expandGraph"]);
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

  it("should create component", (): void => {
    expect(component).toBeTruthy();
  });

  describe("onClose()", (): void => {
    it("should be change isShow to false", function (): void {
      component.isShow = true;
      component.onClose();
      expect(component.isShow).toEqual(false);
    });
  });

  describe("hide()", (): void => {
    it("should be change isShow to false", function (): void {
      component.isShow = true;
      component.hide();
      expect(component.isShow).toEqual(false);
    });
  });

  describe("show()", (): void => {
    it("should be change isShow to true", function (): void {
      component.isShow = false;
      component.show();
      expect(component.isShow).toEqual(true);
    });
  });

  describe("setPosition()", (): void => {
    it("should be equal to expected assigned value", function (): void {
      let top: number = 100,
        left: number = 100;
      component.setPosition(top, left);
      expect(component.left).toEqual(left + "px");
      expect(component.top).toEqual(top + "px");
    });
  });

  describe("setAttribute()", (): void => {
    it("should be equal to expected assigned value", function (): void {
      let context: Context = {
        top: 10,
        left: 20,
        id: "20",
        name: "mahdi",
        cardId: "4231321",
      };

      component.setAttribute(context);
      expect(component.id).toEqual(parseInt(context.id));
    });
  });

  describe("onExpand()", (): void => {
    it("should run this method for service", function (): void {
      graphServiceSpy.expandGraph.and.callThrough();
      component.onExpand();
      expect(graphService.expandGraph).toHaveBeenCalled();
    });
  });
});
