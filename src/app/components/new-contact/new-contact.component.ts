import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;

  name: string="";
  email: string="";
  birthday: string="";
  phones ?:string[]=undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.headerIconParent="fas fa-plus-circle";
    this.headerTitleParent ="Add New Contact Form"; 
    this.headerDescriptionParent="Write Contact details";
  }
  onSubmit($formObject:any){
    console.log($formObject);
    console.log($formObject.form.value);
      
  };
}


