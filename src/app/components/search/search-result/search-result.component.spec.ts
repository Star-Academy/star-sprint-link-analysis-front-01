import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import { SearchModule } from '../search.module';
import { CircleAvatarModule } from '../../circle-avatar/circle-avatar.module';

describe('SearchResultComponent', ():void => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(() :void=> {
    TestBed.configureTestingModule({
      declarations: [SearchResultComponent],
      imports: [SearchModule, CircleAvatarModule],
    });
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ():void => {
    expect(component).toBeTruthy();
  });
});
