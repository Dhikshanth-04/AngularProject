import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altCharCap'
})
export class AltCharCapPipe implements PipeTransform {

  transform(value: string){
    let res = "";
    for(let i=0; i<value.length; i++){
      if(i%2==1){
        res = res + value[i]; 
      }else{
        res = res + (value[i].toUpperCase());
      }
    }
    return res;
  }

}
