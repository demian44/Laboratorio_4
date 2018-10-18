import { log } from 'util';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { promise } from 'selenium-webdriver';
import { MiHttpService } from './mi-http/mi-http.service';
import { catchError } from 'rxjs/Operators';
import { Helado } from '../../model/helado';


@Injectable({
  providedIn: 'root'
})
export class HeladoService {
  constructor(public miHttp: MiHttpService) { }

  public listar(): Observable<any> {
    return this.miHttp.httpGetPromise("", {})
      .pipe(catchError(() => "ASDJASDOPAS"), data => {
        console.log("data: ", (data));
        return data;
      });
  }

  public guardar(helado: Helado): Observable<any> {
    return this.miHttp.httpPostPromise("", helado);
  }

  public borrar(helado: number): Observable<any> {

    return this.miHttp.httpPostPromise("delete", { "id": helado });
  }
}
