import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', (): void => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent],
    });
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  describe('isLoading()', (): void => {
    it('should set boolean variable as expected(True)', (): void => {
      component.isLoading = true;
      expect(component.isLoading).toBeTruthy();
    });
  });
});
