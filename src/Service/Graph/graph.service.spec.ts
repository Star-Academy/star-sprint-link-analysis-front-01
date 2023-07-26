import { TestBed } from '@angular/core/testing';
import { GraphService } from './graph.service';
import { ApiService } from '../Api/api.service';
import { ConverterService } from '../Converter/converter.service';
import { UserService } from '../User/user.service';
import { EventService } from '../Event/event.service';
import { GraphBuilderService } from './Builder/graph-builder.service';
import { testGraphResponse } from '../../constants';
import { of } from 'rxjs';

describe('GraphService', (): void => {
  let service: GraphService;

  let api: ApiService;
  let apiSpy: jasmine.SpyObj<ApiService>;

  let converter: ConverterService;
  let converterSpy: jasmine.SpyObj<ConverterService>;

  let userService: UserService;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  let eventService: EventService;
  let eventServiceSpy: jasmine.SpyObj<EventService>;

  let graphBuilder: GraphBuilderService;

  beforeEach((): void => {
    apiSpy = jasmine.createSpyObj(ApiService, ['expandGraph']);
    converterSpy = jasmine.createSpyObj(ConverterService, [
      'convertNodeServerResponsesToGraphNode',
      'convertEdgeServerResponsesToGraphEdge',
    ]);
    userServiceSpy = jasmine.createSpyObj(UserService, ['findById']);
    eventServiceSpy = jasmine.createSpyObj(EventService, [
      'initialGraphEvents',
    ]);

    TestBed.configureTestingModule({
      providers: [
        GraphService,
        { provide: ApiService, useValue: apiSpy },
        { provide: ConverterService, useValue: converterSpy },
        { provide: UserService, useValue: userServiceSpy },
        { provide: EventService, useValue: eventServiceSpy },
      ],
    });

    service = TestBed.inject(GraphService);
    graphBuilder = TestBed.inject(GraphBuilderService);
    api = TestBed.inject(ApiService);
    converter = TestBed.inject(ConverterService);
    userService = TestBed.inject(UserService);
    eventService = TestBed.inject(EventService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  it('should call builder on graphInit', function (): void {
    spyOn(graphBuilder, 'buildGraph');
    service.initGraph(null);

    expect(service.initGraph).toThrowError();
    expect(graphBuilder.buildGraph).toHaveBeenCalled();
  });

  it('should call eventService on graphEvents', function (): void {
    eventServiceSpy.initialGraphEvents.and.callThrough();
    service.graphEvents();
    expect(eventServiceSpy.initialGraphEvents).toHaveBeenCalled();
  });
  it('should call api on renderGraph', function (): void {
    apiSpy.expandGraph.and.returnValue(of(testGraphResponse));
    spyOn(service, 'renderGraph').and.returnValue();

    service.renderGraph(api.expandGraph(testGraphResponse.vertices[0], 2));

    expect(api.expandGraph).toHaveBeenCalled();
    expect(service.renderGraph).toHaveBeenCalled();
  });
});
