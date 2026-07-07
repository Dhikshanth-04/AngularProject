import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getStudent(){
    return[
      {
      name: "SiiRii",
      age: 22,
      department: "CSE",
      arrear: "M2"
    },{
      name:"Dhikshanth",
      age: 21,
      department: "CSE",
      arrear: "null"
    }
  ];
  }
}
