import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  api = "http://localhost:3000/user";
  constructor(private http:HttpClient) { }
  
  //Post Method
  addStudent(data:any){
    return this.http.post(this.api, data);
  }

  //Get Method
  getStudent(){
    return this.http.get(this.api);
  }

  //Put method
  updateStudent(student:any, id:any){
    return this.http.put(`${this.api}/${id}`, student);
  }

  //Delete method
  deleteStudent(id:any){
    return this.http.delete(`${this.api}/${id}`);
  }

}
