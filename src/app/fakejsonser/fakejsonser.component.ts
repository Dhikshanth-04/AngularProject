import { Component } from '@angular/core';
import { FakejsonService } from '../service/fakejson.service';

@Component({
  selector: 'app-fakejsonser',
  templateUrl: './fakejsonser.component.html',
  styleUrls: ['./fakejsonser.component.css']
})
export class FakejsonserComponent {
  constructor(private fake:FakejsonService){
    this.loadUser();
  }
  user:any[] = [];
  loadUser(){
    this.fake.loadData().subscribe((data:any)=>{
      this.user=data.users;
    })
  }
}
