import { Component, OnInit, Input } from '@angular/core';
import { Helado } from '../../../model/helado';

@Component({
  selector: 'app-mostrador-buscador',
  templateUrl: './mostrador-buscador.component.html',
  styleUrls: ['./mostrador-buscador.component.css']
})
export class MostradorBuscadorComponent implements OnInit {

  constructor() { }
  @Input() helados: Helado[];
  ngOnInit() {
    console.clear();
    console.log("mostrador",this.helados);
  }

  showMessege(event:String){
    alert(event);
  }
}
