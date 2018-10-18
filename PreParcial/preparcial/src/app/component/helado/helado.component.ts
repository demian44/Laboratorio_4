import { Component, OnInit, Host } from '@angular/core';
import { HeladoService } from '../../service/helado.service';
import { element } from '@angular/core/src/render3/instructions';
import { Helado } from '../../../model/helado';
import { HOST, IMG } from '../../service/mi-http/mi-http.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-helado',
  templateUrl: './helado.component.html',
  styleUrls: ['./helado.component.css']
})
export class HeladoComponent implements OnInit {
  buttonName: string = "Borrar";
  constructor(private helado: HeladoService) { }
  helados: Helado[];
  ngOnInit() {
    this.helados = [];
    this.helado.listar().subscribe(
      list => {

        console.log(list);
        let response: any = JSON.parse(list._body);
        let elements: any[];
        if (response.code === 0) {
          elements = response.response;
          elements.forEach(hel => {
            let helado: Helado = new Helado();
            helado.sabor = hel.sabor;
            helado.tipo = hel.tipo;
            helado.kilos = hel.kilos;
            helado.id = hel.id;

            helado.foto = HOST + IMG + hel.id + ".jpg";
            this.helados.push(helado);
          });
          //  console.log(this.helados);
        }
        console.log(this.helados);
      }

    );

  }

  seBorro(event) {
    this.ngOnInit();
  }

}
