import { TestBed } from '@angular/core/testing';
import { MyErrorHandlerService } from './my-error-handler.service';

describe('MyErrorHandlerService', (): void => {
  let service: MyErrorHandlerService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyErrorHandlerService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
