import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";
import { testGraphResponse } from "../../constants";

describe("UserService", (): void => {
  let service: UserService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it("should be created", (): void => {
    expect(service).toBeTruthy();
  });

  it("should find right user in list", function (): void {
    service.users = testGraphResponse.vertices;
    expect(service.findById(testGraphResponse.vertices[0].id)).toEqual(
      testGraphResponse.vertices[0],
    );
  });
});
