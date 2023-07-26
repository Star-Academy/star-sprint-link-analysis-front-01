import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from '../ErrorService/error.service';

@Injectable({
  providedIn: 'root',
})
export class MyErrorHandlerService implements ErrorHandler {
  constructor(private errorService: ErrorService) {}

  handleError(error: any): void {
    this.errorService.handleError(error);
  }
}
