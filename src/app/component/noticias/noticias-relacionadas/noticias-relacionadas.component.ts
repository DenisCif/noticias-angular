import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaDTO } from 'src/app/dto/Noticia.dto';
import { NoticiaService } from 'src/app/service/noticia/noticia.service';

@Component({
  selector: 'app-noticias-relacionadas',
  templateUrl: './noticias-relacionadas.component.html',
  styleUrls: ['./noticias-relacionadas.component.css']
})
export class NoticiasRelacionadasComponent {
  noticias: NoticiaDTO[] | undefined;
  idNoticia: number = 0;

  constructor(private noticiasSerice: NoticiaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerIDNoticia();
    this.obtenerNoticiasRelacionadas();
  }

  obtenerNoticiasRelacionadas(): void {
    if (this.idNoticia) {
      this.noticiasSerice.listarNoticiasRelacionadas(this.idNoticia)
        .subscribe(noticias => {
          this.noticias = noticias;
        });
    }
  }

  obtenerIDNoticia() {
    const idNoticiaString = sessionStorage.getItem("idNoticia");
    if (idNoticiaString) {
      this.idNoticia = parseInt(idNoticiaString, 10);
    }
  }


  verDetalles(idNoticia: number): void {
    sessionStorage.setItem("idNoticia", idNoticia.toString());
    this.router.navigate(['/detalle']).then(() => {
      window.location.reload();
    });
  }

}
