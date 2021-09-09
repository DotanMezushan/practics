import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  @Input() headerIconParent!:string;
  @Input() headerDescriptionParent!:string;
  @Input() headerTitleParent!:string;
  constructor() { }

  ngOnInit(): void {
    this.headerTitleParent ="Error 404"
    this.headerDescriptionParent ="Page not found"
    this.headerIconParent="fas fa-exclamation-triangle"
  }

}
