import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'image/jpeg'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = 'http://localhost/WebApi/';

  constructor(private http: Http, private httpClient: HttpClient) {

  }


  public post(metodo: string, objeto: any): Observable<any> {
    //image/jpeg
    console.log("Entro");
    return this.http
      .post(this.url + "/login/", objeto)
      .pipe(catchError(() => {
        console.log("Error");
        return "A listo."
      }), tap((res: Response) => {
        console.log("Respuesta" + res);
      }));

  }

  public uploadFile(file: any): Observable<any> {
    console.log(file);
    let formData = new FormData();
    formData.append('foto',  file,'foto');


    return this.httpClient
      .post(this.url + "file/", formData, httpOptions)
      .pipe(catchError(() => {
        console.log("Error");
        return "A listo."
      }), tap((res: Response) => {
        console.log("Respuesta" + res);
      }));

  }
  public coso() {
  }

}
