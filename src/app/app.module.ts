import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { DiscountPipe } from './CustomPipes/discount.pipe';
import { EmiPipe } from './CustomPipes/emi.pipe';
import { AltCharCapPipe } from './CustomPipes/alt-char-cap.pipe';
import { HospitalComponent } from './hospital/hospital.component';
import { FormsComponent } from './forms/forms.component';
import { TaskComponent } from './task/task.component';
import { AcademyComponent } from './academy/academy.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProductComponent,
    DiscountPipe,
    EmiPipe,
    AltCharCapPipe,
    HospitalComponent,
    FormsComponent,
    TaskComponent,
    AcademyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
