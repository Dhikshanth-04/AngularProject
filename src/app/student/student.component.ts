import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Input, Output } from '@angular/core'; 


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  student:any = [];
  constructor(private studentService: StudentService){
    this.student = this.studentService.getStudent();
  }
  @Input()
  studentName!:string;
}
