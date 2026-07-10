import { Component } from '@angular/core';
import { AcademyService } from '../service/academy.service';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent {
  academy:any[] = []; 
  constructor(private academyList : AcademyService){
    this.academy = this.academyList.academy();
  }
  @Input()
  prodName!:string;
  @Output()
  productClicked = new EventEmitter();
  buyProduct(){
    this.productClicked.emit(this.prodName + "purchased");
  }
}
