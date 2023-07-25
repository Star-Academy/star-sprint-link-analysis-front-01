import { TestBed } from "@angular/core/testing";

import { ExpandDialogPopperService } from "./expand-dialog-popper.service";

describe("ExpandDialogPopperService", () => {
  let service: ExpandDialogPopperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpandDialogPopperService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
