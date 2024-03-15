import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaDTO } from 'src/app/dto/Noticia.dto';
import { NoticiaService } from 'src/app/service/noticia/noticia.service';

@Component({
  selector: 'app-inicio-noticias',
  templateUrl: './inicio-noticias.component.html',
  styleUrls: ['./inicio-noticias.component.css']
})
export class InicioNoticiasComponent {
  noticias: NoticiaDTO[] = [];
  idNoticia: number = 0;

  idCategoria: number = 0;
  porCategoria: boolean = false;

  currentPage: number = 1;
  pageSize: number = 5

  constructor(private noticiasSerice: NoticiaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarCategoria();
    this.obtenerIDNoticia();
    this.cargarCategoria();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  paginatedNoticias(): NoticiaDTO[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.noticias.slice(startIndex, startIndex + this.pageSize);
  }

  totalPages(): number {
    return Math.ceil(this.noticias.length / this.pageSize);
  }

  totalPagesArray(): number[] {
    return Array(this.totalPages()).fill(0).map((x, i) => i + 1);
  }

  obtenerNoticiass(): void {
    this.noticiasSerice.listarNoticias()
      .subscribe(noticias => {
        this.noticias = noticias;
      });
  }

  obtenerNoticiasPorCategoria(): void {
    this.noticiasSerice.listarNoticiasPorCategoria(this.porCategoria, this.idCategoria)
      .subscribe(noticias => {
        this.noticias = noticias;
      });
  }

  obtenerIDNoticia() {
    const idNoticiaString = sessionStorage.getItem("idNoticia");
    if (idNoticiaString) {
      this.idNoticia = parseInt(idNoticiaString, 10);
    }
  }

  verDetalles(idNoticia: number): void {
    sessionStorage.setItem("idNoticia", idNoticia.toString());
    this.router.navigate(['/detalle']);
  }

  cargarCategoria() {
    const idCategoria = sessionStorage.getItem("idCategoria");
    if (idCategoria) {
      this.porCategoria = true;
      this.idCategoria = parseInt(idCategoria, 10);
      this.obtenerNoticiasPorCategoria();
    } else {
      this.obtenerNoticiass();
    }

  }

}
