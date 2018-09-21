import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public miHttp: MiHttpService) { }

  public listar(): Observable<any> {
    return this.miHttp.httpGetPromise("all", {})
      .pipe(data => {        
        return data;
      });
  }
}
