import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import { SearchModule } from '../search.module';

describe('SearchBoxComponent', (): void => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      imports: [SearchModule],
    });
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
