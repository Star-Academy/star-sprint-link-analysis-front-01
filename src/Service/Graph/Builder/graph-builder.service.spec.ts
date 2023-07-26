import { TestBed } from '@angular/core/testing';
import { GraphBuilderService } from './graph-builder.service';

describe('GraphBuilderService', (): void => {
  let service: GraphBuilderService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphBuilderService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
