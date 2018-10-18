import { Component, NgModule, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Helado } from '../../../model/helado';
import { HeladoService } from '../../service/helado.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formHelado: Helado = new Helado();
  constructor(private heladoService: HeladoService,private router: Router) { }

  ngOnInit() {
  }

  showHelado() {
    if (this.formHelado.kilos > 0 && this.formHelado.kilos <= 30 &&
      this.formHelado.sabor.trim().length > 0 && this.formHelado.tipo.trim().length > 0)
      this.heladoService.guardar(this.formHelado).subscribe(
        list => {
          this.router.navigate(["/helados"]);
        }

      );

  }

}
