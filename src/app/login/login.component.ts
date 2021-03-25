import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef:any) {
    var userInf:any = JSON.parse(sessionStorage.getItem("userRef")!);

    console.log(loginRef);
    let user1 = loginRef.user;
    let pass1 = loginRef.pass;

    if(userInf.user == user1 && userInf.pass == pass1){
      console.log("LOGGED IN");
      sessionStorage.setItem("token","123");
      //this.router.navigate(["portfolio"]);
    }else{
      console.log("TRY AGAIN")
    }

  }



}
