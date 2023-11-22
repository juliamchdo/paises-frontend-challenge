import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class TokenRefreshService {
  private refreshInterval = 5  * 60 * 1000;

  constructor(private loginService: LoginService) {}

  startTokenRefresh(): Observable<void> {
    return timer(0, this.refreshInterval).pipe(
      switchMap(() => this.loginService.refreshToken())
    );
  }
}
