import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenKey = 'token';
  private refreshToken = 'refreshToken';
  private idUsuario = 'idUsuario';
  private message = 'message';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    const formData = {
      email: email,
      password: password
    };

    return this.http.post(`${this.apiUrl}/signin`, formData)
      .pipe(
        map((response: any) => {
          sessionStorage.setItem(this.tokenKey, response.token);
          sessionStorage.setItem(this.refreshToken, response.refreshToken);
          sessionStorage.setItem(this.idUsuario, response.idUsuario);
          sessionStorage.setItem(this.message, response.message);
          this.router.navigate(['/']);
          return response;
        })
      );
  }

  signup(nombre: string, apellido: string, email: string, password: string): Observable<any> {
    const formData = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password
    };
    return this.http.post(`${this.apiUrl}/signup`, formData)
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/signin']);
  }

}
