import { TestBed } from '@angular/core/testing';

import { UserInfoPopperService } from './user-info-popper.service';

describe('PopperService', () => {
  let service: UserInfoPopperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoPopperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
