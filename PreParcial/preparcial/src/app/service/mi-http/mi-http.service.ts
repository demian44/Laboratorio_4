import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';
import { Helado } from '../../../model/helado';
// import { HttpClient, Request } from 'selenium-webdriver/http';

export const HOST = "http://localhost/PreParcial/";
export const API = "helado/"
export const IMG = "imgs/";
@Injectable({
  providedIn: 'root'
})
export class MiHttpService {
  constructor(public http: Http) { }

  public httpGetPromise(metodo: string, objeto: any): Observable<any> {
    return this.http
      .get(HOST + API)
      .pipe(catchError(() => {
        return "A listo."
      }), tap((res: Response) => {
        res;
      }));
  }

  public httpPostPromise(metodo: string, objeto: any): Observable<any> {
    return this.http
      .post(HOST + API + metodo, objeto)
      .pipe(catchError(() => {
        console.log("Error");
        return "A listo."
      }), tap((res: Response) => {
        console.log("Respuesta" + res);
      }));

  }
  public httpDeletePromise(metodo: string, objeto: any): Observable<any> {

    let option: RequestOptions = new RequestOptions();
    option.body = objeto;
    option.params = objeto;
    let headers: Headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    option.headers = headers;

    return this.http
      .delete(HOST + API + "", option)
      .pipe(catchError(() => {
        console.log("Error");
        return "A listo."
      }), tap((res: Response) => {
        console.log("Respuesta" + res);
      }));

  }

  private extraerDatos(resp: Response) {

    return resp.json() || {};

  }
  private handleError(error: Response | any) {

    return error;
  }
}
