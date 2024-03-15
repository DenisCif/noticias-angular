import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { NoticiaDTO } from 'src/app/dto/Noticia.dto';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private baseUrl = 'http://localhost:8080/api/noticia';
  private token = sessionStorage.getItem('token');
  private idUsuario = sessionStorage.getItem('idUsuario');

  constructor(private http: HttpClient, private router: Router) { }

  listarNoticias(): Observable<NoticiaDTO[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<NoticiaDTO[]>(this.baseUrl + '/listado?idUsuario=' + this.idUsuario, { headers: headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            this.router.navigate(['/signin']);
          }
          return throwError(() => error);
        })
      );
  }

  listarNoticiasPorCategoria(porCategoria: boolean, idCategoria: number): Observable<NoticiaDTO[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<NoticiaDTO[]>(this.baseUrl +
      '/listado?porCategoria=' + porCategoria + '&idCategoria=' + idCategoria + '&idUsuario'
      + this.idUsuario, { headers: headers });
  }

  verNoticia(idNoticia: number): Observable<NoticiaDTO> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<NoticiaDTO>(this.baseUrl + '/ver/' + idNoticia + '?idUsuario=' + this.idUsuario, { headers: headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            this.router.navigate(['/signin']);
          }
          return throwError(() => error);
        })
      );
  }

  listarNoticiasRelacionadas(idNoticia: number): Observable<NoticiaDTO[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<NoticiaDTO[]>(this.baseUrl + '/' + idNoticia + '/relacionadas?=idUsuario=' + this.idUsuario, { headers: headers });
  }

  darLike(idNoticia: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const body = {
      idUsuario: this.idUsuario,
      idNoticia: idNoticia
    };

    return this.http.post<any>(this.baseUrl + '/like', body, { headers: headers });
  }

}