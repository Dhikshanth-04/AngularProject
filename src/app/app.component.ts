import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular';
  name = "angular is good"
  data = "Laptop";
  showMessage(msg:string){
    alert(msg);
  }
}

