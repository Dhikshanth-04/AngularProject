import { Component, ɵIS_HYDRATION_DOM_REUSE_ENABLED } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CRUDService } from '../service/crud.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  taskform = new FormGroup({
    name: new FormControl('', [Validators.pattern('^[A-Z][a-z]+$'), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    gender: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    courses: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ]),
    agree: new FormControl('', Validators.required),
    pwd: new FormControl('', [Validators.pattern('^[a-zA-Z0-9]{6,}$'), Validators.required]),
    cpwd: new FormControl('', Validators.required),

  });
  get name(){
    return this.taskform.get('name');
  }get email(){
    return this.taskform.get('email');
  }get pwd(){
    return this.taskform.get('pwd');
  }get cpwd(){
    return this.taskform.get('cpwd');
  }get courses(){
    return this.taskform.get('courses') as FormArray;
  }
  courseList: string[]=["Java", "Python", "Javascript", "Typescript"];

  constructor(private crud : CRUDService){ this.getUser(); }

  rowId!: any;
  
  submit(){
    if(this.taskform?.valid){
      console.log(`Row ID : ${this.rowId}`);
      if(this.rowId){
        this.crud.updateStudent(this.taskform.value, this.rowId).subscribe((res)=>{
          alert("Data updated");
          this.getUser(); 
          this.taskform.reset();
          this.rowId = null;
        })
      }else{
        alert("Form submitted");
        this.crud.addStudent(this.taskform.value).subscribe((res)=>{
          console.log(res);
        });
        this.getUser();
        this.taskform.reset();
      }
    }else{
      this.taskform.markAllAsTouched();
    }
  }
  
  students:any[] = [];
  getUser(){
     this.crud.getStudent().subscribe((data:any)=>{
      this.students = data;
      console.log(data);
  });
  }

  edit(student:any){
    this.rowId = student.id;
    this.taskform.patchValue({
      name: student.name,
      email: student.email,
      gender: student.gender,
      color: student.color,
      mobile: student.mobile,
      courses: student.courses,
      pwd: student.pwd,
      cpwd: student.cpwd,
      agree: student.agree
    });
  }
  delete(rowId:any){
    this.crud.deleteStudent(rowId).subscribe(()=>{
      alert("Student deleted");
      this.getUser();
    })
  }


}
