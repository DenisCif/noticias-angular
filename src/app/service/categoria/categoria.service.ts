import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoriaDTO } from 'src/app/dto/Categoria.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = 'http://localhost:8080/api/categoria';
  private token = sessionStorage.getItem('token');

  constructor(private http: HttpClient) { }

  listarCategorias(): Observable<categoriaDTO[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<categoriaDTO[]>(this.baseUrl + '/listado', { headers: headers });
  }
}
