import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient, private router:Router) {}

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

  public refreshToken(): Observable<void> {
    const token = this.getToken();

    if (!token) {
        this.router.navigate(['/login']);
       throw 'Token não disponível'
    }

    const url = `${environment.host}/usuario/renovar-ticket?token=${token}`; 

    return this.httpClient.get(url).pipe(
      map(() => {
        console.log('Token renovado com sucesso');
      }),
      catchError((error) => {
        console.error('Falha ao renovar token:', error);
        throw 'Falha ao renovar token.';
      })
    );
  }

  public getToken(): string | null {
    return localStorage.getItem("token");
  }

  private setTokenLocalStorage(response: any): void {
    localStorage.setItem("token", response.token);
    localStorage.setItem("login", response.login);
    localStorage.setItem("nome", response.nome);
    localStorage.setItem("administrador", response.administrador);
  }

  private removeTokenLocalStorage(): void {
    localStorage.removeItem("login");
    localStorage.removeItem("nome");
    localStorage.removeItem("administrador");
    localStorage.removeItem("token");
  }
}
