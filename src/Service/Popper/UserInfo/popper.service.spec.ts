import { TestBed } from "@angular/core/testing";
import { UserInfoPopperService } from "./user-info-popper.service";

describe("PopperService", (): void => {
  let service: UserInfoPopperService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoPopperService);
  });

  it("should be created", (): void => {
    expect(service).toBeTruthy();
  });
});
