import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(){
    return [
      {
        productName : "Laptop",
        price : 23000,
        category : "Electronics",
        stock : 20
      },{
        productName : "Watch",
        price : 2300,
        category : "Analog",
        stock : 20
      },{
        productName : "Cricket Bat",
        price : 200,
        category : "Wooden Bat",
        stock : 0
      }
    ];
  }
}
