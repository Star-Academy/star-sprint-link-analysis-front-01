import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { SearchService } from '../../../Service/Search/search.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchModule } from './search.module';
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;
  let searchServiceSpy: jasmine.SpyObj<any>;
  beforeEach(() => {
    searchServiceSpy = jasmine.createSpyObj(SearchService, ['getById']);
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [SearchModule],
      providers: [
        SearchComponent,
        {
          provide: SearchService,
          useValue: searchServiceSpy,
        },
      ],
    });
    searchService = TestBed.inject(SearchService);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('onTxtChange()', () => {
    it('should call through getById in searchService', function () {
      searchServiceSpy.getById.and.callThrough();
      component.onTxtChange('1000000000');
      expect(searchService.getById).toHaveBeenCalled();
    });
    it('should not call through getById in searchService', function () {
      searchServiceSpy.getById.and.callThrough();
      component.onTxtChange('2');
      expect(searchService.getById).toHaveBeenCalledTimes(0);
    });
  });
});
