import { TestBed } from '@angular/core/testing';
import { FlowService } from './flow.service';

describe('FlowService', ():void => {
  let service: FlowService;

  beforeEach(():void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowService);
  });

  it('should be created', ():void => {
    expect(service).toBeTruthy();
  });
});
