import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';


@Injectable({
  providedIn: 'root'
})
export class MiHttpService {
  public base: string = "https://restcountries.eu/rest/v2/";
  constructor(public http: Http) { }

  public httpGetPromise(metodo: string, objeto: any): Observable<any> {
    return this.http
      .get(this.base + metodo)
      .pipe(catchError(() => {
        return "A listo."
      }), tap((res: Response) => {
        res.json();
      }));
  }

  private extraerDatos(resp: Response) {

    return resp.json() || {};

  }
  private handleError(error: Response | any) {

    return error;
  }
}
