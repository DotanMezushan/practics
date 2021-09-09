import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-headers',
  templateUrl: './page-headers.component.html',
  styleUrls: ['./page-headers.component.css']
})
export class PageHeadersComponent implements OnInit {

 @Input() headerIcon!:string;
 @Input() headerDescription!:string;
 @Input('title') headerTitle!:string;
  constructor() { }

  ngOnInit(): void {
   
  }

}
