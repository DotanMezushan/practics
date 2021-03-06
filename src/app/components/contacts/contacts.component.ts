import { Component, Input, OnInit } from '@angular/core';
import {ContactModel} from 'src/app/models/ContactModel'
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts!: Array<ContactModel>;

  @Input() headerIconParent!:string;
  @Input() headerDescriptionParent!:string;
  @Input() headerTitleParent!:string;
  constructor(private contactsService :ContactsService) { }

  ngOnInit(): void {
    this.headerTitleParent ="Contact"
    this.headerDescriptionParent ="Contact Discretion"
    this.headerIconParent="fas fa-envelope"

    this.contactsService.Contacts.subscribe({
      next: (result : ContactModel[]) =>{
      this.contacts=result;
      },
      error:(err: any)=>{
        console.log(err);
      }
    });



  }
  isMoreThanOnePhones( phones ?:string[]): boolean {
    if (phones===undefined) {
      return false
    }
     return phones.length>1
  }
  isAlreadyHaveBirthdayThisYear(dateString: string): boolean { 
    const date= new Date(dateString);
    console.log(date);
    
    const currentDate= new Date(Date.now()) ;
      if( date.getMonth()!==currentDate.getMonth())
      return date.getMonth() < currentDate.getMonth();
      return (date.getDate() <= currentDate.getDate()); 
  }

}
