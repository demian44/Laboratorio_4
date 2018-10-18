import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeladoComponent } from './component/helado/helado.component';
import { HttpModule, Http } from '@angular/http';
import { BotonComponent } from './component/boton/boton.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { Component } from '@angular/core';
import { RouterAppModule } from 'route/router-app/router-app.module';
import { FormsModule } from '@angular/forms';
import { BuscadorComponent } from './component/buscador/buscador.component';
import { MostradorBuscadorComponent } from './component/mostrador-buscador/mostrador-buscador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdModalComponent } from "./NgbdModalComponent";
import { NgbdModalContent } from './NgbdModalContent';
import { ModalComponent } from './component/modal/modal.component';
import { NgbdModalContentComponent } from './component/ngbd-modal-content/ngbd-modal-content.component';
import { PrincipalComponent } from './component/principal/principal.component';

// import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HeladoComponent,
    BotonComponent,
    FormularioComponent,
    BuscadorComponent,
    MostradorBuscadorComponent,
    NgbdModalContent,
    ModalComponent,
    NgbdModalContentComponent,
    PrincipalComponent
  ],
  imports: [
    RouterAppModule, BrowserModule, BrowserModule, HttpModule, FormsModule, 
    NgbModule.forRoot(),               // <========== Add this line!1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
