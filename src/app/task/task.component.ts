import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  taskform = new FormGroup({
    name: new FormControl('', [Validators.pattern('^[A-Z][a-z]+$'), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    pwd: new FormControl('', [Validators.pattern('^[a-zA-Z0-9].{13,}$'), Validators.required]),
    cpwd: new FormControl('', Validators.required),
    languages: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ])
  });
  LanguageList:string[] = ['A', 'B', 'C', 'D'];
  get name(){
    return this.taskform.get('name');
  }get email(){
    return this.taskform.get('email');
  }get pwd(){
    return this.taskform.get('pwd');
  }get cpwd(){
    return this.taskform.get('cpwd');
  }get languages(){
    return this.taskform.get('languages') as FormArray;
  }

  submit(){
    if(this.taskform?.valid){
      alert("Form submitted");
    }else{
      this.taskform.markAllAsTouched();
    }
  }
  selected:string[]  = this.LanguageList.filter((values, index)=>{
    this.languages.value[index];
  })
}
