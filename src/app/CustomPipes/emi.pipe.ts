import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emi'
})
export class EmiPipe implements PipeTransform {

  transform(price: number): string {
    if(price>20000){
      return "10 months";
    }else if(price>1000){
      return "5 months";
    }else{
      return "No EMI";
    }
  }
}
