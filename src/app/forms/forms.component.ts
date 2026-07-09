import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
 myForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(5)]),
  age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  pwd: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$')]),
  cpwd: new FormControl('', Validators.required),
  gender: new FormControl('', Validators.required),
  country: new FormControl('', Validators.required),
  languages: new FormArray([
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
    new FormControl(false),
  ])
 });

languageList: string[] =["java", "Python", "C", "C++", "Javascript"];

get name(){
  return this.myForm.get('name');
 }get age(){
  return this.myForm.get('age');
 }get email(){
  return this.myForm.get('email');
 }get pwd(){
  return this.myForm.get('pwd');
 }get cpwd(){
  return this.myForm.get('cpwd');
 }get gender(){
  return this.myForm.get('gender');
}get country(){
  return this.myForm.get('country');
}get languages(){
  return this.myForm.get('languages') as FormArray;
}
 
 check(){
  if(this.myForm.valid){
    alert("form submited");
    this.myForm.reset();
  }else{
    this.myForm.markAllAsTouched();
  }
 }
 display(){
 const selectedLanguages = this.languageList.filter(
  (value, index) => this.languages.value[index]
);

console.log(selectedLanguages);
}
}