import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  pass: string;
  constructor(private userService: UserService) { }
  list: Array<Object>;
  ngOnInit() {
    this.name = "";
    this.pass = "";
    this.userService.listar().subscribe(
      list => {
        this.list = Object.create(list._body);
        console.log(this.list);
        for(let i=0;i<this.list.length;i++){
          console.log(this.list[i]);
         
        }
      }
    );


  }

}




