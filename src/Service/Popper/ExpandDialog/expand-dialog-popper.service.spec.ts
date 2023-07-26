import { TestBed } from '@angular/core/testing';
import { ExpandDialogPopperService } from './expand-dialog-popper.service';

describe('ExpandDialogPopperService', ():void => {
  let service: ExpandDialogPopperService;

  beforeEach(() :void=> {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpandDialogPopperService);
  });

  it('should be created', ():void => {
    expect(service).toBeTruthy();
  });
});
