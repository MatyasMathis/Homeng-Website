import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  ngOnInit():void{
    window.scrollTo(0,0);
   }
}
