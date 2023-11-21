import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    const url = `${environment.host}/usuario/autenticar?login=${username}&senha=${password}`;
  
    return this.httpClient
      .post(url, { responseType: 'json' })
      .pipe(
        map((data) => this.setTokenLocalStorage(data)),
        catchError((error) => {
          this.removeTokenLocalStorage();
          throw 'Falha ao efetuar login.';
        })
      );
  }

  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  private setTokenLocalStorage(response: any): void {
    const { type, token } = response;
    localStorage.setItem("token", response.token);
    localStorage.setItem("login", response.login);
    localStorage.setItem("nome", response.nome);
    localStorage.setItem("administrador", response.administrador);
  }

  private removeTokenLocalStorage(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    localStorage.removeItem("nome");
    localStorage.removeItem("administrador");
  }
}
