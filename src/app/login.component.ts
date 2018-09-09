import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent {
  public uname:string = "";
  public pwd:string = "";
  public result:string = "";

  public f1():void{
      if (this.uname == "admin" && this.pwd == "admin123"){
          this.result = "Welcome to admin";
              }else{
                  this.result = "Invalid Username or Password";
              }
  }
}
