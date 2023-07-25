import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphComponent } from './graph.component';
import {GraphService} from "../../../Service/Graph/graph.service";

describe('GraphComponent', () => {
  let component: GraphComponent;
  let fixture: ComponentFixture<GraphComponent>;
  let graphService: GraphService;
  let graphServiceSpy: jasmine.SpyObj<any>;
  beforeEach(() => {
    graphServiceSpy = jasmine.createSpyObj(GraphService, ["initGraph","graphEvents"])
    TestBed.configureTestingModule({
      declarations: [GraphComponent],
      providers: [GraphComponent, {
        provide: GraphService, useValue: graphServiceSpy,
      }]
    });
    fixture = TestBed.createComponent(GraphComponent);
    graphService = TestBed.inject(GraphService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  describe("ngOnInit()",()=>{
    it('should call through initGraph in GraphService', function () {
      graphServiceSpy.initGraph.and.callThrough();
      component.ngOnInit();
      expect(graphService.initGraph).toHaveBeenCalled();
    });
  })
  describe("ngAfterViewInit()", ()=> {
    it('should call through graphEvents in GraphService', function () {
      graphServiceSpy.graphEvents.and.callThrough();
      component.ngOnInit();
      expect(graphService.graphEvents).toHaveBeenCalled();
    });
  })
});
