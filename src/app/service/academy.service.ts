import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademyService {

  constructor() { }
  academy(){
    return [{
      name: "Tap Academy",
      area: "BTM Layout",
      course: "Full stack java development"
    },{
      name: "TVK Technologies",
      area: "Marathalli",
      course: "Angular development"
    }
  ];
  }
}
