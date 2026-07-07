import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';


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
}
