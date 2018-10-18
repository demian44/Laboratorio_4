import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public miHttp: MiHttpService) { }

  public listar(): Observable<any> {
    return this.miHttp.httpGetPromise("all", {})
      .pipe(catchError(()=>"ASDJASDOPAS"), data => {        
        return data;
      });
  }
}
