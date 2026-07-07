import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: any[] = [];
  constructor(private productService : ProductService){
    this.product = this.productService.getProduct();
  }

  name ={
    name : "SiiRii",
    age : 22
    };
}
