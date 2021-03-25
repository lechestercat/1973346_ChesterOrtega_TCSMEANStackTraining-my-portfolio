import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(userRef:any) {
    //console.log("Event generated");
    console.log(userRef);
    let fName1 = userRef.fName;
    let lName1 = userRef.lName;
    let user1 = userRef.user;
    let pass1 = userRef.pass;

    sessionStorage.setItem("userRef",JSON.stringify(userRef));
   

  }

}
