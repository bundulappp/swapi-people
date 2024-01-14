import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this.handleHttpError(error);
        } else {
          console.error('Non-HTTP error:', error);
          this.toastr.error('An unexpected error occurred');
        }
        // Return an empty observable to terminate the error flow
        return throwError(() => new Error('Error occurred'));
      })
    );
  }

  private handleHttpError(error: HttpErrorResponse) {
    let errorMessage = '';
    switch (error.status) {
      case 404:
        errorMessage = 'Resource not found.';
        break;
      case 500:
        errorMessage = 'Server error occurred.';
        break;
      default:
        errorMessage = 'An unknown error occurred.';
        break;
    }
    this.toastr.error(errorMessage);
  }
}
