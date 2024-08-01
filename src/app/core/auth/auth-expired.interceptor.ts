import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const authExpired: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService: AuthService = inject(AuthService);
  return next(req).pipe(
    tap({
      error: (error: HttpErrorResponse) => {
        if (
          error.status === 401 &&
          error.url &&
          !error.url.includes('api/auth') &&
          authService.isAuthenticated()
        ) {
          authService.login();
        }
      },
    })
  );
};
