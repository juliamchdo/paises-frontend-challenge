import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // quando a pessoa estiver logada, ela tem o token salvo
  constructor(private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();

    if (token !== null) {
      const authRequest = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(authRequest);
    }

    return next.handle(req);
  }
}
