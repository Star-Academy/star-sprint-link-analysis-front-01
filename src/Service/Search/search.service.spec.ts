import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { GraphService } from '../Graph/graph.service';

describe('SearchService', () => {
  let service: SearchService;
  let graphService: GraphService;
  let spyGraphService: jasmine.SpyObj<GraphService>;

  beforeEach(() => {
    spyGraphService = jasmine.createSpyObj(GraphService, ['getInitGraph']);
    TestBed.configureTestingModule({
      providers: [
        SearchService,
        { provide: GraphService, useValue: spyGraphService },
      ],
    });
    service = TestBed.inject(SearchService);
    graphService = TestBed.inject(GraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get graph by id', function () {
    service.getById(1);
    expect(graphService.getInitGraph).toHaveBeenCalled();
  });
});
