import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { DiscountPipe } from './CustomPipes/discount.pipe';
import { EmiPipe } from './CustomPipes/emi.pipe';
import { AltCharCapPipe } from './CustomPipes/alt-char-cap.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProductComponent,
    DiscountPipe,
    EmiPipe,
    AltCharCapPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
