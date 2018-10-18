import { Component, OnInit, NgModule } from '@angular/core';
import { LoginService } from "../../service/login.service"
import { catchError } from 'rxjs/Operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  file: any;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.email = "demi-44@hotmail.com";
    this.password = "1234";
  }
  public login2(): Observable<any> {
    return this.loginService.post("login/", { email: this.email, password: this.password })
      .pipe(catchError(() => "Error"), data => {
        console.log("data:asasd ", (data));
        return data;
      });
  }


  login() {
    this.login2().subscribe(
      list => {

        console.log(list);
        let response: any = JSON.parse(list._body);
        let elements: any;
        if (response.code === 0) {
          elements = response.response;

          //  console.log(this.vehiculos);
        }
        console.log((elements.token));
      });
  }

  public uplloadFile2(): Observable<any> {
    console.log(this.file);
    return this.loginService.uploadFile(this.file)
      .pipe(catchError(() => "Error"), data => {
        console.log("data:asasd ", (data));
        return data;
      });
  }
  public onFileSelected(event){
    this.file = event.target.files[0];
    console.log(this.file);
  }


  uploadFile() {
    this.uplloadFile2().subscribe(
      list => {

        console.log(list);
        let response: any = JSON.parse(list._body);
        let elements: any;
        if (response.code === 0) {
          elements = response.response;

          //  console.log(this.vehiculos);
        }
        console.log((elements.token));
      });
  }
}
