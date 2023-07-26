import { TestBed } from '@angular/core/testing';
import { EventService } from './event.service';

describe('EventService', (): void => {
  let service: EventService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
