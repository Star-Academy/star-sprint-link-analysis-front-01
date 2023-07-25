import { TestBed } from "@angular/core/testing";

import { ApiService } from "./api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { testGraphResponse } from "../../constants";
import { LoadingService } from "../Loading/loading.service";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

describe("ApiService", () => {
  let service: ApiService;
  let httpClient: HttpClient;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let loadingService: LoadingService;
  let loadingServiceSpy: jasmine.SpyObj<LoadingService>;

  beforeEach(() => {
    loadingServiceSpy = jasmine.createSpyObj(LoadingService, [
      "showLoading",
      "hideLoading",
    ]);
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["post"]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
        // Use the spy as a provider
        { provide: LoadingService, useValue: loadingServiceSpy },
        { provide: HttpClient, useValue: httpClientSpy },
        // {provide: HttpClient, useValue: httpClient}
      ],
    });

    service = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
    loadingService = TestBed.inject(LoadingService);
  });

  it("should init graph", () => {
    // expect(service).toBeTruthy();
    loadingServiceSpy.showLoading.and.callThrough();
    loadingServiceSpy.hideLoading.and.callThrough();
    httpClientSpy.post.and.returnValue(of(testGraphResponse));
    const setStateSpy = spyOn(service, "setState").and.callThrough();

    service.initGraph(1000000426).subscribe((data) => {
      expect(data).toEqual(testGraphResponse);
    });

    expect(loadingServiceSpy.showLoading).toHaveBeenCalled();
    expect(setStateSpy).toHaveBeenCalled();
    expect(httpClientSpy.post).toHaveBeenCalled();
  });

  it("should expand graph", () => {
    // expect(service).toBeTruthy();
    loadingServiceSpy.showLoading.and.callThrough();
    loadingServiceSpy.hideLoading.and.callThrough();

    httpClientSpy.post.and.returnValue(of(testGraphResponse));
    const setStateSpy = spyOn(service, "setState").and.callThrough();

    service.expandGraph(testGraphResponse.vertices[0], 2).subscribe((data) => {
      expect(data).toEqual(testGraphResponse);
    });
  });

  it("should throw error", () => {
    expect(() => {
      service.expandGraph(undefined, 2);
    }).toThrowError("User Not Found");
  });

  it("should setState", function () {
    let response = of(testGraphResponse);
    service.setState(response);
    expect(service["_currentState"]).toEqual(testGraphResponse);
  });
});
