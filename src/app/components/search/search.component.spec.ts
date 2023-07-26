import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { SearchService } from '../../../Service/Search/search.service';
import { SearchModule } from './search.module';
describe('SearchComponent', ():void => {

  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchService: SearchService;
  let searchServiceSpy: jasmine.SpyObj<any>;

  beforeEach(():void => {

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

  it('should create', ():void => {
    expect(component).toBeTruthy();
  });
  describe('onTxtChange()', ():void => {

    it('should call through getById in searchService', function ():void {

      searchServiceSpy.getById.and.callThrough();
      component.onTxtChange('1000000000');
      expect(searchService.getById).toHaveBeenCalled();
    });
    it('should not call through getById in searchService', function ():void {

      searchServiceSpy.getById.and.callThrough();
      component.onTxtChange('2');
      expect(searchService.getById).toHaveBeenCalledTimes(0);
    });
  });
});
