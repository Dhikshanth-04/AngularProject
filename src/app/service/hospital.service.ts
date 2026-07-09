import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor() { }
  getData(){
    return[
      {
        patientName : "SiiRii",
        patientStatus : "Out of Danger",
        patientAge : 22,
        discharge : true
      },{
        patientName : "Dhikshanth",
        patientStatus : "Not well",
        patientAge : 21,
        discharge : true
      },{
        patientName : "Arunkumar",
        patientStatus : "Danger",
        patientAge : 21,
        discharge : false
      }
    ]
  }
}
