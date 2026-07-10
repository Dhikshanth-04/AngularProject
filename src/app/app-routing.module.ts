import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { HospitalComponent } from './hospital/hospital.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'student',
    component: StudentComponent
  },{
    path: 'product',
    component: ProductComponent
  },{
    path: 'hospital',
    component: HospitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
