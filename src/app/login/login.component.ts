import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string="";

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(loginRef:any) {
    var userInf:any = JSON.parse(sessionStorage.getItem("userRef")!);

    console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;

    if(userInf.user == user1 && userInf.pass == pass1){
      this.msg = "Logged In!"
      sessionStorage.setItem("token","123");
      this.router.navigate(["portfolio"]);
    }else{
      this.msg = "Try Again!"
    }

  }



}
