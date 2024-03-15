import { Component } from '@angular/core';
import { categoriaDTO } from 'src/app/dto/Categoria.dto';
import { CategoriaService } from 'src/app/service/categoria/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias: categoriaDTO[] | undefined;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.categoriaService.listarCategorias()
      .subscribe(categorias => {
        this.categorias = categorias;
      });
  }

  guardarIdCategoria(idCategoria: number): void {
    sessionStorage.setItem("idCategoria", idCategoria.toString());
    window.location.reload();
  }

  quitarFiltro() {
    sessionStorage.removeItem("idCategoria")
    window.location.reload();
  }
}
