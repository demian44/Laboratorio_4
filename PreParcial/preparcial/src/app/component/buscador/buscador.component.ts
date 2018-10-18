import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Helado } from '../../../model/helado';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  sabor: string = "";
  exist: boolean = false;
  constructor() { }
  @Input() helados: Helado[];
  @Output() heladoEvent: EventEmitter<String> = new EventEmitter<String>();
  cantidad: string;
  ngOnInit() {
    console.log("Buscador: ", this.helados);
  }

  buscar() {
    this.exist = false;
    this.helados.forEach((helado) => {
      if (helado.sabor.trim().toLowerCase() === this.sabor.trim().toLowerCase()) {
        this.exist = true;
        if (helado.kilos > 0)
          this.cantidad = ("Hay " + helado.kilos + " kilos");
        else
          this.heladoEvent.emit("No hay stock");
      }
    });
    if (!this.exist) this.heladoEvent.emit("No existe el sabor");
  }

  encontrar(helado: Helado): void {
    if (helado.sabor.trim().toLowerCase() === this.sabor.trim().toLowerCase()) {
      this.exist = true;
      if (helado.kilos > 0)
        this.cantidad = ("Hay " + helado.kilos + " kilos");
      else
        this.heladoEvent.emit("No hay stock");
    }
  }

  onKey(event) {
    if (event.key == "Enter") this.buscar();
  }

}
