import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeladoService } from '../../service/helado.service';
import { Helado } from '../../../model/helado';


@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  constructor(private heladoService: HeladoService) { }
  @Input() buttonName: string;
  @Input() id: number;
  @Output() borradoEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit() {
    String
    console.log(this.id);
  }


  delete() {
    let helado: Helado = new Helado();
    helado.id = this.id;
    this.heladoService.borrar(helado.id).subscribe(
      result => {
        console.log("Result: ", result);
        this.borradoEvent.emit(true);
      });

  }

}
