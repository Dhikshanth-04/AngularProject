import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakejsonService {
  api = "https://dummyjson.com/users";
  constructor(private http:HttpClient) { }
  //get method
  loadData(){
    return this.http.get(this.api);
  }
}
