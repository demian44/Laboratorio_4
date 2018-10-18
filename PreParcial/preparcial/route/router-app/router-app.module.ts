import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeladoComponent } from 'src/app/component/helado/helado.component';
import { FormularioComponent } from 'src/app/component/formulario/formulario.component';
import { PrincipalComponent } from 'src/app/component/principal/principal.component';

const MiRuteo = [
  { path: 'helados', component: HeladoComponent },
  { path: 'nuevohelado', component: FormularioComponent },
  { path: '', component: PrincipalComponent },
  /*{    path: 'Juegos',
    component: JuegosComponent,
    children:
      [{ path:'', component: MenuCardComponent },
      { path: 'Adivina', component: AdivinaElNumeroComponent },
      { path: 'AdivinaMasListado', component: AdivinaMasListadoComponent },
      { path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent },
      { path: 'Batalla-Naval', component: BatallaNavalComponent },
      { path: 'piedra-tijera', component: PiedraTijeraComponent },
      { path: 'anagrama', component: AnagramaComponent },
      { path: 'tateti', component: TatetiComponent },*/
      ];
  



@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RouterAppModule { }
