import { TestBed } from "@angular/core/testing";
import { LoadingService } from "./loading.service";
import { LoadingComponent } from "../../app/components/loading/loading.component";

describe("LoadingService", (): void => {
  let service: LoadingService;
  let spyComponent: jasmine.SpyObj<LoadingComponent>;

  beforeEach((): void => {
    spyComponent = jasmine.createSpyObj(LoadingComponent, ["isLoading"]);
    TestBed.configureTestingModule({
      providers: [
        LoadingService,
        { provide: LoadingComponent, useValue: spyComponent },
      ],
    });

    service = TestBed.inject(LoadingService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
