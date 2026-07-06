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

StudentProfileTitle:string = "Student Profile Card";
userName:string = "Dhikshanth";
userAge: number = 22;
userDepartment: string = "CSE";
userCgpa: number = 4.5;
userCollege: string = "Paavai engineering college"

imageUrl:string = "assets/sideView.webp";
altString: string = "Night king with dragon";


arr: string[] =["SiiRii", "Dhiksh", "Arun"];

students = [
  {
    name:"SiiRii",
    age : 22
  },
  {
    name:"Dhiksh",
    age: 21
  },
  {
    name:"Arun",
    age: 21
  }
];

status: string = "pending";
isAdmin: boolean = true;
}

