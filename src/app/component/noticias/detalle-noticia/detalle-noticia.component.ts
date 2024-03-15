import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaDTO } from 'src/app/dto/Noticia.dto';
import { NoticiaService } from 'src/app/service/noticia/noticia.service';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent {
  idNoticia: number = 0;
  noticia: NoticiaDTO | undefined;
  noticias: NoticiaDTO[] | undefined;


  constructor(private route: ActivatedRoute, private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.obtenerIDNoticia();
    this.cargarNoticia();
  }

  cargarNoticia(): void {
    this.noticiaService.verNoticia(this.idNoticia)
      .subscribe(noticia => {
        this.noticia = noticia;
      });
  }
  obtenerIDNoticia() {
    const idNoticiaString = sessionStorage.getItem("idNoticia");
    if (idNoticiaString) {
      this.idNoticia = parseInt(idNoticiaString, 10);
    }
  }


}