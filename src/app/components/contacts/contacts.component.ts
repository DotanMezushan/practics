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
// this.contacts=[
//   {
//     name: 'Victor',
//     email: "tsanhan@gmail.com",
//     birthday: '09/16/1985',
//     phones:['0366555663']
    
//   },
//   {
//     name: 'Dima',
//     email: "d_com@walla.com",
//     birthday: '10/25/1890'
//   },
//   {
//     name: 'Haim',
//     email: "haim_hamekach@gmail.com",
//     birthday: '12/09/1976'
//   },
//   {
//     email: "koralyehezkel@gmail.com",
//     name: 'Koral',
//     birthday: '05/03/1999',
//     phones:['0926653365','0426698805']
//   },
//   {
//     email: "dotanbm3052@gmail.com",
//     name: 'Dotan',
//     birthday: '01/18/1992',
//     phones:['0546511144']
//   }
// ];