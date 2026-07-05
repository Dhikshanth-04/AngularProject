import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular';
  ang=true
  name="angular"
  
  
  fNameLabel = "Enter First name : "
  fNameInput = "SiiRii"
  
  emailLabel = "Enter Email ID : "
  emailInput = "siirii@gmail.com"
  
  a(){
    alert(`the user name : ${this.fNameInput} \nthe email id : ${this.emailInput}`)
  }


count:number = 0;

add(){
  this.count++;
}

sub(){
  this.count--;
}
reset(){
  this.count=0;
}

string:string = "";
get length(): number{
  return this.string.length;
}
}
