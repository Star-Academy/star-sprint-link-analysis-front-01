import { TestBed } from "@angular/core/testing";
import { GraphService } from "./graph.service";
import { ApiService } from "../Api/api.service";
import { ConverterService } from "../Converter/converter.service";
import { UserService } from "../User/user.service";
import { EventService } from "../Event/event.service";
import { GraphBuilderService } from "./Builder/graph-builder.service";

describe("GraphService", () => {
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

  beforeEach(() => {
    apiSpy = jasmine.createSpyObj(ApiService, ["expandGraph"]);
    converterSpy = jasmine.createSpyObj(ConverterService, [
      "convertNodeServerResponsesToGraphNode",
      "convertEdgeServerResponsesToGraphEdge",
    ]);
    userServiceSpy = jasmine.createSpyObj(UserService, ["findById"]);
    eventServiceSpy = jasmine.createSpyObj(EventService, [
      "initialGraphEvents",
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

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call builder on graphInit", function () {
    spyOn(graphBuilder, "buildGraph");
    service.initGraph(null);

    expect(service.initGraph).toThrowError();
    expect(graphBuilder.buildGraph).toHaveBeenCalled();
  });
});
