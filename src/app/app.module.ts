import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { InicioComponent } from './component/inicio/inicio/inicio.component';
import { InicioNoticiasComponent } from './component/noticias/inicio-noticias/inicio-noticias.component';
import { CategoriasComponent } from './component/noticias/categorias/categorias.component';
import { DetalleNoticiaComponent } from './component/noticias/detalle-noticia/detalle-noticia.component';
import { NoticiasRelacionadasComponent } from './component/noticias/noticias-relacionadas/noticias-relacionadas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    InicioNoticiasComponent,
    CategoriasComponent,
    DetalleNoticiaComponent,
    NoticiasRelacionadasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
