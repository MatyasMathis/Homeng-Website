import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  pdfUrl:string='';
  constructor(private http:HttpClient){

  }
  ngOnInit() :void{
    window.scrollTo(0,0);
  }
}
