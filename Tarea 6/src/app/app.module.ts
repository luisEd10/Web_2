import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { CursosComponent } from './pages/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    InicioComponent,
    EducacionComponent,
    ContactoComponent,
    ProyectosComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
