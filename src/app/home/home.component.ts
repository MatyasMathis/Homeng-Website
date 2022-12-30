import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  name:string='';

  ngOnInit():void{
   
  }

}
