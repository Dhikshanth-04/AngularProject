import { Component, Input } from '@angular/core';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {
  patients: any[] = [];
  constructor(private hospitalService : HospitalService){
    this.patients = this.hospitalService.getData();
  }

  getStatusColor(status: string): string {

  if (status === 'Out of danger') {
    return 'green';
  }

  if (status === 'Not well') {
    return 'orange';
  }

  if (status === 'Danger') {
    return 'red';
  }

  return 'black';
}

@Input()
prodName!:string;
}
