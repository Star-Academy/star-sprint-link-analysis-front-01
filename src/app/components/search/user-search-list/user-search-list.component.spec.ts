import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchListComponent } from './user-search-list.component';

describe('UserSearchListComponent', (): void => {
  let component: UserSearchListComponent;
  let fixture: ComponentFixture<UserSearchListComponent>;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      declarations: [UserSearchListComponent],
    });
    fixture = TestBed.createComponent(UserSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
