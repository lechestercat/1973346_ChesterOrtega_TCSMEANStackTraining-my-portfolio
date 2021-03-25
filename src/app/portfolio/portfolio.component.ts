import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  user:string = ""
  contacts: Array<any> =[];

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser():void {
    var userInf:any = JSON.parse(sessionStorage.getItem("userRef")!);
    var str = userInf.user;
    console.log(str);
    this.user = userInf.user;
  }

  addContact(contactRef:any) {
    this.contacts.push(contactRef);
    console.log(this.contacts);
  }

  logout(){
    sessionStorage.removeItem("token");
    this.router.navigate(["login"]);
  }
}
